import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-1.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-2.jpg";

const SliderImage = ({ title }) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    className: "default-slider",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <h4 className="text-uppercase text-center">{title}</h4>
        </div>
        <div className="row mt-50">
          <Slider {...settings}>
            <div className="slide">
              <div
                className="slide-img parallax-effect"
                style={{
                  background: `url(${imgSlide1}) center center / cover scroll no-repeat`,
                }}
              ></div>
              <div className="hero-text-wrap">
                <div className="hero-text white-color zoom-text">
                  <div className="container">
                    <div className="white-color text-center">
                      <h1 className="white-color font-700">Slide One</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide">
              <div
                className="slide-img"
                style={{
                  background: `url(${imgSlide2}) center center / cover scroll no-repeat`,
                }}
              ></div>
              <div className="hero-text-wrap">
                <div className="hero-text white-color zoom-text">
                  <div className="container">
                    <div className="white-color text-center">
                      <h1 className="white-color font-700">Slide Two</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderImage;
