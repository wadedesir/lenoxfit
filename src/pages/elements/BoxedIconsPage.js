import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServicesNine from "../../data/Services/services-nine-data.json";
import dataServicesThree from "../../data/Services/services-three-data.json";
import dataServicesOne from "../../data/Services/services-one-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import BoxedIconOne from "../../elements/BoxedIcon/BoxedIconOne";
import BoxedIconTwo from "../../elements/BoxedIcon/BoxedIconTwo";
import BoxedIconThree from "../../elements/BoxedIcon/BoxedIconThree";
import BoxedIconFour from "../../elements/BoxedIcon/BoxedIconFour";
import Loader from "../../components/Loader/Loader";

const BoxedIconsPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle
      title="Boxed Icons"
      tagline="Four Icon Style List"
      image={imgBg}
    />
    <BoxedIconOne data={dataServicesNine} title="Icon Style One" />
    <BoxedIconTwo data={dataServicesThree} title="Icon Style Two" />
    <BoxedIconThree data={dataServicesOne} title="Icon Style Three" />
    <BoxedIconFour data={dataServicesOne} title="Icon Style Four" />
    <FooterOne />
  </Loader>
);

export default BoxedIconsPage;
