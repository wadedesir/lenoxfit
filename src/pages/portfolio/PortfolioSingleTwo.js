import React, { useState } from "react";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import Slider from "react-slick";
import Masonry from "react-masonry-component";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-nine-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-13.jpg";
import img1 from "../../assets/images/portfolio/single-portfolio-1.jpg";
import img2 from "../../assets/images/portfolio/single-portfolio-2.jpg";
import img3 from "../../assets/images/portfolio/single-portfolio-3.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import Loader from "../../components/Loader/Loader";

const PortfolioSingleTwo = () => {
  const settings = {
    className: "portfolio-slider",
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
  };
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
            <div className="col-md-12 portfolio-left">
              <Slider {...settings}>
                <div className="item">
                  <img className="img-responsive" src={img1} alt="" />
                </div>
                <div className="item">
                  <img className="img-responsive" src={img2} alt="" />
                </div>
                <div className="item">
                  <img className="img-responsive" src={img3} alt="" />
                </div>
              </Slider>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 portfolio-right">
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
              <p className="mt-20">
                <a
                  href={process.env.PUBLIC_URL}
                  className="btn btn-dark-outline btn-square btn-md remove-margin btn-animate"
                >
                  Get Project
                </a>
              </p>

              <ul className="project-detail-box row mt-50">
                <li className="col-md-3 col-sm-6">
                  <strong className="display-block">Date</strong>10 June 2016
                </li>
                <li className="col-md-3 col-sm-6">
                  <strong className="display-block">Client</strong>Martin Wayne
                </li>
                <li className="col-md-3 col-sm-6">
                  <strong className="display-block">Categories</strong>
                  <a href={process.env.PUBLIC_URL}>Branding</a> ,
                  <a href={process.env.PUBLIC_URL}>Apps</a>
                </li>
                <li className="col-md-3 col-sm-6">
                  <strong className="display-block">Share</strong>
                  <a href={process.env.PUBLIC_URL}>Facebook</a> ,
                  <a href={process.env.PUBLIC_URL}>Twitter</a> ,
                  <a href={process.env.PUBLIC_URL}>Youtube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg pt-30 pb-30">
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
      <section className="dark-block">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="grandy-folio">
                <Masonry>
                  {dataPortfolio.map((item) => (
                    <div className="portf-item col-md-6 col-sm-6" key={item.id}>
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
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </Loader>
  );
};

export default PortfolioSingleTwo;
