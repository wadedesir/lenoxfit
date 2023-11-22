import React from "react";

const WhoWeAreSix = ({ title, text }) => (
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h3 className="text-uppercase">{title}</h3>
          <p className="font-26px">{text}</p>

          <p className="text-center mt-30">
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-outline btn-md btn-circle remove-margin"
            >
              View More
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAreSix;
