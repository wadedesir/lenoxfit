import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-one-data.json";
import dataCounter from "../../data/Counter/counter-one-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-one-data.json";
import dataTestimonials from "../../data/Testimonials/testimonials-one-data.json";
import dataClient from "../../data/Client/client-one-data.json";
import dataBlog from "../../data/Blog/blog-one-data.json";
// Images
import imgWelcome from "../../assets/images/bg-right-img.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import DefaultSlider from "../../components/Slider/DefaultSlider";
import FooterOne from "../../components/Footer/FooterOne";
import WhoWeAreOne from "../../components/WhoWeAre/WhoWeAreOne";
import WelcomeOne from "../../components/Welcome/WelcomeOne";
import CounterOne from "../../components/Counter/CounterOne";
import TeamOne from "../../components/Team/TeamOne";
import PortfolioMosaic from "../../components/Portfolio/PortfolioMosaic";
import TestimonialOne from "../../components/Testimonial/TestimonialOne";
import ClientOne from "../../components/Client/ClientOne";
import BlogOne from "../../components/Blog/BlogOne";
import Loader from "../../components/Loader/Loader";

const HomeDefault = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <NavbarSocial data={dataNavbar} menuAlign="center" />
      <DefaultSlider />
      <WhoWeAreOne
        data={dataServices}
        title="We are digital specialists. It's all we do"
      />
      <WelcomeOne
        image={imgWelcome}
        setToggler={setToggler}
        toggler={toggler}
      />
      <CounterOne data={dataCounter} />
      <TeamOne data={dataTeam} title="Creative Team" />
      <PortfolioMosaic
        data={dataPortfolio}
        title="What We Do"
        tagline="Latest Works"
      />
      <TestimonialOne data={dataTestimonials} title="Testimonials" />
      <ClientOne data={dataClient} />
      <BlogOne data={dataBlog} title="Our Blogs" />
      <FooterOne />
    </Loader>
  );
};

export default HomeDefault;
