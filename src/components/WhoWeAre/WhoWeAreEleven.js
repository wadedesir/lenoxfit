import React from "react";

const WhoWeAreEleven = ({ title, text }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="mt-0 dark-color">{title}</h2>
          <hr className="dark-bg" />
          <p className="font-26px">{text}</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAreEleven;
