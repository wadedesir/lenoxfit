import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-restaurant-data.json";
import dataMenu from "../../data/Menu/menu-data.json";
import dataServices from "../../data/Services/services-seven-data.json";
// Images
import imgWelcome from "../../assets/images/bg-right-img-2.jpg";
// Components
import NavbarSimpleSocial from "../../components/Navbar/NavbarSimpleSocial";
import RestaurantSlider from "../../components/Slider/RestaurantSlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import WelcomeTwo from "../../components/Welcome/WelcomeTwo";
import MenuOne from "../../components/Menu/MenuOne";
import ServiceThree from "../../components/Service/ServiceThree";
import MapSection from "../../components/Map/MapSection";
import ContactSix from "../../components/Contact/ContactSix";
import Loader from "../../components/Loader/Loader";

const HomeRestaurant = () => (
  <Loader>
    <NavbarSimpleSocial data={dataNavbar} />
    <RestaurantSlider />
    <WelcomeTwo image={imgWelcome} />
    <MenuOne data={dataMenu} />
    <ServiceThree
      data={dataServices}
      title="The Food Lovers"
      tagline="Our Services"
    />
    <MapSection />
    <ContactSix title="Eat and Drink" tagline="Book a table" />
    <FooterTwo />
  </Loader>
);

export default HomeRestaurant;
