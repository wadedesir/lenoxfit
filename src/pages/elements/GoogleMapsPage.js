import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import GoogleMapOne from "../../elements/GoogleMap/GoogleMapOne";
import GoogleMapTwo from "../../elements/GoogleMap/GoogleMapTwo";
import GoogleMapThree from "../../elements/GoogleMap/GoogleMapThree";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const GoogleMapsPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle
      title="Google Maps"
      tagline="Three Google Maps Style"
      image={imgBg}
    />
    <GoogleMapOne title="Map Style One" />
    <GoogleMapTwo title="Map Style Two" />
    <GoogleMapThree title="Map Style Three" />
    <FooterOne />
  </Loader>
);

export default GoogleMapsPage;
