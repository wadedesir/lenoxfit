import React from "react";

const ParallaxThree = ({ title, text, btnText, btnPath, image }) => (
  <section
    className="parallax-bg fixed-bg"
    data-stellar-background-ratio="0.2"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="parallax-overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center col-md-offset-3 white-color">
          <h2 className="font-60px">{title}</h2>
          <p className="font-20px">{text}</p>
          <p className="mt-30">
            <a
              href={btnPath || process.env.PUBLIC_URL}
              className="btn btn-outline-white btn-md btn-circle"
            >
              {btnText || "Start a Project"}
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ParallaxThree;
