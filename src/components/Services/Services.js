import React from 'react';
import './services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenRuler, faPaintRoller, faCompassDrafting, faHammer, faClipboard, faScrewdriver  } from '@fortawesome/free-solid-svg-icons';
// import {faFacebook} from '@fortawesome/free-brands-svg-icons';

const Services = () => {

  const services = [
    {
      icon: faPaintRoller,
      title: 'Interior Woodwork',
      description: 'Installing and renovating interior woodwork elements, including trim work, crown molding, baseboards, wainscoting, and paneling to enhance the aesthetics and character of a space.',
      image: require('../../images/kitchen1/after2.jpg'),
    },
    {
      icon: faPenRuler,
      title: 'Cabinetry and Millwork',
      description: 'Designing and building custom cabinetry and millwork for kitchens, bathrooms, closets, and other areas of the home or commercial spaces to elevate the aesthetic appeal.',
      image: require('../../images/kitchen2/after.jpg'),
    },
    {
      icon: faScrewdriver,
      title: 'Exterior Woodwork',
      description: 'Constructing and repairing exterior woodwork elements like decks, pergolas, fences, gates, siding, and architectural features that add beauty and functionality to outdoor areas.',
      image: require('../../images/deck1/after3.jpg'),
    },
    {
      icon: faCompassDrafting,
      title: 'Custom Woodworking Projects',
      description: 'Taking on unique and challenging woodworking projects, such as custom-built libraries, wine cellars, home theaters, bars, and other specialty pieces to transform ordinary spaces into extraordinary.',
      image: require('../../images/custom/custom.jpg'),
    },
    {
      icon: faClipboard,
      title: 'Woodworking Design and Consultation',
      description: 'Offering design expertise and consulting services to assist clients in conceptualizing their woodworking projects, selecting suitable materials, and optimizing functionality and aesthetics.',
      image: require('../../images/misc_decks/after2_job1.jpg'),
    },
    {
      icon: faHammer,
      title: 'Renovations and Remodeling',
      description: 'Providing comprehensive woodworking services for home renovations and remodeling projects, including structural modifications, flooring installations, staircase upgrades, and more.',
      image: require('../../images/deck1/after1.jpg'),
    }
  ];
  return (
    <div id="services" className="services">
      <h2 id="service-heading">Our Services</h2>
      <div className="services__container">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <FontAwesomeIcon icon={service.icon} size="3x" alt={`${service.title} icon`} />
            <h3 id="service-title">{service.title}</h3>
            <p id="service-desc">{service.description}</p>
            <img src={service.image} alt={service.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;