import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-13.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-14.jpg";

const PortfolioSlider = () => {
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
          <div className="hero-text-wrap overlay-bg">
            <div className="hero-text white-color fade-center-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="white-color font-400 play-font mb-0 letter-spacing-10">
                    Creative
                  </h1>
                  <h1 className="white-color font-700 text-uppercase play-font mt-0">
                    Portfolio
                  </h1>
                  <h5 className="white-color play-font">
                    We are New York and Chichago digital agency for digital
                    strategy.
                  </h5>
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
          <div className="hero-text-wrap overlay-bg">
            <div className="hero-text white-color fade-center-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="white-color font-400 play-font mb-0 letter-spacing-10">
                    Amazing
                  </h1>
                  <h1 className="white-color font-700 text-uppercase play-font mt-0">
                    Grandy Studio
                  </h1>
                  <h5 className="white-color play-font">
                    We care about the clients I serve and have the expertise to
                    bring their business goals to fruition.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default PortfolioSlider;
