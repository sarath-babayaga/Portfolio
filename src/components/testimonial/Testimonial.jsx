import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: "Elizabeth",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt nobis esse, fuga cumque pariatur minima consequuntur quaerat natus!",
  },
  {
    avatar: AVTR2,
    name: "John Smith",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt nobis esse, fuga cumque pariatur minima consequuntur quaerat natus! Autem vel maxime",
  },
  {
    avatar: AVTR3,
    name: "Sarah",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deserunt nobis esse, fuga cumque pariatur minima consequuntur quaerat natus! Autem vel maxime",
  },
  {
    avatar: AVTR4,
    name: "Kimberly",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Autem vel maxime a earum corrupti dolores accusamus rem quidem vero",
  },
];
const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container mySwiper"
        pagination={true}
        spaceBetween={50}
      slidesPerView={1}
        modules={[Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            //SwiperSlide
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} alt="Avatar one"></img>
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
