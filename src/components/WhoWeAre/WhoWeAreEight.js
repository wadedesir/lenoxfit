import React from "react";

const WhoWeAreEight = ({ title, text, data }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <h2 className="mt-0 dark-color">{title}</h2>
          <p className="font-26px">{text}</p>
        </div>
      </div>

      <div className="row">
        {data.map((item) => (
          <div className="col-md-3 col-sm-6" key={item.id}>
            <div className="box-icon box-shadow-hover text-center">
              <i className={item.icon + " font-50px dark-icon"}></i>
              <div className="title-section">
                <h4 className="mt-0 font-600">{item.title}</h4>
                <p className="font-400">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreEight;
