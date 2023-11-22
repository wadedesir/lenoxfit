import React from "react";
import ReactWow from "react-wow";

const WhoWeAreTwo = ({ data }) => (
  <section className="p-0">
    <div className="container-fluid">
      <div className="row row-flex">
        {data.map((service) => (
          <div className="col-md-4" key={service.id}>
            <div className={"col-inner spacer " + service.bg}>
              <ReactWow animation="fadeInUp" delay="0.1s">
                <div className="text-center white-color">
                  <i className={service.icon + " font-40px white-icon"}></i>
                  <h5 className="text-uppercase mt-40">{service.title}</h5>
                  <p>{service.text}</p>
                </div>
              </ReactWow>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoWeAreTwo;
