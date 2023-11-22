import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-16.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-17.jpg";

const ArchitectureSlider = () => {
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
    <section className="home-slider" id="home">
      <Slider {...settings}>
        <div className="slide">
          <div
            className="slide-img parallax-effect"
            style={{
              background: `url(${imgSlide1}) center center / cover scroll no-repeat`,
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text white-color fade-center-text">
              <div className="container">
                <div className="white-color text-center white-color">
                  <h1 className="font-700 text-uppercase mb-0">
                    Grandy Studio
                  </h1>
                  <h3 className="font-200 text-uppercase letter-spacing-25 source-font mt-0">
                    Architecture
                  </h3>
                  <p className="text-center mt-30">
                    <a href={process.env.PUBLIC_URL} className="btn btn-outline-white btn-square btn-md btn-default remove-margin">
                      About Us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div
            className="slide-img parallax-effect"
            style={{
              background: `url(${imgSlide2}) center center / cover scroll no-repeat`,
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text white-color fade-center-text">
              <div className="container">
                <div className="white-color text-center white-color">
                  <h1 className="font-700 text-uppercase mb-0">Architecture</h1>
                  <h3 className="font-200 text-uppercase letter-spacing-25 source-font mt-0">
                    Never Derived
                  </h3>
                  <p className="text-center mt-30">
                    <a href={process.env.PUBLIC_URL} className="btn btn-outline-white btn-square btn-md btn-default remove-margin">
                      Our Projects
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default ArchitectureSlider;
