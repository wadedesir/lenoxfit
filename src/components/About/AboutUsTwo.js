import React from "react";

const AboutUsTwo = ({ image, title, tagline, children }) => (
  <section className="dark-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>

    <div className="container">
      <div className="col-md-5 col-sm-7 white-color">
        <h1 className="mb-0 font-700 text-uppercase mt-0">{title}</h1>
        <h2 className="mt-10 font-200 letter-spacing-10 source-font text-uppercase">
          {tagline}
        </h2>
        <div className="mt-30">{children}</div>
      </div>
    </div>
  </section>
);

export default AboutUsTwo;
