import React from "react";
import ReactWow from "react-wow";

const FeatureOne = ({ data, image }) => (
  <section id="feature" className="white-bg">
    <div className="container">
      <div className="row">
        <ReactWow animation="fadeInLeft" delay="0.1s">
          <div className="col-md-4">
            <img className="img-responsive" src={image} alt="iphone-2" />
          </div>
        </ReactWow>
        <div className="col-md-8 mt-100">
          <h2 className="text-uppercase font-700 source-font">Features</h2>
          <p>
            Started as early as internet we are the leading business analytics
            solutions agency serving the digital empire from the last two
            decades.
          </p>

          <div className="row mt-50">
            {data.map((feature, i) => (
              <ReactWow
                animation="fadeInUp"
                delay={`0.${i + 1}s`}
                key={feature.id}
              >
                <div className="col-md-6 feature-box text-left mb-50 col-sm-6">
                  <div className="pull-left">
                    <i className={feature.icon + " font-40px red-icon"}></i>
                  </div>
                  <div className="pull-right">
                    <h4 className="mt-0 font-400 text-uppercase source-font">
                      {feature.title}
                    </h4>
                    <p className="font-400">{feature.text}</p>
                  </div>
                </div>
              </ReactWow>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureOne;
