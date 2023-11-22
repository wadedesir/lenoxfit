import React from "react";

const WelcomeTwo = ({ image }) => (
  <section className="white-bg" id="about">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
    <div className="container">
      <div className="col-md-5 col-sm-7 text-center">
        <h1 className="mb-0 kaushan-font orange-color font-70px">Since 1896</h1>
        <h2 className="mt-10 text-uppercase font-700 letter-spacing-10">
          Our Story
        </h2>
        <div className="mt-30">
          <p className="mt-30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in arcu
            est. Vivamus elementum tempus orci, id ultrices diam gravida in.
            Curabitur hendrerit pulvinar mauris, vel pellentesque velit
            venenatis aliquam.
          </p>
          <p className="mt-20">
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-orange btn-md popup-youtube remove-margin"
            >
              About Us
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WelcomeTwo;
