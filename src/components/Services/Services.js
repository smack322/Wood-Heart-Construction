import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services__container">
        <div className="service">
          <img src="/images/service1.jpg" alt="Service 1" />
          <h3>Cabinetry and Millwork</h3>
          <p>Designing and building custom cabinetry and millwork for kitchens, bathrooms, closets, and other areas of the home or commercial spaces.</p>
        </div>
        <div className="service">
          <img src="/images/service2.jpg" alt="Service 2" />
          <h3>Interior Woodwork</h3>
          <p>Installing and renovating interior woodwork elements, including trim work, crown molding, baseboards, wainscoting, and paneling to enhance the aesthetics and character of a space.</p>
        </div>
        <div className="service">
          <img src="/images/service3.jpg" alt="Service 3" />
          <h3>Exterior Woodwork</h3>
          <p>Constructing and repairing exterior woodwork elements like decks, pergolas, fences, gates, siding, and architectural features that add beauty and functionality to outdoor areas.</p>
        </div>
        <div className="service">
          <img src="/images/service1.jpg" alt="Service 1" />
          <h3>Custom Woodworking Projects</h3>
          <p>Taking on unique and challenging woodworking projects, such as custom-built libraries, wine cellars, home theaters, bars, and other specialty pieces.</p>
        </div>
        <div className="service">
          <img src="/images/service2.jpg" alt="Service 2" />
          <h3>Renovations and Remodeling</h3>
          <p>Providing comprehensive woodworking services for home renovations and remodeling projects, including structural modifications, flooring installations, staircase upgrades, and more.</p>
        </div>
        <div className="service">
          <img src="/images/service3.jpg" alt="Service 3" />
          <h3>Woodworking Design and Consultation</h3>
          <p>Offering design expertise and consulting services to assist clients in conceptualizing their woodworking projects, selecting suitable materials, and optimizing functionality and aesthetics.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;