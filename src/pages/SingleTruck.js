import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {TruckContext} from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleTruck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: this.props.match.params.detail,
    };
  }
  static contextType = TruckContext;

  render() {
    const {getTruck} = this.context;
    const truck = getTruck(this.state.detail);
    if(!truck) {
      return (
        <div className="error">
          <h3>no such truck could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to truck
          </Link>
        </div>
      );
    }
    const {name, description,
      year, mile, price, extras, withTrailer, withBed, images} = truck;
      const [mainImg, ...defaultImg] = images;

    return (
      <>
        <StyledHero img={mainImg}>
          <Banner title={`${name} truck`}>
            <Link to='/truck' className='btn-primary'>
              back to trucks
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h6>info</h6>
              <h6>price: ${price}</h6>
              <h6>mile: ${mile}</h6>
              <h6>year: {year}
              </h6>
              <h6>{withBed ? "with the bed" : "does not have bed"}</h6>
              <h6>{withTrailer && "with the trailer"}</h6>
            </article>
            <section className="room-extras">
              <h6>extras</h6>
              <ul className="extras">
                {extras.map((item, index) => {
                  return <li key={index}>-{item}</li>
              })}</ul>
            </section>
          </div>
        </section>
      </>
    );
  }
}
