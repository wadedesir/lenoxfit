import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-18.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-19.jpg";

const PhotographySlider = () => {
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
              background: `url(${imgSlide1}) center center / cover scroll no-repeat`
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text white-color fade-center-text">
              <div className="container">
                <div className="white-color text-center white-color">
                  <h2 className="font-700">Think Imagine Create</h2>
                  <h3 className="font-200 text-uppercase source-font">
                    Grandy Photography
                  </h3>
                  <p className="text-center mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-outline-white btn-md btn-default"
                    >
                      View Project
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
                  <h2 className="font-700">Frame Your Life</h2>
                  <h3 className="font-200 text-uppercase source-font">
                    Imagine More
                  </h3>
                  <p className="text-center mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-dark btn-md btn-default"
                    >
                      View Project
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

export default PhotographySlider;
