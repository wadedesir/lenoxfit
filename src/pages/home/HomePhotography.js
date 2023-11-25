import React, { useState } from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-gallery-data.json";
import dataGallery from "../../data/Portfolio/portfolio-five-data.json";
//Components
import NavbarLeftSide from "../../components/Navbar/NavbarLeftSide";
import PhotographySlider from "../../components/Slider/PhotographySlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import PortfolioPhotography from "../../components/Portfolio/PortfolioPhotography";
import Loader from "../../components/Loader/Loader";
import NavbarSimpleSocial from "../../components/Navbar/NavbarSimpleSocial";

import FsLightbox from "fslightbox-react";
import CounterFour from '../../components/Custom/CounterFour'
import ContactFive from "../../components/Contact/ContactFive";

const HomePhotography = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <Loader>
      <main style={{ backgroundColor: 'rgb(30, 30, 30)' }}>
        <FsLightbox
          toggler={toggler}
          sources={[
            'https://www.youtube.com/watch?v=dm616u6V_lc&ab_channel=LenoxFit',
            'https://www.youtube.com/watch?v=_Vi5iV9PFjQ&ab_channel=LenoxFit',
            'https://www.youtube.com/watch?v=OIM9Ow3ZMvA&ab_channel=LenoxFit',
            'https://www.youtube.com/watch?v=NXUiu0fyYDs&ab_channel=LenoxFit',
          ]}
        />

        <NavbarSimpleSocial data={dataNavbar} white={true} />

        <CounterFour
          // image={imgAbout}
          setToggler={setToggler}
          toggler={toggler}
          bg="dark"
        />

        <PortfolioPhotography data={dataGallery} />
        <ContactFive />

      </main>
    </Loader>
  )
};

export default HomePhotography;
