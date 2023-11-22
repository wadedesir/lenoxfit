import React from "react";

const ServiceTwo = ({ data, title, backfont }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <div className="title-section text-center">
            <h2 data-backletter={backfont}>{title}</h2>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        {data.map((service) => (
          <div className="col-md-4 feature-box text-center" key={service.id}>
            <i
              className={
                service.icon +
                " font-40px dark-icon border-bg-dark-icon circle-icon fade-icon"
              }
            ></i>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceTwo;
