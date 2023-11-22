import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import ScrollIntoView from "./helpers/ScrollIntoView";
// Home pages
import HomeDefault from "./pages/home/HomeDefault";
import HomeDigitalAgency from "./pages/home/HomeDigitalAgency";
import HomeCreativeAgency from "./pages/home/HomeCreativeAgency";
import HomeStartup from "./pages/home/HomeStartup";
import HomeMinimal from "./pages/home/HomeMinimal";
import HomeAppLanding from "./pages/home/HomeAppLanding";
import HomeArchitecture from "./pages/home/HomeArchitecture";
import HomePhotography from "./pages/home/HomePhotography";
import HomeResume from "./pages/home/HomeResume";
import HomeFitness from "./pages/home/HomeFitness";
import HomePortfolio from "./pages/home/HomePortfolio";
import HomeRestaurant from "./pages/home/HomeRestaurant";
import HomeFashion from "./pages/home/HomeFashion";
import HomeOnePage from "./pages/home/HomeOnePage";
import HomeCorporateBusiness from "./pages/home/HomeCorporateBusiness";
// Inner Pages
import AboutUsPage from "./pages/inner/AboutUsPage";
import AboutCreativePage from "./pages/inner/AboutCreativePage";
import ServicesPage from "./pages/inner/ServicesPage";
import ContactPage from "./pages/inner/ContactPage";
import Page404 from "./pages/inner/Page404";
import ComingSoonPage from "./pages/inner/ComingSoonPage";
import CareersPage from "./pages/inner/CareersPage";
// Blog Pages
import BlogStandardPage from "./pages/blog/BlogStandardPage";
import BlogGridPage from "./pages/blog/BlogGridPage";
import BlogSidebarPage from "./pages/blog/BlogSidebarPage";
import BlogMasonryPage from "./pages/blog/BlogMasonryPage";
import BlogCarouselPage from "./pages/blog/BlogCarouselPage";
import BlogSidebarRightPage from "./pages/blog/BlogSidebarRightPage";
import BlogSidebarLeftPage from "./pages/blog/BlogSidebarLeftPage";
// Portfolio Pages
import PortfolioGridTwo from "./pages/portfolio/PortfolioGridTwo";
import PortfolioGridThree from "./pages/portfolio/PortfolioGridThree";
import PortfolioGridFour from "./pages/portfolio/PortfolioGridFour";
import PortfolioGridFullWidth from "./pages/portfolio/PortfolioGridFullWidth";
import PortfolioGridSpaceTwo from "./pages/portfolio/PortfolioGridSpaceTwo";
import PortfolioGridSpaceThree from "./pages/portfolio/PortfolioGridSpaceThree";
import PortfolioGridSpaceFour from "./pages/portfolio/PortfolioGridSpaceFour";
import PortfolioGridSpaceFull from "./pages/portfolio/PortfolioGridSpaceFull";
import PortfolioMasonryTwo from "./pages/portfolio/PortfolioMasonryTwo";
import PortfolioMasonryThree from "./pages/portfolio/PortfolioMasonryThree";
import PortfolioMasonryFour from "./pages/portfolio/PortfolioMasonryFour";
import PortfolioMasonrySpaceTwo from "./pages/portfolio/PortfolioMasonrySpaceTwo";
import PortfolioMasonryFullWidth from "./pages/portfolio/PortfolioMasonryFullWidth";
import PortfolioMasonrySpaceThree from "./pages/portfolio/PortfolioMasonrySpaceThree";
import PortfolioMasonrySpaceFour from "./pages/portfolio/PortfolioMasonrySpaceFour";
import PortfolioMasonrySpaceFull from "./pages/portfolio/PortfolioMasonrySpaceFull";
import PortfolioSingleOne from "./pages/portfolio/PortfolioSingleOne";
import PortfolioSingleTwo from "./pages/portfolio/PortfolioSingleTwo";
import PortfolioSingleThree from "./pages/portfolio/PortfolioSingleThree";
// Shop Pages
import ShopPage from "./pages/shop/ShopPage";
import SingleProductPage from "./pages/shop/SingleProductPage";
import ShopCartPage from "./pages/shop/ShopCartPage";
import ShopCheckoutPage from "./pages/shop/ShopCheckoutPage";
// Elements Pages
import AccordionsPage from "./pages/elements/AccordionsPage";
import ButtonsPage from "./pages/elements/ButtonsPage";
import BoxedIconsPage from "./pages/elements/BoxedIconsPage";
import ContactFormsPage from "./pages/elements/ContactFormsPage";
import GoogleMapsPage from "./pages/elements/GoogleMapsPage";
import ProgressBarsPage from "./pages/elements/ProgressBarsPage";
import PricingTablesPage from "./pages/elements/PricingTablesPage";
import SlidersPage from "./pages/elements/SlidersPage";
import TabsPage from "./pages/elements/TabsPage";
import ThemeIconsPage from "./pages/elements/ThemeIconsPage";
import TypographyPage from "./pages/elements/TypographyPage";
import TeamMembersPage from "./pages/elements/TeamMembersPage";
import Demos from "./pages/Demos";

