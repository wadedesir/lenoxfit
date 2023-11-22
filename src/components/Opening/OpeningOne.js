import React from "react";

const OpeningOne = ({ title, image }) => (
  <section className="pt-0 pb-0">
    <div className="container-fluid">
      <div className="row row-flex flex-center">
        <div className="col-md-6 col-sm-12">
          <div className="col-inner pt-70 pb-50 spacer">
            <div className="title-section">
              <h2 className="mt-10 font-700">{title}</h2>
              <hr className="dark-bg left-line" />
            </div>
            <ul className="careers-listing">
              <li>
                <div className="row">
                  <div className="career-main col-md-9">
                    <h5>Product Designer</h5>
                    <span className="career-type">Part time</span>
                    <span className="career-location">
                      <i className="mdi mdi-map-marker-circle"></i>San
                      Francisco, USA
                    </span>
                  </div>
                  <div className="career-details col-md-3">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-outline btn-sm btn-default btn-animate remove-margin"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="career-main col-md-9">
                    <h5>Software Engineer</h5>
                    <span className="career-type">Full time</span>
                    <span className="career-location">
                      <i className="mdi mdi-map-marker-circle"></i>Los Angeles,
                      USA
                    </span>
                  </div>
                  <div className="career-details col-md-3">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-outline btn-sm btn-default btn-animate remove-margin"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="career-main col-md-9">
                    <h5>Events Manager</h5>
                    <span className="career-type">Full time</span>
                    <span className="career-location">
                      <i className="mdi mdi-map-marker-circle"></i>Dubai, United
                      Arab Emirates
                    </span>
                  </div>
                  <div className="career-details col-md-3">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-outline btn-sm btn-default btn-animate remove-margin"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="career-main col-md-9">
                    <h5>Commerce Coordinator</h5>
                    <span className="blue-color career-type">Part time</span>
                    <span className="career-location">
                      <i className="mdi mdi-map-marker-circle"></i>Melbourne,
                      Australia
                    </span>
                  </div>
                  <div className="career-details col-md-3">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-outline btn-sm btn-default btn-animate remove-margin"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="col-md-6 col-sm-12 bg-flex-cover"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </div>
  </section>
);

export default OpeningOne;
