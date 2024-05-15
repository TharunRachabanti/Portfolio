import React from 'react';
import '../styles/services.css';

// Service data remains unchanged
const servicesList = [
  {
    title: 'WEB DEVELOP',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: '/assets/dispersionmine4.png',
  },
  {
    title: 'WEB DESIGN',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: '/assets/dispersionmine4.png',
  },
  {
    title: 'GRAPHIC DESIGN',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: '/assets/dispersionmine4.png',
  },
  {
    title: 'SEO',
    description: 'With over 5+ years of job experience. I studied Information Technology at',
    logo: '/assets/dispersionmine4.png',
  },
];

// Updated Services component
const Services = () => {
  return (
    <div className="servicesContainer">
      {servicesList.map((service, index) => (
        <div key={index} className="serviceCard">
          <div className="serviceLogoContainer">
            <img src={service.logo} alt={service.title} className="serviceLogo" />
          </div>
          <h3 className="serviceTitle">{service.title}</h3>
          <p className="serviceDescription">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
