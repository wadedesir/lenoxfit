import React from "react";
import imgSlide from "../../assets/images/slides/home-bg-21.jpg";

const FashionSlider = () => (
  <section className="section home-slider">
    <div className="full-screen-bg">
      <div
        className="parallax-img"
        style={{
          background: `url(${imgSlide}) center center / cover scroll no-repeat`,
        }}
      ></div>
      <div className="hero-text-wrap">
        <div className="hero-text white-color fade-center-text">
          <div className="container">
            <div className="white-color text-center">
              <h1 className="play-font">Fashion Agency</h1>
              <h4 className="kaushan-font">Perfectly Imperfect</h4>
              <h4 className="play-font mt-30 line-height-45">
                May your clothes be comfy, Your coffee be strong
                <br />
                and your Monday be short
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FashionSlider;
