import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-10.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-11.jpg";

const OnePageSlider = () => {
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
            <div className="hero-text fade-center-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="font-700 font-90px">We Are Grandy</h1>
                  <h5 className="text-uppercase">
                    A Well Rounded Approach to Life Coaching.
                  </h5>
                  <p className="text-center mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-color btn-md btn-circle remove-margin"
                    >
                      Buy Template
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
            <div className="hero-text fade-center-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="font-700 font-90px">Focus on Business</h1>
                  <h5 className="text-uppercase">
                    We Do everything to Make Our Customers Succeed Online.
                  </h5>
                  <p className="text-center mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-outline-white btn-md btn-circle remove-margin"
                    >
                      Read More
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

export default OnePageSlider;
