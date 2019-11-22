import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedTrucks from '../components/FeaturedTrucks';

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="trucks that mean business"
          subtitle="Truck engineered to be efficent and reliable with axellent Fuel economy, Freighliner trucks are a smart investment"
        >
          <Link to="/trucks" className="btn-primary">
            Explore Trucks
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedTrucks />
    </React.Fragment>
  )
}
