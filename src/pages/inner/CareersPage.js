import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataPerks from "../../data/Perks/perks-one-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-24.jpg";
import imgOpenings from "../../assets/images/career-img.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import WhoWeAreEleven from "../../components/WhoWeAre/WhoWeAreEleven";
import PerksOne from "../../components/Perks/PerksOne";
import OpeningOne from "../../components/Opening/OpeningOne";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const CareersPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleTwo
      title="Careers"
      tagline="Currently jobs opening"
      image={imgBg}
    />
    <WhoWeAreEleven
      title="Together at Grandy"
      text="Join our team in Chicago to help reshape the video streaming
            landscape and make products that reach over 7 million fans
            worldwide."
    />
    <PerksOne data={dataPerks} title="Looking for Perks?" />
    <OpeningOne title="Current Openings" image={imgOpenings} />
    <FooterOne />
  </Loader>
);

export default CareersPage;
