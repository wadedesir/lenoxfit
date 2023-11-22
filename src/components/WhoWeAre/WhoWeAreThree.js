import React from "react";
import ReactWow from "react-wow";

const WhoWeAreThree = ({ data, title, tagline, children }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h4 className="text-uppercase">{tagline}</h4>
          <h2>{title}</h2>
          <div className="mt-30">{children}</div>
        </div>
      </div>
      <div className="row mt-50">
        {data.map((service, i) => (
          <ReactWow animation="fadeInUp" delay={`0.${i}s`} key={service.id}>
            <div className="col-md-4 feature-box text-center">
              <i className={`${service.icon} font-40px dark-icon`}></i>
              <h4>{service.title}</h4>
              <p>{service.text}</p>
            </div>
          </ReactWow>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreThree;
