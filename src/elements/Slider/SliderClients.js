import React from "react";
import Slider from "react-slick";

const SliderClients = ({ data, classes, title }) => {
  const settings = {
    className: "client-slider",
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={"white-bg " + (classes ? classes : "")}>
      <div className="container">
        <div className="row">
          <h4 className="text-uppercase text-center">{title}</h4>
        </div>
        <div className="row mt-50">
          <Slider {...settings}>
            {data.map((client) => (
              <div className="client-logo" key={client.id}>
                <img
                  className="img-responsive"
                  src={require("../../assets/images/" + client.image)}
                  alt={client.title}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderClients;
