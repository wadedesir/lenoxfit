import React from "react";

const WhoWeAreFour = ({ data, title, backfont, items }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <div className="title-section text-center">
            <h2 data-backletter={backfont}>{title}</h2>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        {data.slice(0, items || 4).map((service) => (
          <div
            className="col-md-6 feature-box text-left mb-50 col-sm-6"
            key={service.id}
          >
            <div className="pull-left">
              <i className={`${service.icon} font-40px indigo-icon`}></i>
            </div>
            <div className="pull-right">
              <div className="title-section">
                <h4
                  className="mt-0 font-600"
                  data-backletter={service.title.charAt(0)}
                >
                  {service.title}
                </h4>
              </div>
              <p className="font-400">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreFour;
