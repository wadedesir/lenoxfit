import React from "react";
import img from "../../assets/images/slides/home-bg-15.jpg";

const RestaurantSlider = () => (
  <section className="home-slider" id="home">
    <div className="full-screen-bg">
      <div
        className="parallax-img parallax-effect"
        style={{
          background: `url(${img}) center center / cover scroll no-repeat`,
        }}
      ></div>
      <div className="hero-text-wrap">
        <div className="hero-text white-color fade-center-text">
          <div className="container">
            <div className="white-color text-center">
              <h1 className="kaushan-font letter-spacing-0">
                Making people
                <br />
                happy through food.
              </h1>
              <h5 className="source-font">Good Honest Grandy Since 1896.</h5>
              <p className="text-center mt-30">
                <a
                  href={process.env.PUBLIC_URL}
                  className="btn btn-light btn-md btn-default remove-margin"
                >
                  See Our Menu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RestaurantSlider;
