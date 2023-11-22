import React from "react";

const AboutMeOne = () => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <div className="title-section text-center">
            <h2 data-backletter="About">About Me</h2>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-4 info">
          <ul>
            <li>
              <h3>
                <i className="ion-ios-person"></i> Name
              </h3>
              <p>Flip Oliver</p>
            </li>
            <li>
              <h3>
                <i className="ion-briefcase"></i> Designation
              </h3>
              <p>Front-end Coder</p>
            </li>
            <li>
              <h3>
                <i className="ion-calendar"></i> Date of Birth
              </h3>
              <p>14 April 1991</p>
            </li>
            <li>
              <h3>
                <i className="ion-android-map"></i> Location
              </h3>
              <p>New York, United States of America</p>
            </li>
            <li>
              <h3>
                <i className="ion-android-mail"></i> Email
              </h3>
              <p>flipoliver@mail.com</p>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <p className="font-300 font-20px line-height-35 mt-0">
            I specialize in front-end development. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nulla luctus consequat rutrum. Donec
            consectetur eros et nulla viverra dictum vel at nulla. Morbi
            hendrerit dolor lacus, in porttitor tellus vehicula id.
          </p>
          <p className="font-300 font-20px line-height-35 mt-30">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut
            lacinia varius ante at viverra. Vestibulum leo justo, facilisis nec
            pellentesque vitae, feugiat ut mi.
          </p>
          <ul className="social-networks mt-30">
            <li className="social-icon-fb">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={process.env.PUBLIC_URL}
              >
                <i className="ion-social-facebook"></i>
              </a>
            </li>
            <li className="social-icon-lk">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={process.env.PUBLIC_URL}
              >
                <i className="ion-social-linkedin"></i>
              </a>
            </li>
            <li className="social-icon-sk">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={process.env.PUBLIC_URL}
              >
                <i className="ion-social-skype"></i>
              </a>
            </li>
            <li className="social-icon-de">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={process.env.PUBLIC_URL}
              >
                <i className="ion-social-dribbble"></i>
              </a>
            </li>
            <li className="social-icon-tw">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={process.env.PUBLIC_URL}
              >
                <i className="ion-social-twitter"></i>
              </a>
            </li>
          </ul>
          <p className="mt-30">
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-md btn-dark btn-square ml-0"
            >
              Hire Me
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-md btn-outline btn-square"
            >
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMeOne;
