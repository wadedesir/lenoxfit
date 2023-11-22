import React from "react";

const PricingThree = ({ data }) => (
  <section>
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div
            className={
              "col-md-3 col-sm-6 pricing-table" +
              (item.featured ? "-featured" : "")
            }
            key={item.id}
          >
            <div className="pricing-box">
              <h4 className={item.featured ? "dark-color" : ""}>
                {item.title}
              </h4>
              <h2 className={item.featured ? "default-color" : ""}>
                <sup>{item.currency}</sup>
                <span>{item.price}</span>
              </h2>
              <ul>
                {item.features
                  ? item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))
                  : null}
              </ul>
              <div className="pricing-box-bottom">
                <a
                  href={process.env.PUBLIC_URL}
                  className={
                    "btn btn-md btn-circle btn-" +
                    (item.featured ? "color" : "dark")
                  }
                >
                  Get Plan
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingThree;
