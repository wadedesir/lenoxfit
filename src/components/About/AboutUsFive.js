import React from "react";

const AboutUsFive = ({ image, data }) => (
  <section className="dark-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7 white-color">
        {data.map((feature) => (
          <div className="feature-box text-left mb-30" key={feature.id}>
            <div className="pull-left">
              <i className={feature.icon + " font-40px light-icon"}></i>
            </div>
            <div className="pull-right">
              <div className="title-section">
                <h4
                  className="mt-0 font-600 white-color"
                  data-backletter={feature.title[0]}
                >
                  {feature.title}
                </h4>
              </div>
              <p className="font-400">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUsFive;
