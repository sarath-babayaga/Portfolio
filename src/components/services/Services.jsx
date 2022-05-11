import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="service">
      
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Plan and implement new designs </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Optimize existing user interface designs</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Combine creativity with the design elements</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Understand client's goals and objectives</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>UI design portfolio</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Ability to discuss and explain design options</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Experience with HTML5 & CSS3</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Website and software application designing</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Directing or performing Website updates.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Website maintenance</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Back up files from Web sites to local directories</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Determining needs by analyzing requirements</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>High degree of independent judgment.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Editing, writing, or designing Website content</p>
            </li>
            {/* <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li> */}
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Writing, reviewing, editing, updating content</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Excellence in writing, profreading, and editing</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>An understanding of SEO best practices</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Utilizing SEO methods to increase site traffic</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Monitoring social media and company website</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Using social media to engage consumers</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>A portfolio of applicable outputs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
