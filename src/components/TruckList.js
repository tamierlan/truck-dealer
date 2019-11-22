import React from 'react';
import Truck from './Truck';

export default function Trucklist({ trucks }) {
  if (trucks.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no trucks matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {trucks.map(item => {
          return <Truck key={item.id} truck={item} />
        })}
      </div>
    </section>
  );
}
