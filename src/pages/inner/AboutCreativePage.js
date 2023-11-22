import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataFeatures from "../../data/Feature/feature-one-data.json";
import dataCounter from "../../data/Counter/counter-two-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
import dataClients from "../../data/Client/client-one-data.json";
import dataTestimonial from "../../data/Testimonials/testimonials-one-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-21.jpg";
import imgAbout from "../../assets/images/startup-video-img.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import FooterOne from "../../components/Footer/FooterOne";
import WhoWeAreNine from "../../components/WhoWeAre/WhoWeAreNine";
import AboutUsFive from "../../components/About/AboutUsFive";
import CounterTwo from "../../components/Counter/CounterTwo";
import TeamSeven from "../../components/Team/TeamSeven";
import ClientTwo from "../../components/Client/ClientTwo";
import TestimonialTwo from "../../components/Testimonial/TestimonialTwo";
import Loader from "../../components/Loader/Loader";

const AboutCreativePage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleTwo
      title="Our Company"
      tagline="Digital Creative Agency"
      image={imgBg}
    />
    <WhoWeAreNine
      title="Who We Are"
      backfont="About"
      text="We are an Creative agency, based in New York."
    />
    <AboutUsFive image={imgAbout} data={dataFeatures} />
    <CounterTwo data={dataCounter} />
    <TeamSeven data={dataTeam} title="Our Team" backfont="Team" />
    <ClientTwo data={dataClients} />
    <TestimonialTwo data={dataTestimonial} />
    <FooterOne />
  </Loader>
);

export default AboutCreativePage;
