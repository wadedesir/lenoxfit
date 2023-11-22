import React from "react";
import parse from "html-react-parser";
import imgBg from "../../assets/images/background/parallax-bg.jpg";

const ParallaxOne = ({ title, children, btnText, btnPath }) => (
  <section
    className="parallax-bg fixed-bg"
    data-stellar-background-ratio="0.2"
    style={{ backgroundImage: `url(${imgBg})` }}
  >
    <div className="gradient-overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center col-md-offset-3 white-color">
          <h2 className="font-60px">{title}</h2>
          <p className="font-20px">{children && parse(children)}</p>
          <p className="mt-30">
            <a
              href={btnPath}
              className="btn btn-outline-white btn-md btn-circle"
            >
              {btnText}
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ParallaxOne;
