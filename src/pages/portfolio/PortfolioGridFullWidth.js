import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-eight-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-4.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import PortfolioGridFluid from "../../components/Portfolio/PortfolioGridFluid";
import Loader from "../../components/Loader/Loader";

const PortfolioGridFullWidth = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleThree
      title="Our Portfolio"
      tagline="Recent Works"
      image={imgBg}
    />
    <PortfolioGridFluid data={dataPortfolio} cols="3" items="9" />
    <FooterTwo />
  </Loader>
);

export default PortfolioGridFullWidth;
