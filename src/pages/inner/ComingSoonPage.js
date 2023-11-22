import React from "react";
import Countdown from "react-countdown";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-23.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const ComingSoonPage = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <ul className="countdown">
        <li>
          <span className="days">{days}</span>
          <p>days</p>
        </li>
        <li>
          <span className="hours">{hours}</span>
          <p>hours </p>
        </li>
        <li>
          <span className="minutes">{minutes}</span>
          <p>minutes</p>
        </li>
        <li>
          <span className="seconds">{seconds}</span>
          <p>seconds</p>
        </li>
      </ul>
    );
  };
  return (
    <Loader>
      <NavbarSocial data={dataNavbar} type="white" />
      <section
        className="title-hero-bg dark-block coming-soon-section parallax-effect"
        style={{ backgroundImage: `url(${imgBg})`, overflow: "hidden" }}
      >
        <div className="parallax-overlay"></div>
        <div className="container">
          <div className="page-title text-center">
            <h1>We're Coming Soon!</h1>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="countdown-container">
                  <Countdown
                    date={Date.now() + (28 * 24 * 60 * 60000 + 41500000)}
                    renderer={renderer}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterOne />
    </Loader>
  );
};

export default ComingSoonPage;
