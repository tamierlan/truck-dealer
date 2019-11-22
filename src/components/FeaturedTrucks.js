import React, { Component } from 'react';
import { TruckContext } from '../context';
import Loading from './Loading';
import Truck from './Truck';
import Title from './Title';

export default class FeaturedTrucks extends Component {
  static contextType = TruckContext;

  render() {
    let { loading, auctionTrucks: trucks } = this.context;
    trucks = trucks.map(truck => {
      return <Truck key = {truck.id} truck = {truck} />
    })
    return (
      <section className="featured-rooms">
        <Title title="auction trucks" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : trucks}
        </div>

      </section>
    )
  }
}
