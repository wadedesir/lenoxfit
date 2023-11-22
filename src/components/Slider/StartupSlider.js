import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-6.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-7.jpg";

const StartupSlider = () => {
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
            <div className="hero-text white-color fade-center-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="white-color font-700">Branding Agency</h1>
                  <h4 className="white-color">We Build Digital Solutions</h4>
                  <p className="text-center mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-dark btn-md btn-default remove-margin"
                    >
                      Contact Us
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
                <div className="white-color text-center">
                  <h1 className="white-color font-700">
                    Let us Show <br />
                    You the World
                  </h1>

                  <p className="white-color">
                    Mauris facilisis dignissim venenatis. In felis leo,
                    porttitor hendrerit ipsum
                    <br /> vitae, suscipit vulputate dui. Donec pulvinar iaculis
                    sem in lobortis.
                  </p>
                  <p className="text-center mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-outline-white btn-md btn-default remove-margin"
                    >
                      Our Work
                    </a>
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-color btn-md btn-default"
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

export default StartupSlider;