function App() {
  return (
    <Router basename={"/"}>
      <ScrollIntoView>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={HomeFitness}
            />

            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/demos`}
              component={Demos}
            />


            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-default`}
              component={HomeDefault}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-digital-agency`}
              component={HomeDigitalAgency}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-creative-agency`}
              component={HomeCreativeAgency}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-startup`}
              component={HomeStartup}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-minimal`}
              component={HomeMinimal}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-app-landing`}
              component={HomeAppLanding}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-architecture`}
              component={HomeArchitecture}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-photography`}
              component={HomePhotography}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-resume`}
              component={HomeResume}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-fitness`}
              component={HomeFitness}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-portfolio`}
              component={HomePortfolio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-restaurant`}
              component={HomeRestaurant}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-fashion`}
              component={HomeFashion}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-one-page`}
              component={HomeOnePage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/home-corporate-business`}
              component={HomeCorporateBusiness}
            />



            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about-us`}
              component={AboutUsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about-creative`}
              component={AboutCreativePage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/services`}
              component={ServicesPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={ContactPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/404`}
              component={Page404}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/coming-soon`}
              component={ComingSoonPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/career`}
              component={CareersPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-standard`}
              component={BlogStandardPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-grid`}
              component={BlogGridPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-sidebar`}
              component={BlogSidebarPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-masonry`}
              component={BlogMasonryPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-carousel`}
              component={BlogCarouselPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-sidebar-right`}
              component={BlogSidebarRightPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-sidebar-left`}
              component={BlogSidebarLeftPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/grid-2-columns`}
              component={PortfolioGridTwo}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/grid-3-columns`}
              component={PortfolioGridThree}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/grid-4-columns`}
              component={PortfolioGridFour}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/grid-full-width`}
              component={PortfolioGridFullWidth}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/grid-space-2-columns`}
              component={PortfolioGridSpaceTwo}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/grid-space-3-columns`}
              component={PortfolioGridSpaceThree}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/grid-space-4-columns`}
              component={PortfolioGridSpaceFour}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/grid-space-full-width`}
              component={PortfolioGridSpaceFull}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/masonry-2-columns`}
              component={PortfolioMasonryTwo}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/masonry-3-columns`}
              component={PortfolioMasonryThree}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/masonry-4-columns`}
              component={PortfolioMasonryFour}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/masonry-full-width`}
              component={PortfolioMasonryFullWidth}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/masonry-space-2-columns`}
              component={PortfolioMasonrySpaceTwo}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/masonry-space-3-columns`}
              component={PortfolioMasonrySpaceThree}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/masonry-space-4-columns`}
              component={PortfolioMasonrySpaceFour}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/masonry-space-full-width`}
              component={PortfolioMasonrySpaceFull}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/single-portfolio-one`}
              component={PortfolioSingleOne}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/single-portfolio-two`}
              component={PortfolioSingleTwo}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/single-portfolio-three`}
              component={PortfolioSingleThree}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/shop`}
              component={ShopPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/shop-product`}
              component={SingleProductPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/shop-cart`}
              component={ShopCartPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/shop-checkout`}
              component={ShopCheckoutPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/accordions`}
              component={AccordionsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/buttons`}
              component={ButtonsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/boxed-icons`}
              component={BoxedIconsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact-form`}
              component={ContactFormsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/google-maps`}
              component={GoogleMapsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/progress-bar`}
              component={ProgressBarsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/pricing-tables`}
              component={PricingTablesPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/sliders`}
              component={SlidersPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/tabs`}
              component={TabsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/theme-icons`}
              component={ThemeIconsPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/typography`}
              component={TypographyPage}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/team-member`}
              component={TeamMembersPage}
            /> */}

            <Route component={Page404} />

          </Switch>
        </ScrollToTop>
      </ScrollIntoView>
    </Router>
  );
}

export default App;
