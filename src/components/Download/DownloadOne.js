import React from "react";
import ReactWow from "react-wow";

const DownloadOne = ({ image, title, text }) => (
  <section className="red-bg" id="download">
    <div className="container">
      <ReactWow animation="fadeInLeft" delay="0.1s">
        <div className="col-md-8">
          <img className="img-responsive" src={image} alt="ipad" />
        </div>
      </ReactWow>
      <div className="col-md-4 white-color">
        <h2 className="text-uppercase font-700 source-font mt-120">{title}</h2>
        <p className="mt-30">{text}</p>

        <p className="text-left mt-30 app-btns">
          <a
            href={process.env.PUBLIC_URL}
            className="btn btn-outline-white btn-md ml-0"
          >
            <i className="ion-social-apple"></i> App Store
          </a>
          <a
            href={process.env.PUBLIC_URL}
            className="btn btn-outline-white btn-md"
          >
            <i className="ion-social-android"></i> Play Store
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default DownloadOne;
