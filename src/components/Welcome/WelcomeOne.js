import React from "react";
import ReactWow from "react-wow";

const WelcomeOne = ({ image, toggler, setToggler }) => (
  <section className="pattern-bg-light default-bg">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7 white-color">
        <ReactWow animation="fadeInUp" delay="0.1s">
          <h4 className="text-uppercase mb-0">About Grandy</h4>
        </ReactWow>
        <ReactWow animation="fadeInUp" delay="0.2s">
          <div>
            <h2 className="mt-10">Who We Are</h2>
            <hr className="white-bg left-line" />
          </div>
        </ReactWow>
        <ReactWow animation="fadeInUp" delay="0.3s">
          <div className="mt-30">
            <p>
              We are an Creative agency, based in New York. Vision Every company
              is performing best online. Mission Helping businesses to find the
              perfect and most succesful strategy, to be online. we come up with
              great creative ideas that engage and captivate your customers.
            </p>
            <p className="mt-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              arcu est. Vivamus elementum tempus orci, id ultrices diam gravida
              in. Curabitur hendrerit pulvinar mauris, vel pellentesque velit
              venenatis aliquam.
            </p>
            <p className="mt-20">
              <a
                href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
                className="btn btn-light btn-md popup-youtube remove-margin"
                onClick={(e) => {
                  e.preventDefault();
                  setToggler(!toggler);
                }}
              >
                Watch Our Video
                <span className="icon">
                  <i className="fa fa-play"></i>
                </span>
              </a>
            </p>
          </div>
        </ReactWow>
      </div>
    </div>
  </section>
);

export default WelcomeOne;
