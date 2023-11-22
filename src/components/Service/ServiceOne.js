import React from "react";

const ServiceOne = ({ data, title, tagline }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h1 className="mb-0 mt-0 font-700 text-uppercase">{title}</h1>
          <h2 className="mt-10 font-200 letter-spacing-10 source-font text-uppercase">
            {tagline}
          </h2>
        </div>
      </div>
      <div className="row mt-50">
        {data.map((service) => (
          <div className="col-md-3 col-sm-6" key={service.id}>
            <div className="service-box">
              <div className="service-img">
                <img
                  className="img-responsive"
                  src={require("../../assets/images/" + service.image)}
                  alt={service.title}
                />
              </div>
              <div className="service-box-info">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <p className="mt-20">
                  <a
                    href={process.env.PUBLIC_URL}
                    className="btn btn-outline btn-md remove-margin btn-square"
                  >
                    Know more
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceOne;
