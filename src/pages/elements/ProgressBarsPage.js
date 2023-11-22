import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataSkills from "../../data/Skill/skill-one-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import ProgressBarTwo from "../../elements/ProgressBar/ProgressBarTwo";
import ProgressBarThree from "../../elements/ProgressBar/ProgressBarThree";
import Loader from "../../components/Loader/Loader";

const ProgressBarsPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle
      title="Progress Bar"
      tagline="Two Style of progress bar"
      image={imgBg}
    />
    <ProgressBarTwo data={dataSkills} title="Dark Style" />
    <ProgressBarThree data={dataSkills} title="Colored Style" />
    <FooterOne />
  </Loader>
);

export default ProgressBarsPage;
