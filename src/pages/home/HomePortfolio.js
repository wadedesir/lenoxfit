import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-six-data.json";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PortfolioSlider from "../../components/Slider/PortfolioSlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import PortfolioMasonryThreeSpace from "../../components/Portfolio/PortfolioMasonryThreeSpace";
import Loader from "../../components/Loader/Loader";

const HomePortfolio = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} />
    <PortfolioSlider />
    <PortfolioMasonryThreeSpace data={dataPortfolio} />
    <FooterTwo />
  </Loader>
);

export default HomePortfolio;
