import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ucvd7g9",
        "template_2p8743r",
        form.current,
        "Rn7CQ1xDq3ufugefP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.rest()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>sarathblu1996@gmail.com</h5>
            <a href="mailto:sarathblu1996@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Sarath Kumar</h5>
            <a
              href="https://www.linkedin.com/in/sarath-kumar-157b3a20b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B63biTyt4TgKQHkGVVP%2Fh9w%3D%3D"
              target="_blank"
            >
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            {/* <h5>6383761630</h5> */}
            <a
              href="https://api.whatsapp.com/send?phone=916383761630"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
