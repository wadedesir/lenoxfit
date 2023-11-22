import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataGallery from "../../data/Portfolio/portfolio-five-data.json";
//Components
import NavbarLeftSide from "../../components/Navbar/NavbarLeftSide";
import PhotographySlider from "../../components/Slider/PhotographySlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import PortfolioPhotography from "../../components/Portfolio/PortfolioPhotography";
import Loader from "../../components/Loader/Loader";

const HomePhotography = () => (
  <Loader>
    <NavbarLeftSide data={dataNavbar} />
    <PhotographySlider />
    <PortfolioPhotography data={dataGallery} />
    <FooterTwo />
  </Loader>
);

export default HomePhotography;
