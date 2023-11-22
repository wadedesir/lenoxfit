import React from "react";
import ReactWow from "react-wow";

const PricingOne = ({ data, title, text }) => (
  <section id="pricing">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2 className="text-uppercase font-700 source-font">{title}</h2>
          <p>{text}</p>
        </div>
        {data.map((item, i) => (
          <ReactWow animation="fadeInRight" delay={`0.${i + 1}s`} key={item.id}>
            <div className="col-md-4 pricing-table">
              <div className="pricing-box">
                <h4>{item.title}</h4>
                <h2 className={item.featured ? "red-color" : ""}>
                  <sup>{item.currency}</sup>
                  <span>{item.price}</span>
                </h2>
                <ul>
                  {item.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="pricing-box-bottom">
                  <a
                    href={process.env.PUBLIC_URL}
                    className={"btn btn-md " + item.button}
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </ReactWow>
        ))}
      </div>
    </div>
  </section>
);

export default PricingOne;
