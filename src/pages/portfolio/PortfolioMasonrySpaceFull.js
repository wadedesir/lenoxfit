import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-six-data.json";

// Images
import imgBg from "../../assets/images/slides/title-bg-8.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import MasonryGridFluid from "../../components/Portfolio/MasonryGridFluid";
import Loader from "../../components/Loader/Loader";

const PortfolioMasonrySpaceFull = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleThree
      title="Our Portfolio"
      tagline="Recent Works"
      image={imgBg}
    />
    <MasonryGridFluid data={dataPortfolio} cols="3" spacing />
    <FooterTwo />
  </Loader>
);

export default PortfolioMasonrySpaceFull;
