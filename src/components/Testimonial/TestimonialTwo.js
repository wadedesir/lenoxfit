import React from "react";
import Slider from "react-slick";
import imgBg from "../../assets/images/background/parallax-bg-2.jpg";

const TestimonialTwo = ({ data }) => {
  const settings = {
    className: "testimonial",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
  };
  return (
    <section
      className="parallax-bg fixed-bg"
      data-stellar-background-ratio="0"
      style={{ backgroundImage: `url(${imgBg})` }}
    >
      <div className="parallax-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              {data.map((testimonial) => (
                <div className="testimonial-item" key={testimonial.id}>
                  <div className="testimonial-content">
                    <img
                      className="img-responsive img-circle"
                      src={require("../../assets/images/" + testimonial.image)}
                      alt={testimonial.title}
                    />
                    <h5>{testimonial.title}</h5>
                    <p>{testimonial.role}</p>
                    <h4>{testimonial.text}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialTwo;
