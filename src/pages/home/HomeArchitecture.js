import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-five-data.json";
import dataClients from "../../data/Client/client-one-data.json";
// Images
import imgAbout from "../../assets/images/bg-right-img-3.jpg";
import imgContact from "../../assets/images/bg-left-img-2.jpg";
// Components
import NavbarMiddleLogo from "../../components/Navbar/NavbarMiddleLogo";
import ArchitectureSlider from "../../components/Slider/ArchitectureSlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import AboutUsTwo from "../../components/About/AboutUsTwo";
import ServiceOne from "../../components/Service/ServiceOne";
import ContactThree from "../../components/Contact/ContactThree";
import ClientOne from "../../components/Client/ClientOne";
import Loader from "../../components/Loader/Loader";

const HomeArchitecture = () => (
  <Loader>
    <NavbarMiddleLogo data={dataNavbar} />
    <ArchitectureSlider />
    <AboutUsTwo title="About Us" tagline="Awesomeness" image={imgAbout}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in arcu
        est. Vivamus elementum tempus orci, id ultrices diam gravida in.
        Curabitur hendrerit pulvinar mauris, vel pellentesque velit venenatis
        aliquam.
      </p>
    </AboutUsTwo>
    <ServiceOne
      data={dataServices}
      title="Our Services"
      tagline="Finesh Real Estate"
    />
    <ContactThree
      image={imgContact}
      title="Contact Us"
      tagline="The Lonely Cry"
    />
    <ClientOne data={dataClients} />
    <FooterTwo />
  </Loader>
);

export default HomeArchitecture;
