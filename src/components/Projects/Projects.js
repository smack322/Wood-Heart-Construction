import React from 'react';
import './projects.css';
import GalleryCarousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';



const Projects = () => {
  const kitchen1 = [
    {
      title: 'Kitchen Renovation',
      service: 'Interior Work',
      status: 'before',
      image: require('../../images/kitchen1/before.jpg'),
    },
    {
      title: 'Kitchen Renovation',
      service: 'Interior Work',
      status: 'during',
      image: require('../../images/kitchen1/during.jpg'),
    },
    {
      title: 'Kitchen Renovation',
      service: 'Interior Work',
      status: 'during',
      image: require('../../images/kitchen1/during2.jpg'),
    },
    {
      title: 'Kitchen Renovation',
      service: 'Interior Work',
      status: 'during',
      image: require('../../images/kitchen1/after1.jpg'),
    },
    {
      title: 'Kitchen Renovation',
      service: 'Interior Work',
      status: 'during',
      image: require('../../images/kitchen1/after2.jpg'),
    }
  ];

  const kitchen2 = [
    {
      title: 'Kitchen Remodel',
      service: 'Interior Work',
      status: 'before',
      image: require('../../images/kitchen2/before1.jpg'),
    },
    {
      title: 'Kitchen Remodel',
      service: 'Interior Work',
      status: 'before',
      image: require('../../images/kitchen2/before2.jpg'),
    },
    {
      title: 'Kitchen Remodel',
      service: 'Interior Work',
      status: 'during',
      image: require('../../images/kitchen2/during1.jpg'),
    },
    {
      title: 'Kitchen Remodel',
      service: 'Interior Work',
      status: 'during',
      image: require('../../images/kitchen2/during2.jpg'),
    },
    {
      title: 'Kitchen Remodel',
      service: 'Interior Work',
      status: 'after',
      image: require('../../images/kitchen2/after.jpg'),
    }
  ];

  const deck1 = [
    {
      title: 'Deck Renovation',
      service: 'Exterior Work',
      status: 'before',
      image: require('../../images/deck1/before.jpg'),
    },
    {
      title: 'Deck Renovation',
      service: 'Exterior Work',
      status: 'after',
      image: require('../../images/deck1/after1.jpg'),
    },
    {
      title: 'Kitchen Remodel',
      service: 'Interior Work',
      status: 'after',
      image: require('../../images/deck1/after2.jpg'),
    },
    {
      title: 'Kitchen Remodel',
      service: 'Interior Work',
      status: 'after',
      image: require('../../images/deck1/after3.jpg'),
    },
    {
      title: 'Kitchen Remodel',
      service: 'Interior Work',
      status: 'after',
      image: require('../../images/deck1/after4.jpg'),
    }
  ];

  const deck2 = [
    {
      title: 'Deck Rebuild',
      service: 'Exterior Work',
      status: 'before',
      image: require('../../images/deck2/before.jpg'),
    },
    {
      title: 'Deck Rebuild',
      service: 'Exterior Work',
      status: 'after',
      image: require('../../images/deck2/after.jpg'),
    }
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div id="projects" className="projects">
      <h2>Our Projects</h2>
      <div className="projects__container">
        <h3>Interior Work</h3>
        <GalleryCarousel autoplay={true}>
          {kitchen1.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project__overlay">
                <h3>{project.title}</h3>
              </div>
              <p>{project.status}</p>
              <p>Add description...</p>
            </div>
          ))}
        </GalleryCarousel>
        <GalleryCarousel autoplay={true}>
          {kitchen2.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project__overlay">
                <h3>{project.title}</h3>
              </div>
              <p>{project.status}</p>
              <p>Add description...</p>
            </div>
          ))}
        </GalleryCarousel>
        <h3>Exterior Work</h3>
        <GalleryCarousel autoplay={true}>
          {deck1.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project__overlay">
                <h3>{project.title}</h3>
              </div>
              <p>{project.status}</p>
              <p>Add description...</p>
            </div>
          ))}
        </GalleryCarousel>
        <GalleryCarousel autoplay={true}>
          {deck2.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="project__overlay">
                <h3>{project.title}</h3>
              </div>
              <p>{project.status}</p>
              <p>Add description...</p>
            </div>
          ))}
        </GalleryCarousel>
      </div>
    </div>
  );
};

export default Projects;