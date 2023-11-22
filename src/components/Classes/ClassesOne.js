import React from "react";
import ReactWow from "react-wow";

const classNameesOne = ({ data, title }) => (
  <section className="white-bg" id="classNamees">
    <div className="container-fluid mx-10">
      <div className="row">
        <div className="col-sm-8 section-heading pb-0">
          <h2 className="mt-0">{title}</h2>
          <h4 className="text-center">Our members enjoy full use of our facility, including fitness classes, locker rooms, saunas & shower facilities.</h4>
          <hr className="dark-bg" />
        </div>
      </div>
      <div className="row mt-50">
        {data.map((item, i) => (
          <ReactWow animation="fadeInUp" delay={`0.${i}s`} key={item.id}>
            <div className="col-md-4 p-0">

              <div className="img-box">
                <img
                  src={require("../../assets/images/" + item.image)}
                  alt={item.title}
                />
                {/* <div className={"img-overlay img-bg-" + item.color}>
                  <div className="center-layout">
                    <div className="v-align-middle text-center white-color">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <p className="mt-20">
                        <a
                          href={process.env.PUBLIC_URL + item.path}
                          className="btn btn-outline-white font-500 btn-md btn-square remove-margin"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </ReactWow>
        ))}
      </div>
    </div>
  </section>
);

export default classNameesOne;
