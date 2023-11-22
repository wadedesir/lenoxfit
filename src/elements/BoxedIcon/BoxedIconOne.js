import React from "react";

const BoxedIconOne = ({ data, title }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-uppercase text-center">{title}</h4>
        </div>
      </div>

      <div className="row mt-50">
        {data.map((item) => (
          <div className="col-md-3 col-sm-6" key={item.id}>
            <div className="box-icon box-shadow-hover text-center">
              <i className={item.icon + " font-50px indigo-icon"}></i>
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

export default BoxedIconOne;
