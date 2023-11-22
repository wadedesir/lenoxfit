import React from "react";
// DATA Files
import dataNavbar from "../data/Navbar/nav-main-data.json";
import dataPages from "../data/Demo/demos-home-data.json";
import dataFeatures from "../data/Demo/demos-features-data.json";
import dataLayouts from "../data/Demo/demos-portfolio-data.json";
// Components
import NavbarCart from "../components/Navbar/NavbarCart";
import DemosSlider from "../components/Slider/DemosSlider";
import DemoPages from "../components/Demo/DemoPages";
import DemoFeatures from "../components/Demo/DemoFeatures";
import DemoLayouts from "../components/Demo/DemoLayouts";
import FooterOne from "../components/Footer/FooterOne";
import Loader from "../components/Loader/Loader";

const Demos = () => (
  <Loader>
    <NavbarCart data={dataNavbar} type="dark" />
    <DemosSlider />
    <DemoPages data={dataPages} />
    <DemoFeatures data={dataFeatures} />
    <DemoLayouts data={dataLayouts} />
    <FooterOne />
  </Loader>
);

export default Demos;
