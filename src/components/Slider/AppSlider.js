import React from "react";
import ReactWow from "react-wow";
import img from "../../assets/images/iphone.png";

const AppSlider = () => (
  <section className="home-slider" id="home">
    <div className="full-screen-bg">
      <div className="hero-text-wrap light-overlay-bg pattern-bg-light">
        <div className="hero-text white-color fade-center-text">
          <div className="container">
            <div className="row">
              <ReactWow animation="fadeInUp" delay="0.1s">
                <div className="col-md-6 pt-120 pb-20 col-sm-6 white-color">
                  <h2 className="font-200 source-font">
                    Beaultiful Simple <br />
                    and Easy.
                  </h2>
                  <h5 className="white-color mt-30 source-font line-height-26">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam magna felis, eleifend eget tellus quis, efficitur
                    viverra ligula. Nulla vitae ante ipsum.
                  </h5>
                  <p className="text-left mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-dark btn-md remove-margin"
                    >
                      Free Download
                    </a>
                  </p>
                </div>
              </ReactWow>
              <ReactWow animation="fadeInRight" delay="0.3s">
                <div className="col-md-4 i-phones col-md-offset-2 col-sm-4 col-sm-offset-2 mt-80">
                  <img className="img-responsive" src={img} alt="iphone-1" />
                </div>
              </ReactWow>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppSlider;
