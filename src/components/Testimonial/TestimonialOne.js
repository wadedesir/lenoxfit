import React from "react";
import Slider from "react-slick";

const TestimonialOne = ({ data, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    className: "testimonial"
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <h2>{title}</h2>
            <hr className="dark-bg" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              {data.map((item) => (
                <div className="testimonial-item" key={item.id}>
                  <div className="testimonial-content">
                    <img
                      className="img-responsive img-circle"
                      src={require("../../assets/images/" + item.image)}
                      alt={item.title}
                    />
                    <h5>{item.title}</h5>
                    <p>{item.role}</p>
                    <h4>{item.text}</h4>
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

export default TestimonialOne;
