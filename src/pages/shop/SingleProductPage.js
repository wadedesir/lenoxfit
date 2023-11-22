import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataShop from "../../data/Shop/shop-one-data.json";
// Components
import NavbarCartTwo from "../../components/Navbar/NavbarCartTwo";
import SingleProduct from "../../components/Products/SingleProduct";
import ProductDescription from "../../components/Products/ProductDescription";
import RelatedProducts from "../../components/Products/RelatedProducts";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const SingleProductPage = () => {
  return (
    <Loader>
      <NavbarCartTwo data={dataNavbar} type="white" />
      <SingleProduct />
      <ProductDescription />
      <RelatedProducts data={dataShop} />
      <FooterOne />
    </Loader>
  );
};

export default SingleProductPage;
