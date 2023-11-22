import React from "react";

const PageTitleThree = ({ title, tagline, image }) => (
  <section
    className="title-hero-bg parallax-effect"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="parallax-overlay"></div>
    <div className="container">
      <div className="page-title text-center white-color">
        <h1>{title}</h1>
        <h4 className="text-uppercase mt-30">{tagline}</h4>
      </div>
    </div>
  </section>
);

export default PageTitleThree;
