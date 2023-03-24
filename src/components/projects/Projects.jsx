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
import IMG9 from "../../assets/modern-ui.png";
import IMG10 from "../../assets/hoobank.png"

const data = [
  {
    id: 1,
    image: IMG4,
    title: "Weather API",
    github: "https://github.com/sarath-babayaga/weather",
    demo: "https://main--dashing-torrone-3780f7.netlify.app/"
  },
  // {
  //   id: 2,
  //   image: IMG5,
  //   title: "Gmail Clone Frontend",
  //   github: "https://github.com/sarath-babayaga/gmail-frontend-clone",
  //   demo: ""
  // },
  // {
  //   id: 3,
  //   image: IMG6,
  //   title: "Pricing Table using React",
  //   github: "https://github.com/sarath-babayaga/react-pricing-table",
  //   demo: ""
  
  // },
  // {
  //   id: 4,
  //   image: IMG7,
  //   title: "Shopping Page using React",
  //   github: "https://github.com/sarath-babayaga/react-shopping-cart",
  //   demo: ""
  
  // },
  {
    id: 5,
    image: IMG8,
    title: "Personal Portfolio",
    github: "https://github.com/sarath-babayaga/portfolio",
    demo: ""
  
  },
  {
    id: 6,
    image: IMG9,
    title: "GPT Modern UI",
    github: "https://github.com/sarath-babayaga/modern-ui",
    demo: "https://master--leafy-caramel-03f840.netlify.app/"
  
  },
  {
    id: 7,
    image: IMG10,
    title: "Hoo Bank",
    github: "https://github.com/sarath-babayaga/hoobank",
    demo: "https://main--strong-toffee-165a79.netlify.app/"
  
  },
];
const Projects = () => {
  return (
    <section id="project">
      
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="projects_item">
              <div className="projects_item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="projects_item-cta">
                <a href={github} className="btn" target="_blank">Github</a>
                {/* <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a> */}
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};


export default Projects