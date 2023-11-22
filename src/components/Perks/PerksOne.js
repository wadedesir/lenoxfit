import React from "react";

const PerksOne = ({ title, data }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="mt-0 dark-color">{title}</h2>
          <hr className="dark-bg" />
        </div>
      </div>

      <div className="row mt-50">
        {data.map((item) => (
          <div className="col-md-4 feature-box text-center" key={item.id}>
            <i
              className={
                item.icon +
                " font-40px dark-icon border-bg-dark-icon circle-icon fade-icon"
              }
            ></i>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PerksOne;
