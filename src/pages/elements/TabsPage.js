import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataServices from "../../data/Services/services-ten-data.json";
import dataServicesTwo from "../../data/Services/services-eleven-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import TabsOne from "../../elements/Tabs/TabsOne";
import TabsTwo from "../../elements/Tabs/TabsTwo";
import Loader from "../../components/Loader/Loader";

const TabsPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle title="Tabs" tagline="Two types of tabs" image={imgBg} />
    <TabsOne data={dataServices} title="Default Tabs" />
    <TabsTwo data={dataServicesTwo} title="Simple Tabs" />
    <FooterOne />
  </Loader>
);

export default TabsPage;
