import React from "react";
import placeholder from '../../assets/images/custom/vidplaceholder.png'

const AboutUsThree = ({ image, pathVideo, setToggler, toggler }) => (
  <section className="pt-0 pb-0 fitness-section" id="about">
    <div className="container-fluid">
      <div className="row row-flex flex-center">
        <div className="col-md-4 col-sm-6 darken-bg">
          <div className="col-inner pt-70 pb-50 spacer white-color">
            <h3>Our Story</h3>
            <p className="mt-20">
              Set in the heart of the Berkshire Hills, Lenox Fit is owned and operated by Fitness Professional and longtime Lenox resident, Sue Merritt.  After working in the Fitness Industry for 7+ years, Sue bought Lenox Fit in 2014 and has transformed into a place that is comfortable and accessible for people of all ages and abilities.
            </p>
            <p>
              Open 7 days a week, Lenox Fit offers state of the art equipment, top notch Personal Training, Group Fitness classes, saunas, a Cryotherapy Center as well as a private Pilates studio and a Physical therapy Office.
            </p>
            <p>
              Lenox Fit was chosen by the Small Business Administration as the Woman Owned Business of the year in Massachusetts in 2019 and has also been voted the Best Gym in the Berkshires in 2020, 2021, 2022 and 2023.
            </p>
            <p>
              We offer a variety of membership options for both long term and short term gym enthusiasts. Stop in today and try a day on us!
            </p>
          </div>
        </div>


        <div
          className="col-md-4 col-sm-6 bg-flex-cover "
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
            {/* <p className="mt-20">
              <a
                href={process.env.PUBLIC_URL}
                className="btn btn-light font-500 btn-md btn-square remove-margin"
              >
                More
              </a>
            </p> */}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutUsThree;
