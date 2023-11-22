import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-nine-data.json";
import dataCounter from "../../data/Counter/counter-two-data.json";
import dataPortfolio from "../../data/Portfolio/portfolio-seven-data.json";
import dataTeam from "../../data/Team/team-one-data.json";
import dataSkills from "../../data/Skill/skill-one-data.json";
import dataAccordion from "../../data/Accordions/accordions-data.json";
// Images
import imgWelcome from "../../assets/images/bg-left-img.jpg";
// Components
import NavbarSearch from "../../components/Navbar/NavbarSearch";
import BusinessSlider from "../../components/Slider/BusinessSlider";
import FooterOne from "../../components/Footer/FooterOne";
import WhoWeAreSeven from "../../components/WhoWeAre/WhoWeAreSeven";
import CounterThree from "../../components/Counter/CounterThree";
import TeamFive from "../../components/Team/TeamFive";
import ExpertiseOne from "../../components/Expertise/ExpertiseOne";
import WelcomeThree from "../../components/Welcome/WelcomeThree";
import PortfolioFour from "../../components/Portfolio/PortfolioFour";
import Loader from "../../components/Loader/Loader";

const HomeCorporateBusiness = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <NavbarSearch data={dataNavbar} />
      <BusinessSlider setToggler={setToggler} toggler={toggler} />
      <WhoWeAreSeven
        data={dataServices}
        title="About Company"
        text="We are an Creative agency, based in New York. Vision Every company
            is performing best online. Mission Helping businesses to find the
            perfect and most succesful strategy, to be online."
      />
      <CounterThree data={dataCounter} />
      <PortfolioFour data={dataPortfolio} />
      <TeamFive data={dataTeam} title="Meet Our Team" />
      <ExpertiseOne data={dataSkills} />
      <WelcomeThree data={dataAccordion} image={imgWelcome} />
      <FooterOne />
    </Loader>
  );
};

export default HomeCorporateBusiness;
