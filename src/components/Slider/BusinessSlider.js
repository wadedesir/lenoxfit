import React from "react";
import imgSlide from "../../assets/images/slides/home-bg-12.jpg";

const BusinessSlider = ({ toggler, setToggler }) => (
  <section className="home-slider">
    <div className="full-screen-bg">
      <div
        className="parallax-img parallax-effect"
        style={{
          background: `url(${imgSlide}) center center / cover scroll no-repeat`,
        }}
      ></div>
      <div className="hero-text-wrap color-overlay-bg">
        <div className="hero-text white-color fade-center-text">
          <div className="container">
            <div className="white-color text-left">
              <h1 className="white-color font-700">Corporate Business</h1>
              <h5 className="white-color">
                We are New York and Chicago digital agency for digital
                strategy.
              </h5>
              <p className="text-left mt-30">
                <a
                  href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
                  className="btn btn-light btn-md btn-circle remove-margin btn-animate popup-youtube"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggler(!toggler);
                  }}
                >
                  <span>
                    Watch Our Video<i className="eicon ion-arrow-right-b"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BusinessSlider;
