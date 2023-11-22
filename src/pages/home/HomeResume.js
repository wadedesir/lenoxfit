import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataSkills from "../../data/Skill/skill-three-data.json";
import dataResume from "../../data/Resume/resume-one-data.json";
import dataServices from "../../data/Services/services-six-data.json";
// Components
import NavbarRightSide from "../../components/Navbar/NavbarRightSide";
import ResumeSlider from "../../components/Slider/ResumeSlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import AboutMeOne from "../../components/About/AboutMeOne";
import SkillOne from "../../components/Skill/SkillOne";
import ResumeOne from "../../components/Resume/ResumeOne";
import ServiceTwo from "../../components/Service/ServiceTwo";
import ContactFour from "../../components/Contact/ContactFour";
import Loader from "../../components/Loader/Loader";

const HomeResume = () => (
  <Loader>
    <NavbarRightSide data={dataNavbar} />
    <ResumeSlider />
    <AboutMeOne />
    <SkillOne data={dataSkills} title="My Skills" backfont="Skills" />
    <ResumeOne data={dataResume} title="My Resume" backfont="Resume" />
    <ServiceTwo data={dataServices} title="What I Do" backfont="Do" />
    <ContactFour title="Contact Me" backfont="Form" />
    <FooterTwo />
  </Loader>
);

export default HomeResume;
