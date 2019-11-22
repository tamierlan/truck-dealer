import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Truck({ truck }) {
  const { name, detail, images, price } = truck;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>cost</p>
        </div>
        <Link to={`/trucks/${detail}`} className="btn-primary room-link">
          Auctions
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

Truck.propTypes = {
  truck: PropTypes.shape({
    name: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
