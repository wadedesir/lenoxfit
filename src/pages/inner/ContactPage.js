import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-22.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import FooterOne from "../../components/Footer/FooterOne";
import MapSection from "../../components/Map/MapSection";
import ContactEight from "../../components/Contact/ContactEight";
import ContactInfoOne from "../../components/Contact/ContactInfoOne";
import Loader from "../../components/Loader/Loader";

const ContactPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleTwo
      title="Contact Us"
      tagline="Feel free to call us 24 hours"
      image={imgBg}
    />
    <ContactInfoOne />
    <MapSection />
    <ContactEight title="Get in Touch" />
    <FooterOne />
  </Loader>
);

export default ContactPage;
