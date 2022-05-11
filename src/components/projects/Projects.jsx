import React from 'react'
import './Projects.css'
import IMG1 from "../../assets/homepage.png";
import IMG2 from "../../assets/form.png";
import IMG3 from "../../assets/fb-home.png";
import IMG4 from "../../assets/weather.png";
import IMG5 from "../../assets/gmail-clone.png";
import IMG6 from "../../assets/pricing-table.png";
import IMG7 from "../../assets/shopping-cart.png";
import IMG8 from "../../assets/portfolio.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Sample Homepage",
    github: "https://github.com/sarath-babayaga/sample-homepage",
  },
  {
    id: 2,
    image: IMG2,
    title: "Sample Forms",
    github: "https://github.com/sarath-babayaga/sample-form",
  },
  {
    id: 3,
    image: IMG3,
    title: "Sample Facebook Page",
    github: "https://github.com/sarath-babayaga/sample-fb",
  },
  {
    id: 4,
    image: IMG4,
    title: "Weather API",
    github: "https://github.com/sarath-babayaga/sample-weather",
  },
  {
    id: 5,
    image: IMG5,
    title: "Gmail Clone Frontend",
    github: "https://github.com/sarath-babayaga/gmail-frontend-clone",
  },
  {
    id: 6,
    image: IMG6,
    title: "Pricing Table using React",
    github: "https://github.com/sarath-babayaga/react-pricing-table",
  },
  {
    id: 7,
    image: IMG7,
    title: "Shopping Page using React",
    github: "https://github.com/sarath-babayaga/react-shopping-cart",
  },
  {
    id: 8,
    image: IMG8,
    title: "Personal Portfolio",
    github: "https://github.com/sarath-babayaga/react-portfolio",
  },
  // {
  //   id: 9,
  //   image: IMG8,
  //   title: "CRM - Sample",
  //   github: "https://github.com/sarath-babayaga/sample-crm-frontend",
  // },
];
const Projects = () => {
  return (
    <section id="project">
      
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="projects_item">
              <div className="projects_item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="projects_item-cta">
                <a href={github} className="btn" target="_blank">Github</a>
                <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};


export default Projects