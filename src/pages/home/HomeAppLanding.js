import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-app-landing-data.json";
import dataFeatures from "../../data/Feature/feature-two-data.json";
import dataPricing from "../../data/Pricing/pricing-one-data.json";
// Images
import imgFeature from "../../assets/images/iphone-2.png";
import imgDownload from "../../assets/images/ipad.png";
// Components
import NavbarLogin from "../../components/Navbar/NavbarLogin";
import AppSlider from "../../components/Slider/AppSlider";
import FooterTwo from "../../components/Footer/FooterTwo";
import FeatureOne from "../../components/Feature/FeatureOne";
import PricingOne from "../../components/Pricing/PricingOne";
import DownloadOne from "../../components/Download/DownloadOne";
import Loader from "../../components/Loader/Loader";

const HomeAppLanding = () => (
  <Loader>
    <NavbarLogin data={dataNavbar} />
    <AppSlider />
    <FeatureOne data={dataFeatures} image={imgFeature} />
    <PricingOne
      data={dataPricing}
      title="Pricing"
      text="Started as early as internet we are the leading business analytics
            solutions agency serving the digital empire from the last two
            decades."
    />
    <DownloadOne
      image={imgDownload}
      title="Download App"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus id
          neque id cursus. Quisque commodo eros vitae ligula euismod, et feugiat
          justo tristique."
    />
    <FooterTwo />
  </Loader>
);

export default HomeAppLanding;
