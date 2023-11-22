import React from "react";
import TypeIt, { TypeItInput } from "@isaac.scarrott/react-type-it";
import imgSlide from "../../assets/images/slides/home-bg-23.jpg";
import imgLogo from "../../assets/images/demo-imgs/dragon-logo.png";

const DemosSlider = () => (
  <section className="home-slider">
    <div className="full-screen-bg">
      <div
        className="parallax-img parallax-effect"
        style={{
          background: `url(${imgSlide}) center center / cover scroll no-repeat`,
        }}
      >
        <div className="hero-text-wrap white-overlay-bg">
          <div className="hero-text">
            <div className="container">
              <div className="text-center demo-section">
                <h1 className="mb-0">
                  <img src={imgLogo} alt="dragon-theme" />
                </h1>
                <div className="grandy">
                  <TypeIt className="type-it font-700 type-it-resume" loop>
                    <TypeItInput duration={500} delay={1000}>
                      Grandy
                    </TypeItInput>
                    <TypeItInput duration={500} delay={1000}>
                      a
                    </TypeItInput>
                    <TypeItInput duration={500} delay={1000}>
                      Creative Agency
                    </TypeItInput>
                    <TypeItInput duration={500} delay={1000}>
                      Multi Purpose
                    </TypeItInput>
                    <TypeItInput duration={500} delay={1000}>
                      React Theme
                    </TypeItInput>
                    <TypeItInput duration={500} delay={1000}>
                      Based on
                    </TypeItInput>
                    <TypeItInput duration={500} delay={1000}>
                      React Hooks
                    </TypeItInput>
                    <TypeItInput duration={500} delay={1000}>
                      15 Demos
                    </TypeItInput>
                    <TypeItInput duration={500} delay={1000}>
                      No jQuery
                    </TypeItInput>
                  </TypeIt>
                </div>
                <h5 className="dark-color">
                  Digital Creative Agency Multi-Purpose React Theme
                </h5>
                <p>
                  Grandy is Professional and Great template with <br />
                  15 unique home page designs for creative business.
                </p>
                <p className="text-center mt-30">
                  <a href="!#" className="btn btn-dark btn-md">
                    Buy Theme
                  </a>
                  <a href="#demo" className="btn btn-color btn-md page-scroll">
                    View Demos
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DemosSlider;
