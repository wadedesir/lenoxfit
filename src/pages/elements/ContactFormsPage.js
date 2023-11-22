import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import ContactFormOne from "../../elements/ContactForm/ContactFormOne";
import ContactFormTwo from "../../elements/ContactForm/ContactFormTwo";
import ContactFormThree from "../../elements/ContactForm/ContactFormThree";
import ContactFormFour from "../../elements/ContactForm/ContactFormFour";
import Loader from "../../components/Loader/Loader";

const ContactFormsPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle
      title="Contact Forms"
      tagline="Four Contact Concepts"
      image={imgBg}
    />
    <ContactFormOne title="Contact Form One" />
    <ContactFormTwo title="Contact Form Two" />
    <ContactFormThree title="Contact Form Three" />
    <ContactFormFour title="Contact Form Four" />
    <FooterOne />
  </Loader>
);

export default ContactFormsPage;
