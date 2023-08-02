// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./testimonials.css";
import AVTAR1 from "../../assets/avatar1.jpg";
import AVTAR2 from "../../assets/avatar2.jpg";
import AVTAR3 from "../../assets/avatar3.jpg";
import AVTAR4 from "../../assets/avatar4.jpg";
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container test-container"
        autoplay={{ delay: 4000 }}
      >
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={AVTAR1} alt="client1" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Labore amet enim anim non incididunt Lorem proident ullamco
            do.Tempor aliquip commodo excepteur exercitation velit sit cillum
            aliquip non in et.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={AVTAR2} alt="client1" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Labore amet enim anim non incididunt Lorem proident ullamco
            do.Tempor aliquip commodo excepteur exercitation velit sit cillum
            aliquip non in et.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={AVTAR3} alt="client1" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Labore amet enim anim non incididunt Lorem proident ullamco
            do.Tempor aliquip commodo excepteur exercitation velit sit cillum
            aliquip non in et.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client-avatar">
            <img src={AVTAR4} alt="client1" />
          </div>
          <h5 className="client-name">Ernest Achiever</h5>
          <small className="client-review">
            Labore amet enim anim non incididunt Lorem proident ullamco
            do.Tempor aliquip commodo excepteur exercitation velit sit cillum
            aliquip non in et.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
