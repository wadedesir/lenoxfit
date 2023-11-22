import React, { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-ten-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-13.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import Loader from "../../components/Loader/Loader";

const PortfolioSingleThree = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(0);
  const closeLightbox = () => {
    setIsOpen(false);
  };
  const openLightbox = (e, photo) => {
    e.preventDefault();
    setPhoto(photo);
    setIsOpen(true);
  };
  return (
    <Loader>
      <NavbarSocial data={dataNavbar} type="white" />
      <PageTitleThree
        title="Our wants are your needs"
        tagline="A New Age for Digital Marketing"
        image={imgBg}
      />
      <section className="dark-block">
        <div className="container">
          <div className="row">
            <div className="col-md-8 portfolio-left">
              <div id="grandy-folio">
                <div className="portf-wrapper">
                  {dataPortfolio.map((item) => (
                    <div className="portf-item col-md-12" key={item.id}>
                      <div className="portfolio gallery-image-hover text-center">
                        <div className="folio-overlay"></div>
                        <img
                          src={require("../../assets/images/" + item.image)}
                          alt=""
                        />
                        <div className="portfolio-wrap">
                          <ul className="portfolio-details">
                            <li>
                              <a
                                className="alpha-lightbox"
                                href={process.env.PUBLIC_URL}
                              >
                                <i
                                  className="ion-android-search font-40px"
                                  onClick={(e) => openLightbox(e, item.image)}
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isOpen && (
                    <Lightbox
                      mainSrc={require("../../assets/images/" + photo)}
                      onCloseRequest={() => closeLightbox()}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 portfolio-right">
              <h3 className="text-uppercase">Stationery Branding</h3>
              <h5 className="text-uppercase">Project Info</h5>
              <p className="mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem
                risus, ullamcorper et cursus at, euismod fringilla nulla.
                Phasellus finibus vel ex quis blandit. Phasellus consequat nunc
                non laoreet sollicitudin. Praesent nec tincidunt erat. Ut
                lobortis interdum turpis. Mauris et pretium ex, in hendrerit
                felis. Integer vehicula ante eu mi luctus, vitae dictum ante
                pellentesque. Aliquam erat volutpat. Donec vitae turpis semper,
                lacinia est ut, dapibus justo.
              </p>

              <ul className="project-type-list mt-0">
                <li>
                  <i className="ion-paintbrush"></i>Design
                </li>
                <li>
                  <i className="ion-android-globe"></i>Development
                </li>
                <li>
                  <i className="ion-headphone"></i>Marketing
                </li>
              </ul>

              <ul className="project-detail-box">
                <li>
                  <strong>Date</strong>10 June 2016
                </li>
                <li>
                  <strong>Client</strong>Martin Wayne
                </li>
                <li>
                  <strong>Categories</strong>
                  <a href={process.env.PUBLIC_URL}>Branding</a> ,
                  <a href={process.env.PUBLIC_URL}>Apps</a>
                </li>
              </ul>

              <p className="mt-20">
                <a
                  href={process.env.PUBLIC_URL}
                  className="btn btn-dark-outline btn-square btn-md remove-margin btn-fullwidth btn-animate"
                >
                  Get Project
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-md-4 feature-box text-center">
              <i className="icon-strategy font-40px dark-icon"></i>
              <h4>Strategy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                efficitur congue erat ac molestie.
              </p>
            </div>
            <div className="col-md-4 feature-box text-center">
              <i className="icon-trophy font-40px dark-icon"></i>
              <h4>Brand Identity</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                efficitur congue erat ac molestie.
              </p>
            </div>
            <div className="col-md-4 feature-box text-center">
              <i className="icon-pencil font-40px dark-icon"></i>
              <h4>Digital</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                efficitur congue erat ac molestie.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-30 pb-30">
        <div className="container">
          <div className="row portfolio-nav">
            <div className="col-md-4 col-sm-4 col-xs-4">
              <a className="prev" href={process.env.PUBLIC_URL}>
                <span>
                  <i className="ion-android-arrow-back"></i>Previous
                </span>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <a className="showall" href={process.env.PUBLIC_URL}>
                <span>
                  <i className="ion-android-apps"></i>
                </span>
              </a>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <a className="next" href={process.env.PUBLIC_URL}>
                <span>
                  Next<i className="ion-android-arrow-forward"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </Loader>
  );
};

export default PortfolioSingleThree;
