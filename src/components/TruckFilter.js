import React from 'react';
import { useContext } from 'react';
import { TruckContext } from '../context';
import Title from '../components/Title';
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}

export default function TruckFilter({ trucks }) {
  const context = useContext(TruckContext);
  const {
    handleChange,
    make,
    year,
    price,
    minPrice,
    maxPrice,
    minMile,
    maxMile,
    withTrailer,
    withBed
  } = context;
  //get unique types
  let makes = getUnique(trucks, "make");
  // add all
  makes = ["all", ...makes];
  // map to jsx
  makes = makes.map((item, index) => {
    return (
      <option value={item} key={index}>{item}</option>
    );
  });
  let years = getUnique(trucks, "year");
  years = [2019, ...years]
  years = years.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  });


  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type*/}
        <div className="form-group">
          <label htmlFor="type">make</label>
          <select
            name="make"
            id="make"
            value={make}
            className="form-control"
            onChange={handleChange}>
              {makes}
          </select>
        </div>
        {/*end select type*/}
        {/*guests*/}
        <div className="form-group">
          <label htmlFor="year">year</label>
          <select
            name="year"
            id="year"
            value={year}
            className="form-control"
            onChange={handleChange}
          >
            {years}
          </select>
        </div>
        {/*end guests*/}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">price ${price}</label>
          <input type="range" name="price" min={minPrice} max={maxPrice} id="price"
            value={price} onChange={handleChange} className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="mile">mileage</label>
          <div className="mile-inputs">
            <input
              type="number"
              name="minMile"
              id="mile"
              value={minMile}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxMile"
              id="id"
              value={maxMile}
              onChange={handleChange}
              className="mile-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="withTrailer"
              id="withTrailer"
              checked={withTrailer}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">with the trailer</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="withBed"
              id="withBed"
              checked={withBed}
              onChange={handleChange}
            />
            <label htmlFor="pets">with the bed</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}
