import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-one-data.json";
import dataClient from "../../data/Client/client-one-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import SliderTestimonials from "../../elements/Slider/SliderTestimonials";
import SliderClients from "../../elements/Slider/SliderClients";
import SliderTeam from "../../elements/Slider/SliderTeam";
import SliderImage from "../../elements/Slider/SliderImage";
import Loader from "../../components/Loader/Loader";

const SlidersPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle title="Sliders" tagline="All Carousels" image={imgBg} />
    <SliderTestimonials data={dataTestimonials} title="Testimonials Slider" />
    <SliderClients data={dataClient} title="Clients Slider" />
    <SliderTeam data={dataTeam} title="Team Slider" />
    <SliderImage title="Image sliders" />
    <FooterOne />
  </Loader>
);

export default SlidersPage;
