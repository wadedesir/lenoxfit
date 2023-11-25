import React from "react";
import ReactWow from "react-wow";
import 'react-slideshow-image/dist/styles.css';

import placeholder from '../../assets/images/custom/video2.png'

const CounterTwo = ({ data, bg, setToggler, toggler, setSource }) => {

  return (
    <section className={(bg === "dark" ? "dark" : "white") + "-bg pt-100 pb-10"}>
      <div className="container">
        <div className="row">

          <div className="row">
            <div className="col-sm-8 section-heading pb-0">
              <h2 className="mt-0" style={{ color: 'white' }}>Gallery</h2>
              <hr className="white-bg" />
            </div>
          </div>

          <p className="text-center">
            Watch four of our new videos and other media below!
          </p>
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="col-md-6 col-sm-6 mt-20"
              style={{ backgroundImage: `url(${placeholder})`, height: '35vh', backgroundSize: 'cover' }}
            >
              <div className="center-layout">
                <div className="v-align-middle">
                  <a
                    className="popup-youtube"
                    href="!#"
                    onClick={(e) => {
                      e.preventDefault();
                      // setSource(['https://www.youtube.com/watch?v=M-K7mxdN62M&ab_channel=Kurzgesagt%E2%80%93InaNutshell'])
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
          </div>


          {/* <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="col-md-6 col-sm-6 mt-20"
              style={{ backgroundImage: `url(${placeholder})`, height: '35vh', backgroundSize: 'cover' }}
            >
              <div className="center-layout">
                <div className="v-align-middle">
                  <a
                    className="popup-youtube"
                    href="!#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSource(['https://www.youtube.com/watch?app=desktop&v=NXUiu0fyYDs&feature=youtu.be&ab_channel=LenoxFit'])
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

          </div> */}


        </div>
      </div>
    </section>
  )
};

export default CounterTwo;
