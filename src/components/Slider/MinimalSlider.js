import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-8.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-9.jpg";

const MinimalSlider = () => {
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
    <section className="home-slider dark-block">
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
                <div className="dark-color text-left">
                  <h1 className="dark-color font-700 text-uppercase">
                    Dream It <br /> We Build
                  </h1>
                  <h5 className="dark-color">
                    Design inspired by the ever evolving world.
                  </h5>
                  <p className="text-left mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-dark-outline btn-md btn-square remove-margin"
                    >
                      Our Blogs
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
            <div className="hero-text dark-color fade-left-text">
              <div className="container">
                <div className="dark-color text-center">
                  <h1 className="dark-color font-700 text-uppercase">
                    Unique <br />
                    Creations
                  </h1>
                  <h5 className="dark-color">
                    Ultimate Passion for Artistic Solution.
                  </h5>
                  <p className="text-center mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-dark btn-md btn-square remove-margin"
                    >
                      Request a Project
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

export default MinimalSlider;
