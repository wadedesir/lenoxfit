import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-3.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-4.jpg";

const DigitalSlider = () => {
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
    <section className="home-slider">
      <Slider {...settings}>
        <div className="slide">
          <div
            className="slide-img parallax-effect"
            style={{
              background: `url(${imgSlide1}) center center / cover scroll no-repeat`,
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text white-color fade-left-text">
              <div className="container">
                <div className="white-color text-left">
                  <h1 className="white-color font-700 text-uppercase">
                    We Build <br />
                    Moment of Magic
                  </h1>
                  <h5 className="white-color">
                    We are New York and Chichago digital agency for digital
                    strategy.
                  </h5>
                  <p className="text-left mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-color btn-md btn-default remove-margin"
                    >
                      Request a Quote
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
            <div className="hero-text white-color fade-left-text">
              <div className="container">
                <div className="white-color text-left">
                  <h1 className="white-color font-700 text-uppercase">
                    Experience Beautiful
                  </h1>
                  <h5 className="white-color">
                    We provide a rich suite of creative and technical services.
                  </h5>
                  <p className="text-left mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-outline-white btn-md btn-default remove-margin"
                    >
                      Our Work
                    </a>
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-dark btn-md btn-default"
                    >
                      About US
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

export default DigitalSlider;
