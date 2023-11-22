import React from "react";

const DemoFeatures = ({ data }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading text-center">
          <h4 className="text-uppercase">Easy Customizable UI Elements</h4>
          <h2>Themes Features</h2>
        </div>
      </div>

      <div className="row mt-50">
        {data.map((feature, i) => (
          <div className="col-md-3 col-sm-6" key={feature.id}>
            <div className="box-icon text-center">
              <i className={feature.icon + " font-50px dark-icon"}></i>
              <div className="title-section">
                <h6 className="mt-0 text-uppercase">{feature.title}</h6>
                <p className="font-400">{feature.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DemoFeatures;
