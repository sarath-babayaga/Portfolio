import React from 'react'
import './Footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Sarath</a>

      <ul className="permalinks">
        <li><a href="#"></a>Home</li>
        <li><a href="#about"></a>About</li>
        <li><a href="#experience"></a>Experience</li>
        <li><a href="#services"></a>Services</li>
        <li><a href="#projects"></a>Projects</li>
        <li><a href="#testimonial"></a>Testimonial</li>
        <li><a href="#contact"></a>Contact</li>
      </ul>

      <div className="footer_socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <BsDribbble />
      </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer