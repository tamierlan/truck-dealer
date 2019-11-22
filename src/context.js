import React, { Component } from "react";
// import items from './data';
import Client from './contentful';

const TruckContext = React.createContext();

class TruckProvider extends Component {
  state = {
    trucks: [],
    sortedTrucks: [],
    auctionTrucks: [],
    loading: true,
    make: "all",
    year: 2019,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minMile: 0,
    maxMile: 0,
    withTrailer: false,
    withBed: false
  };
  // getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: 'truckShop',
        // // order: 'sys.createdAt'
        order: 'fields.price'
      });
      let trucks = this.formatData(response.items);
      let auctionTrucks = trucks.filter(truck => truck.auction === true);
      let maxPrice = Math.max(...trucks.map(item => item.price));
      let maxMile = Math.max(...trucks.map(item => item.mile));
      this.setState({
        trucks,
        auctionTrucks,
        sortedTrucks: trucks,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxMile
      });
    } catch (error) {
      console.log(error);
    }
  }

  // getData
  componentDidMount() {
    this.getData()
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let truck = { ...item.fields, images, id };
      return truck;
    });
    return tempItems;
  }

  getTruck = detail => {
    let tempTrucks = [...this.state.trucks];
    const truck = tempTrucks.find(truck => truck.detail === detail);
    return truck;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterTrucks
    );
  };

  filterTrucks = () => {
    let {
      trucks, make,
      year, price,
      minMile, maxMile,
      withTrailer, withBed
    } = this.state;

    // all th rooms
    let tempTrucks = [...trucks];

    // transform value
    year = parseInt(year);
    price = parseInt(price);

    // filter by type
    if (make !== 'all') {
      tempTrucks = tempTrucks.filter(truck => truck.make === make);
    }

    // filter by capacity
    if (year !== 2019) {
      tempTrucks = tempTrucks.filter(truck => truck.year <= year);
    }

    // filter by price
    tempTrucks = tempTrucks.filter(truck => truck.price <= price);

    // filter by size
    tempTrucks = tempTrucks.filter(truck => truck.mile >= minMile &&
    truck.mile <= maxMile);

    // filter by breakfast
    if (withTrailer) {
      tempTrucks = tempTrucks.filter(truck => truck.withTrailer === true);
    }

    // filter by pets
    if (withBed) {
      tempTrucks = tempTrucks.filter(truck => truck.withBed === true);
    }


    // change state
    this.setState({
      sortedTrucks: tempTrucks
    })
  };



  render() {
    return (
      <TruckContext.Provider
        value = {{
          ...this.state,
          getTruck: this.getTruck,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </TruckContext.Provider>
    );
  }
}

const TruckConsumer = TruckContext.Consumer;

export function withTruckConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <TruckConsumer>
        {value => <Component {...props} context={value} />}
      </TruckConsumer>
    )
  }
}

export { TruckProvider, TruckConsumer, TruckContext };
