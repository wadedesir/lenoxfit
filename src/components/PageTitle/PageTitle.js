import React from "react";

const PageTitle = ({ title, tagline, image }) => (
  <section
    className="title-hero-bg dark-block parallax-effect"
    style={{backgroundImage: `url(${image})`}}
  >
    <div className="container">
      <div className="page-title text-center">
        <h1>{title}</h1>
        <h4 className="text-uppercase mt-30">{tagline}</h4>
      </div>
    </div>
  </section>
);

export default PageTitle;
