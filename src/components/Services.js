import React, { Component } from 'react';
import Title from './Title';
import { FaTruckMoving, FaTools, FaCarBattery, FaEmpire } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaTruckMoving />,
        title: 'truck repair',
        info: 'Your truck is important to you, If its a commercial vehile, its a part of your business. if your truck!'
      },
      {
        icon: <FaTools />,
        title: 'engine repair',
        info: 'We are experts in determining a scecific maintenence plan for each diesel vehile. We thrive on constantly researching reccurent factory!'
      },
      {
        icon: <FaCarBattery />,
        title: 'mobile full service',
        info: 'Mmobile full service commercial fleet maintenance and repxir with 24 hourse emergency Two services. We also offer on-site fleet maintenence programms!'
      },
      {
        icon: <FaEmpire />,
        title: 'Transmissions',
        info: 'Will your truck not shift into gears?  Are the gears slipping when you shift?  Is your truck leaking fluid'
      }
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    )
  }
}
