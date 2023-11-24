import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-fitness-data.json";
import dataClasses from "../../data/Classes/classes-one-data.json";
import dataCounter from "../../data/Counter/counter-two-data.json";
import dataSchedule from "../../data/Schedule/schedule-one-data.json";
// Images
import imgAbout from "../../assets/images/fitness-video-img.jpg";
import imgParallax from "../../assets/images/background/parallax-bg-3.jpg";
// Components
import NavbarSimpleSocial from "../../components/Navbar/NavbarSimpleSocial";
import FitnessSlider from "../../components/Slider/FitnessSlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import AboutUsThree from "../../components/About/AboutUsThree";
import ClassesOne from "../../components/Classes/ClassesOne";
import CounterTwo from "../../components/Counter/CounterTwo";
import ScheduleOne from "../../components/Schedule/ScheduleOne";
import ParallaxTwo from "../../components/Parallax/ParallaxTwo";
import ContactFive from "../../components/Contact/ContactFive";
import Loader from "../../components/Loader/Loader";

import Services from '../../components/Custom/Services'
import Recovery from "../../components/Custom/Recovery";
import TeamThree from "../../components/Team/TeamThree";
import dataTeam from "../../data/Team/team-one-data.json";

const HomeFitness = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?app=desktop&v=NXUiu0fyYDs&feature=youtu.be&ab_channel=LenoxFit"]}
      />
      <NavbarSimpleSocial data={dataNavbar} />
      <FitnessSlider />
      <AboutUsThree
        image={imgAbout}
        pathVideo="https://www.youtube.com/watch?app=desktop&v=NXUiu0fyYDs&feature=youtu.be&ab_channel=LenoxFit"
        setToggler={setToggler}
        toggler={toggler}
      />
      <Services />
      <CounterTwo data={dataCounter} bg="dark" />
      <ClassesOne data={dataClasses} title="Our Prices" />
      <Recovery title="Recovery Suite" />
      <ScheduleOne data={dataSchedule} title="The Schedule" />
      <TeamThree
        data={dataTeam}
        title="Our Team"
        tagline=""
        backfont="Team"
      />
      {/* <ParallaxTwo image={imgParallax}>
        "Lorem ipsum lorem impsum lorem ipsum lorem ipsums"
      </ParallaxTwo> */}
      <ContactFive />
      {/* <FooterTwo /> */}
    </Loader>
  );
};

export default HomeFitness;
