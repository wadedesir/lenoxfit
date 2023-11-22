import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-one-data.json";
import dataSkills from "../../data/Skill/skill-one-data.json";
import dataFeatures from "../../data/Services/services-four-data.json";
import dataClients from "../../data/Client/client-one-data.json";
// Images
import imgAbout from "../../assets/images/startup-video-img.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import StartupSlider from "../../components/Slider/StartupSlider";
import FooterOne from "../../components/Footer/FooterOne";
import WhoWeAreFour from "../../components/WhoWeAre/WhoWeAreFour";
import AboutUsOne from "../../components/About/AboutUsOne";
import ContactOne from "../../components/Contact/ContactOne";
import ClientOne from "../../components/Client/ClientOne";
import Loader from "../../components/Loader/Loader";

const HomeStartup = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <NavbarSocial data={dataNavbar} menuAlign="center" />
      <StartupSlider />
      <WhoWeAreFour
        data={dataServices}
        title="Digital Solutions Makes the Difference"
        backfont="Welcome"
      />
      <AboutUsOne
        titleAbout="A Creative Advertising Agency"
        titleSkills="Skills"
        backfontAbout="Digital"
        backfontSkills="Our"
        dataSkills={dataSkills}
        dataFeatures={dataFeatures}
        pathVideo="https://www.youtube.com/watch?v=sU3FkzUKHXU"
        imageAbout={imgAbout}
        setToggler={setToggler}
        toggler={toggler}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          vulputate dolor. Nullam venenatis enim in quam euismod fringilla.
          Donec in risus eget purus mattis varius. Nulla dapibus quis orci et
          tincidunt. Phasellus in rhoncus quam. Fusce a est lacinia, ultricies
          mi nec, rutrum dolor
        </p>
        <p className="mt-20">
          Donec vehicula cursus metus viverra aliquet. Nam vel malesuada diam.
          Proin eleifend luctus mi, vel tincidunt sapien auctor nec. In quis
          elit in mauris dignissim pharetra. Praesent efficitur dolor a quam
          tristique ultricies.
        </p>
      </AboutUsOne>
      <ContactOne title="Contact Us" backfont="Form" />
      <ClientOne data={dataClients} classes="pt-100 pb-100" />
      <FooterOne />
    </Loader>
  );
};

export default HomeStartup;
