import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-three-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-three-data.json";
import dataCounter from "../../data/Counter/counter-two-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
import dataBlog from "../../data/Blog/blog-two-data.json";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import CreativeSlider from "../../components/Slider/CreativeSlider";
import FooterThree from "../../components/Footer/FooterThree";
import WhoWeAreThree from "../../components/WhoWeAre/WhoWeAreThree";
import PortfolioThree from "../../components/Portfolio/PortfolioThree";
import CounterTwo from "../../components/Counter/CounterTwo";
import TeamThree from "../../components/Team/TeamThree";
import ParallaxOne from "../../components/Parallax/ParallaxOne";
import BlogTwo from "../../components/Blog/BlogTwo";
import Loader from "../../components/Loader/Loader";

const HomeCreativeAgency = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} menuAlign="center" />
    <CreativeSlider />
    <WhoWeAreThree
      data={dataServices}
      title="A Digital Creative Agency"
      tagline="Brand, design and digital expertise"
    >
      <p>
        Grandy is a digital creative agency. We have out team of designers,
        writers, illustrators, developers, and strategists who believe
        interactive experiences create a unique bond between brands & everyday.
        Our focus on culture and communities help shape these experiences and
        define the stories which connect us all.
      </p>
    </WhoWeAreThree>
    <PortfolioThree data={dataPortfolio} title="Our Works" backfont="Works" />
    <CounterTwo data={dataCounter} />
    <TeamThree
      data={dataTeam}
      title="Our Team"
      tagline="Go together for success"
      backfont="Team"
    />
    <ParallaxOne title="Strategic Digital Solutions" btnText="Start a Project">
      Proin ac odio est. In interdum ipsum ac imperdiet sollicitudin. Sed
      condimentum, quam sit amet tincidunt aliquet
    </ParallaxOne>
    <BlogTwo
      data={dataBlog}
      title="Our Blogs"
      tagline="Latest News"
      backfont="Blogs"
    />
    <FooterThree />
  </Loader>
);

export default HomeCreativeAgency;
