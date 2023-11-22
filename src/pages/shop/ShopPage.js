import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataShop from "../../data/Shop/shop-one-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-25.jpg";
// Components
import NavbarCart from "../../components/Navbar/NavbarCart";
import PageTitleTwo from "../../components/PageTitle/PageTitleTwo";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const ShopPage = () => (
  <Loader>
    <NavbarCart data={dataNavbar} type="white" />
    <PageTitleTwo
      title="Online Shop"
      tagline="We Make you go Viral"
      image={imgBg}
    />
    <section>
      <div className="container">
        <div className="row">
          {dataShop.map((item) => (
            <div className="col-md-3 col-sm-6" key={item.id}>
              <div className="product">
                <div className="product-wrap">
                  <img
                    src={require("../../assets/images/" + item.image)}
                    className="img-responsive"
                    alt={item.title}
                  />
                  <div className="badge-box">
                    {item.sale ? <span className="sale-box">Sale</span> : ""}
                    {item.new ? <span className="new-arrive">New</span> : ""}
                  </div>
                  <div className="product-caption">
                    <div className="product-description text-center">
                      <div className="product-description-wrap">
                        <ul className="product-btn-group">
                          <li>
                            <a href={process.env.PUBLIC_URL}>
                              <i className="ion-ios-cart"></i>
                            </a>
                          </li>
                          <li>
                            <a href={process.env.PUBLIC_URL}>
                              <i className="ion-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href={process.env.PUBLIC_URL}>
                              <i className="ion-heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-detail">
                  <div className="white-bg pt-20 pb-20 box-shadow-hover text-center">
                    <h4>
                      <a href={process.env.PUBLIC_URL}>{item.title}</a>
                    </h4>
                    <div className="product-star-rating">
                      <div className="product-stars">
                        <div
                          className="product-stars-rating"
                          data-width={item.rating}
                        ></div>
                      </div>
                    </div>
                    <p>
                      {item.price + " "}
                      {item.oldPrice && (
                        <span className="old-price">
                          {item.currency + item.oldPrice || ""}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="clearfix">
              <ul className="pagination">
                <li>
                  <a href={process.env.PUBLIC_URL}>
                    <i className="ion-chevron-left"></i>
                  </a>
                </li>
                <li className="active">
                  <a href={process.env.PUBLIC_URL}>1</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>2</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>3</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>4</a>
                </li>
                <li>
                  <a href={process.env.PUBLIC_URL}>
                    <i className="ion-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default ShopPage;
