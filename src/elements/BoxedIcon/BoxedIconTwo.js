import React from "react";

const BoxedIconTwo = ({ data, title }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-uppercase text-center">{title}</h4>
        </div>
      </div>
      <div className="row mt-50">
        {data.map((service, i) => (
          <div className="col-md-4 feature-box text-center" key={service.id}>
            <i className={`${service.icon} font-40px dark-icon`}></i>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BoxedIconTwo;
