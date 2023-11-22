import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-1.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-2.jpg";

const DefaultSlider = () => {
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
            <div className="hero-text white-color zoom-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="white-color font-700">Award Wining Agency</h1>
                  <h5 className="white-color">
                    Digital marketing that delivers a return to the bottom line
                    of your business.
                  </h5>
                  <p className="text-center mt-30">
                    <a href={process.env.PUBLIC_URL} className="btn btn-light btn-md btn-default">
                      Purchase Now
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
            <div className="hero-text white-color zoom-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="white-color font-700">Digital Solution</h1>
                  <h5 className="white-color">
                    We are an independent strategic advertising agency.
                  </h5>
                  <p className="text-center mt-30">
                    <a href={process.env.PUBLIC_URL} className="btn btn-color btn-md btn-default">
                      What We Do
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

export default DefaultSlider;
