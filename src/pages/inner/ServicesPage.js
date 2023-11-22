import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-ten-data.json";
import dataPricing from "../../data/Pricing/pricing-two-data.json";
import dataFeatures from "../../data/Services/services-one-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-20.jpg";
import imgParallax from "../../assets/images/background/parallax-bg.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import FooterOne from "../../components/Footer/FooterOne";
import ServiceFive from "../../components/Service/ServiceFive";
import PricingThree from "../../components/Pricing/PricingThree";
import WhoWeAreTen from "../../components/WhoWeAre/WhoWeAreTen";
import ParallaxThree from "../../components/Parallax/ParallaxThree";
import Loader from "../../components/Loader/Loader";

const ServicesPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleTwo title="Our Services" tagline="What we do" image={imgBg} />
    <ServiceFive data={dataServices} />
    <PricingThree data={dataPricing} />
    <WhoWeAreTen data={dataFeatures} />
    <ParallaxThree
      image={imgParallax}
      title="Strategic Digital Solutions"
      text="Proin ac odio est. In interdum ipsum ac imperdiet sollicitudin. Sed
            condimentum, quam sit amet tincidunt aliquet"
    />
    <FooterOne />
  </Loader>
);

export default ServicesPage;
