import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPricing from "../../data/Pricing/pricing-two-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import PriceTableOne from "../../elements/PriceTable/PriceTableOne";
import PriceTableTwo from "../../elements/PriceTable/PriceTableTwo";
import Loader from "../../components/Loader/Loader";

const PricingTablesPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle
      title="Pricing Tables"
      tagline="Two style of pricing tables"
      image={imgBg}
    />
    <PriceTableOne data={dataPricing} title="Default Style" />
    <PriceTableTwo data={dataPricing} title="Dark Style" />
    <FooterOne />
  </Loader>
);

export default PricingTablesPage;
