import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import TruckContainer from '../components/TruckContainer';

const Trucks = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our trucks">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <TruckContainer />
    </>
  );
}
export default Trucks;
