import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-onepage-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
import dataSkills from "../../data/Skill/skill-one-data.json";
import dataServices from "../../data/Services/services-eight-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-one-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-one-data.json";
import dataCounter from "../../data/Counter/counter-two-data.json";
import dataPricing from "../../data/Pricing/pricing-two-data.json";
import dataClients from "../../data/Client/client-one-data.json";

// Components
import NavbarSimpleSocial from "../../components/Navbar/NavbarSimpleSocial";
import OnePageSlider from "../../components/Slider/OnePageSlider";
import FooterOne from "../../components/Footer/FooterOne";
import WhoWeAreSix from "../../components/WhoWeAre/WhoWeAreSix";
import TeamOne from "../../components/Team/TeamOne";
import ServiceFour from "../../components/Service/ServiceFour";
import TestimonialOne from "../../components/Testimonial/TestimonialOne";
import CounterTwo from "../../components/Counter/CounterTwo";
import PricingTwo from "../../components/Pricing/PricingTwo";
import ContactSeven from "../../components/Contact/ContactSeven";
import ClientOne from "../../components/Client/ClientOne";
import PortfolioOne from "../../components/Portfolio/PortfolioOne";
import Loader from "../../components/Loader/Loader";

const HomeOnePage = () => (
  <Loader>
    <NavbarSimpleSocial data={dataNavbar} />
    <OnePageSlider />
    <WhoWeAreSix
      title="Who We Are"
      text="We are an Creative agency, based in New York. Vision Every company is performing best online. Mission Helping businesses to find the perfect and most succesful strategy, to be online."
    />
    <TeamOne title="OUR TEAM" data={dataTeam} bg="white" />
    <ServiceFour
      title="Our Services"
      dataSkills={dataSkills}
      dataServices={dataServices}
    />
    <PortfolioOne data={dataPortfolio} />
    <TestimonialOne data={dataTestimonials} title="TESTIMONIALS" />
    <CounterTwo data={dataCounter} bg="dark" />
    <PricingTwo data={dataPricing} title="Our Pricing" />
    <ContactSeven />
    <ClientOne data={dataClients} classes="pt-100 pb-100" />
    <FooterOne />
  </Loader>
);

export default HomeOnePage;
