import React from "react";

const WhoWeAreNine = ({ title, backfont, text }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <div className="title-section text-center">
            <h2 className="mt-0 dark-color" data-backletter={backfont}>
              {title}
            </h2>
            <p className="font-26px">{text}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAreNine;
