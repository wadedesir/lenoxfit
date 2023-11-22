import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataSkills from "../../data/Skill/skill-two-data.json";
import dataFeatures from "../../data/Feature/feature-one-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-four-data.json";
import dataTeam from "../../data/Team/team-two-data.json";
import dataTestimonial from "../../data/Testimonials/testimonials-one-data.json";
import dataClients from "../../data/Client/client-one-data.json";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import MinimalSlider from "../../components/Slider/MinimalSlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import WhoWeAreFive from "../../components/WhoWeAre/WhoWeAreFive";
import TeamFour from "../../components/Team/TeamFour";
import TestimonialTwo from "../../components/Testimonial/TestimonialTwo";
import ContactTwo from "../../components/Contact/ContactTwo";
import ClientOne from "../../components/Client/ClientOne";
import PortfolioMasonry from "../../components/Portfolio/PortfolioMasonry";
import Loader from "../../components/Loader/Loader";

const HomeMinimal = () => (
  <Loader>
    <NavbarSocial type="dark" data={dataNavbar} />
    <MinimalSlider />
    <WhoWeAreFive dataSkill={dataSkills} dataFeature={dataFeatures} />
    <PortfolioMasonry data={dataPortfolio} cols="3" />
    <TeamFour data={dataTeam} />
    <TestimonialTwo data={dataTestimonial} />
    <ContactTwo />
    <ClientOne data={dataClients} classes="pt-100 pb-100" />
    <FooterTwo />
  </Loader>
);

export default HomeMinimal;
