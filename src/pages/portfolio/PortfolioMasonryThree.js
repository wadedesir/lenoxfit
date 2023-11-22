import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-six-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-6.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import MasonryGrid from "../../components/Portfolio/MasonryGrid";
import Loader from "../../components/Loader/Loader";

const PortfolioMasonryThree = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleThree
      title="Our Portfolio"
      tagline="Recent Works"
      image={imgBg}
    />
    <MasonryGrid data={dataPortfolio} cols="3" />
    <FooterTwo />
  </Loader>
);

export default PortfolioMasonryThree;
