import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataAccordion from "../../data/Accordions/accordions-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitle from "../../components/PageTitle/PageTitle";
import AccordionLight from "../../components/Accordion/AccordionLight";
import AccordionDark from "../../components/Accordion/AccordionDark";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const AccordionsPage = () => (
  <Loader>
    <NavbarSocial type="dark" data={dataNavbar} />
    <PageTitle
      title="Accordions"
      tagline="Two different accordions"
      image={imgBg}
    />
    <AccordionLight data={dataAccordion} />
    <AccordionDark data={dataAccordion} />
    <FooterOne />
  </Loader>
);

export default AccordionsPage;
