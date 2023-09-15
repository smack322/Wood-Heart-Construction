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
      description: 'The before photo showcases a kitchen with a ton of potential. The worn flooring and lack of trim around the window fail to give justice to the kitchens potential '
    },   
    {
      title: 'Kitchen Renovation',
      service: 'Interior Work',
      status: 'during',
      image: require('../../images/kitchen1/after2.jpg'),
      description: 'The final photo unveils the completed project, boasting natural-looking wood floors, a state-of-the-art stainless steel refrigerator, and a sophisticated black countertop.'
    }

  ];

  // const kitchen1_2 = [
  //   {
  //     title: 'Kitchen Renovation',
  //     service: 'Interior Work',
  //     status: 'during',
  //     image: require('../../images/kitchen1/during2.jpg'),
  //     description: 'The above photo effectively illustrates the ongoing progress in the kitchen, now equipped with essential appliances including a dishwasher, microwave, oven, and range.'
  //   },
  //   {
  //     title: 'Kitchen Renovation',
  //     service: 'Interior Work',
  //     status: 'during',
  //     image: require('../../images/kitchen1/after2.jpg'),
  //     description: 'The final photo unveils the completed project, boasting natural-looking wood floors, a state-of-the-art stainless steel refrigerator, and a sophisticated black countertop.'
  //   }

  //]

  const kitchen2 = [
    {
      title: 'Kitchen Transformation',
      service: 'Interior Work',
      status: 'before',
      image: require('../../images/kitchen2/before1.jpg'),
      description: 'The initial photograph unveils the kitchen in its original, unrefined state. Lacking a ceiling and featuring worn hardwood floors, the room is further compromised by a noticeable absence of electrical outlets.'
    },
    // {
    //   title: 'Kitchen Transformation',
    //   service: 'Interior Work',
    //   status: 'before',
    //   image: require('../../images/kitchen2/before2.jpg'),
    //   description: 'Drywall has been installed, electrical outlets have been strategically added, and a new window now enhances the room\'s natural lighting potential.'
    // },
    // {
    //   title: 'Kitchen Transformation',
    //   service: 'Interior Work',
    //   status: 'during',
    //   image: require('../../images/kitchen2/during1.jpg'),
    //   description: 'The third image offers a glimpse into the ongoing renovation, highlighting the drywall that\'s well underway, spackling that has commenced, and ceiling lights that are beginning to be installed.'
    // },
    {
      title: 'Kitchen Transformation',
      service: 'Interior Work',
      status: 'after',
      image: require('../../images/kitchen2/after.jpg'),
      description: 'The finished build really encompasses how a kitchen can be transformed. It now features elegant white marble countertops, sophisticated gray cabinets, and top-of-the-line appliances including a sleek microwave and a high-performance gas range. Complementing these upgrades is the natural-looking wood flooring, adding both warmth and texture to the room. The transformation is one that we are very proud of.'
    }
  ];

  const deck1 = [
    {
      title: 'Deck Renovation',
      service: 'Exterior Work',
      status: 'before',
      image: require('../../images/deck1/before.jpg'),
      description: 'The initial photograph captures the deck in its original, weathered state. The wood appears quite deteriorated, bearing a dark, almost black stain attributed to prolonged sun exposure.'
    },
    {
      title: 'Deck Renovation',
      service: 'Exterior Work',
      status: 'after',
      image: require('../../images/deck1/after1.jpg'),
      description: 'The subsequent photograph displays the completed deck as viewed from ground level. Boasting a sleek gray and white finish, the deck is constructed from composite materials to ensure long-lasting durability.'
    },
    
  ];
  const deck1_2 = [
    {
      title: 'Deck Renovation',
      service: 'Interior Work',
      status: 'after',
      image: require('../../images/deck1/after2.jpg'),
      description: 'The third image offers a top-level perspective of the deck, highlighting its harmonious color scheme of black / white rails, along with the gray baseboards.'
    },
    {
      title: 'Deck Renovation',
      service: 'Interior Work',
      status: 'after',
      image: require('../../images/deck1/after3.jpg'),
      description: 'The final photograph provides a comprehensive view from ground level, capturing both the stairs and the full deck as they extend from the house.'
    }

  ]

  const deck2 = [
    {
      title: 'Deck Rebuild',
      service: 'Exterior Work',
      status: 'before',
      image: require('../../images/deck2/before.jpg'),
      description: 'The initial photograph vividly captures the deck\'s state of disrepair, with its faded black paint and mismatched support beams.'
    },
    {
      title: 'Deck Rebuild',
      service: 'Exterior Work',
      status: 'after',
      image: require('../../images/deck2/after.jpg'),
      description: 'The final photograph beautifully showcases the deck\'s transformation, featuring gray composite wood for durability.'
    }
  ];

  return (
    <div id="projects" className="projects">
      <h2>Our Projects</h2>
      <div className="projects__container">
        <h3>Interior Work</h3>
        <GalleryCarousel autoplay={true}>
          {kitchen1.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <img className="project-style" src={project.image} alt={project.title} />
              {/* <p>{project.status}</p> */}
              
            </div>
          ))}
          {kitchen2.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <img className="project-style" src={project.image} alt={project.title} />
              {/* <p>{project.status}</p> */}
              
            </div>
          ))}

        </GalleryCarousel>
        <h3>Exterior Work</h3>
        <GalleryCarousel autoplay={true}>
          {deck1.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <img className="project-style" src={project.image} alt={project.title} />
              {/* <p>{project.status}</p> */}
              
            </div>
          ))}
              {deck1_2.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <img className="project-style" src={project.image} alt={project.title} />
              {/* <p>{project.status}</p> */}
              
            </div>
          ))}
            {deck2.map((project, index) => (
            <div className="project" key={index}>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <img className="project-style" src={project.image} alt={project.title} />
              {/* <p>{project.status}</p> */}
              
            </div>
          ))}
        </GalleryCarousel>
      </div>
    </div>
  );
};

export default Projects;