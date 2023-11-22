import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataShop from "../../data/Shop/shop-one-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-25.jpg";
// Components
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import NavbarCart from "../../components/Navbar/NavbarCart";
import CartProducts from "../../components/Products/CartProducts";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const ShopCartPage = () => (
  <Loader>
    <NavbarCart data={dataNavbar} />
    <PageTitleTwo title="Shopping Cart" image={imgBg} />
    <CartProducts data={dataShop} />
    <FooterOne />
  </Loader>
);

export default ShopCartPage;
