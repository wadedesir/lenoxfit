import React from "react";
import video from "../../assets/images/custom/Promo.MOV"
import placeholder from '../../assets/images/custom/vidplaceholder.png'

const AboutUsThree = ({ image, pathVideo, setToggler, toggler }) => (
  <section className="pt-0 pb-0 fitness-section" id="about">
    <div className="container-fluid">
      <div className="row row-flex flex-center">
        <div className="col-md-4 col-sm-6 darken-bg">
          <div className="col-inner pt-70 pb-50 spacer white-color">
            <h3>Our Story</h3>
            <p className="mt-20">
              Set in the heart of the Berkshires,
              LENOX FIT is a modern fitness
              and wellness center.
              We offer professional personal
              training, fitness classes as well as a state of the art recovery suite.
              Our members enjoy use of top of the
              line cardio & strength equipment
              as well as free weights.
            </p>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              iaculis vehicula ipsum, sit amet eleifend risus dapibus in.
            </p> */}
          </div>
        </div>


        <div
          className="col-md-4 col-sm-6 bg-flex-cover"
          style={{ backgroundImage: `url(${placeholder})` }}
        >
          <div className="center-layout">
            <div className="v-align-middle">
              <a
                className="popup-youtube"
                href="!#"
                onClick={(e) => {
                  e.preventDefault();
                  setToggler(!toggler);
                }}
              >
                <div className="play-button">
                  <i className="eicon ion-android-arrow-dropright"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <video className="col-md-4 col-sm-6 bg-flex-cover p-0 darken-bg" autoPlay muted controls>
          <source src={video} type="video/mp4"></source>
        </video> */}

        <div className="col-md-4 col-sm-12 darken-bg">
          <div className="col-inner pt-70 pb-50 spacer">
            <h3>
              <i
                className={`icon-phone light-icon font-30px`}
              ></i>
              <span> </span>
              <span>
                413.637.9893
              </span>
            </h3>
            <h3>
              <i
                className={`icon-map light-icon font-30px`}
              ></i>
              <span> </span>
              <span>
                90 PITTSFIELD ROAD, LENOX, MA
              </span>
            </h3>
            <p className="mt-20">
              <a
                href={process.env.PUBLIC_URL}
                className="btn btn-light font-500 btn-md btn-square remove-margin"
              >
                More
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutUsThree;
