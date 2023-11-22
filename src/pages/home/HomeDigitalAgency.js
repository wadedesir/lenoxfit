import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-two-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-two-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
import dataTestimonial from "../../data/Testimonials/testimonials-one-data.json";
import dataClients from "../../data/Client/client-one-data.json";
import dataBlog from "../../data/Blog/blog-one-data.json";
// Components
import NavbarCart from "../../components/Navbar/NavbarCart";
import DigitalSlider from "../../components/Slider/DigitalSlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import WhoWeAreTwo from "../../components/WhoWeAre/WhoWeAreTwo";
import PortfolioTwo from "../../components/Portfolio/PortfolioTwo";
import TeamTwo from "../../components/Team/TeamTwo";
import TestimonialTwo from "../../components/Testimonial/TestimonialTwo";
import ClientOne from "../../components/Client/ClientOne";
import BlogOne from "../../components/Blog/BlogOne";
import Loader from "../../components/Loader/Loader";

const HomeDigitalAgency = () => (
  <Loader>
    <NavbarCart data={dataNavbar} menuAlign="center" />
    <DigitalSlider />
    <WhoWeAreTwo data={dataServices} />
    <PortfolioTwo data={dataPortfolio} title="Our Works" />
    <TeamTwo data={dataTeam} title="Meet Our Team" />
    <TestimonialTwo data={dataTestimonial} />
    <ClientOne data={dataClients} />
    <BlogOne data={dataBlog} title="Our Blogs" />
    <FooterTwo />
  </Loader>
);

export default HomeDigitalAgency;
