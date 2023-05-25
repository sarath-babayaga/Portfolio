import React from "react";
import "./About.css";
import ME from "../../assets/pose-new.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt=""></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward id="about_icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers id="about_icon" />
              <h5>Clients</h5>
              <small>2+ Clients</small>
            </article>

            <article className="about_card">
              <VscFolderActive id="about_icon" />
              <h5>Projects</h5>
              <small>8 Completed</small>
            </article>
          </div>
          <p>
            I'm an enthusiastic person looking for a career's in Full Stack Development, UI/UX Designing and Web Designing. Currently upscaling myself for a better future.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
