import React from "react";
import parse from "html-react-parser";
import imgIcon from "../../assets/images/gym-icon.png";

const ParallaxTwo = ({ image, children }) => (
  <section
    className="parallax-bg fixed-bg"
    data-stellar-background-ratio="0.2"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="parallax-overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center col-md-offset-3 white-color">
          <h1>
            <img src={imgIcon} alt="" />
          </h1>
          <h2>{parse(children)}</h2>
        </div>
      </div>
    </div>
  </section>
);

export default ParallaxTwo;
