import React from "react";
import TypeIt, { TypeItInput } from "@isaac.scarrott/react-type-it";
import imgSlide from "../../assets/images/slides/home-bg-20.jpg";
import CanvasSlider from "../../elements/CanvasSlider";

const ResumeSlider = () => (
  <section className="home-slider" id="home">
    <div className="full-screen-bg">
      <div
        className="parallax-img parallax-effect"
        style={{
          background: `url(${imgSlide}) center center / cover scroll no-repeat`,
        }}
      ></div>
      <CanvasSlider />
      <div className="hero-text-wrap">
        <div className="hero-text white-color fade-center-text">
          <div className="container">
            <div className="white-color text-center">
              <span
                className="font-700"
                style={{
                  opacity: 0,
                  fontSize: "78px",
                  width: "1px !important",
                }}
              >
                I
              </span>
              <TypeIt
                className="type-it white-color font-700 type-it-resume"
                loop
              >
                <TypeItInput duration={500} delay={1000}>
                  Hi I am
                </TypeItInput>
                <TypeItInput duration={500} delay={1000}>
                  Flip Oliver
                </TypeItInput>
                <TypeItInput duration={500} delay={1000}>
                  Web Designer
                </TypeItInput>
                <TypeItInput duration={500} delay={1000}>
                  And
                </TypeItInput>
                <TypeItInput duration={500} delay={1000}>
                  Developer
                </TypeItInput>
                <TypeItInput duration={500} delay={1000}>
                  From
                </TypeItInput>
                <TypeItInput duration={500} delay={1000}>
                  New York City
                </TypeItInput>
              </TypeIt>
              <p className="font-300 font-26px line-height-40 mt-30">
                Where creativity meets technology. <br />
                Open up your business to new possibilities
              </p>
              <p className="text-center mt-30">
                <a
                  href={process.env.PUBLIC_URL}
                  className="btn btn-md btn-outline-white btn-square"
                >
                  Contact me
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ResumeSlider;
