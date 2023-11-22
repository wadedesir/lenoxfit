import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
import imgParallax from "../../assets/images/background/parallax-bg.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const ButtonsPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle
      title="Buttons"
      tagline="Easily Create Nicely Looking Buttons"
      image={imgBg}
    />
    <section className="pb-40">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 pb-80">
            <h4 className="mb-20 text-center text-uppercase">
              Default Buttons
            </h4>
            <a href={process.env.PUBLIC_URL} className="btn btn-outline btn-lg">
              Button Large
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-outline btn-md">
              Button Medium
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-outline btn-sm">
              Button Small
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-outline btn-xs">
              Button Extra Small
            </a>
          </div>
          <div className="col-md-6 pb-80">
            <h4 className="mb-20 text-center text-uppercase">Color Buttons</h4>
            <a href={process.env.PUBLIC_URL} className="btn btn-color btn-lg">
              Button Large
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-color btn-md">
              Button Medium
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-color btn-sm">
              Button Small
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-color btn-xs">
              Button Extra Small
            </a>
          </div>
        </div>

        <div className="row text-center mt-20">
          <div className="col-md-6 pb-80">
            <h4 className="mb-20 text-center text-uppercase">
              Outline Color Buttons
            </h4>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-outline-color btn-lg"
            >
              Button Large
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-outline-color btn-md"
            >
              Button Medium
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-outline-color btn-sm"
            >
              Button Small
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-outline-color btn-xs"
            >
              Button Extra Small
            </a>
          </div>
          <div className="col-md-6 pb-80">
            <h4 className="mb-20 text-center text-uppercase">Dark Buttons</h4>
            <a href={process.env.PUBLIC_URL} className="btn btn-dark btn-lg">
              Button Large
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-dark btn-md">
              Button Medium
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-dark btn-sm">
              Button Small
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-dark btn-xs">
              Button Extra Small
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      className="dark-block parallax-bg fixed-bg pt-50 pb-40"
      data-stellar-background-ratio="0.2"
      style={{ backgroundImage: `url(${imgParallax})` }}
    >
      <div className="parallax-overlay"></div>
      <div className="container">
        <div className="row text-center mt-50">
          <div className="col-md-6 pb-80">
            <h4 className="mb-20 text-center white-color text-uppercase">
              Light Buttons
            </h4>
            <a href={process.env.PUBLIC_URL} className="btn btn-light btn-lg">
              Button Large
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-light btn-md">
              Button Medium
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-light btn-sm">
              Button Small
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-light btn-xs">
              Button Extra Small
            </a>
          </div>
          <div className="col-md-6 pb-80">
            <h4 className="mb-20 text-center white-color text-uppercase">
              Icon Buttons
            </h4>
            <a href={process.env.PUBLIC_URL} className="btn btn-color btn-lg">
              Button Large
              <span className="icon">
                <i className="eicon ion-scissors"></i>
              </span>
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-light btn-md">
              Button Medium
              <span className="icon">
                <i className="eicon ion-refresh"></i>
              </span>
            </a>
            <a href={process.env.PUBLIC_URL} className="btn btn-dark btn-sm">
              Button Small
              <span className="icon">
                <i className="eicon ion-heart"></i>
              </span>
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-outline-white btn-xs"
            >
              Button Extra Small
              <span className="icon">
                <i className="eicon ion-gear-b"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="pb-40 white-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 pb-80">
            <h4 className="mb-20 mt-0 text-center text-uppercase">
              Animated Buttons
            </h4>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-color btn-lg btn-animate"
            >
              <span>
                Animated Button <i className="eicon ion-edit"></i>
              </span>
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-light btn-md btn-animate"
            >
              <span>
                Animated Button <i className="eicon ion-settings"></i>
              </span>
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-dark btn-sm btn-animate"
            >
              <span>
                Animated Button <i className="eicon ion-cloud"></i>
              </span>
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-outline btn-xs btn-animate"
            >
              <span>
                Animated Button <i className="eicon ion-coffee"></i>
              </span>
            </a>
          </div>
          <div className="col-md-6 pb-80">
            <h4 className="mb-20 mt-0 text-center text-uppercase">
              Shapes Buttons
            </h4>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-color btn-lg btn-square"
            >
              Button Sqaure
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-light btn-lg btn-rounded"
            >
              Button Rouded
            </a>
            <a
              href={process.env.PUBLIC_URL}
              className="btn btn-dark btn-lg btn-circle"
            >
              Button Circle
            </a>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default ButtonsPage;
