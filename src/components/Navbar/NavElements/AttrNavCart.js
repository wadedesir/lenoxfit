import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import img1 from "../../../assets/images/thumb01.jpg";
import img2 from "../../../assets/images/thumb02.jpg";

const AttrNavCart = () => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(false);

  const handleCart = (e) => {
    e.preventDefault();
    setCart(!cart);
  };

  const showForm = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const hideForm = () => {
    setShow(false);
  };
  return (
    <>
      <div
        className={
          "fullscreen-search-overlay" +
          (show ? " fullscreen-search-overlay-show" : "")
        }
        id="search-overlay"
      >
        <a href="!#" className="fullscreen-close" id="fullscreen-close-button">
          <i className="ion-close" onClick={hideForm}></i>
        </a>
        <div id="fullscreen-search-wrapper">
          <form method="get" id="fullscreen-searchform">
            <input
              type="text"
              placeholder="Type and hit Enter..."
              id="fullscreen-search-input"
              className="search-bar-top"
            />
            <i className="fullscreen-search-icon ion-android-search">
              <input type="submit" />
            </i>
          </form>
        </div>
      </div>
      <div className="attr-nav">
        <ul>
          <li className="dropdown">
            <a
              href={process.env.PUBLIC_URL}
              className="dropdown-toggle"
              data-toggle="dropdown"
              onClick={handleCart}
            >
              <i className="ion-ios-cart"></i> <span className="badge">3</span>
            </a>
              <CSSTransition in={cart} timeout={300} classNames="cart-list-">
                <ul className="dropdown-menu cart-list">
                  <li>
                    <a href={process.env.PUBLIC_URL} className="photo">
                      <img src={img1} className="cart-thumb" alt="" />
                    </a>
                    <h6>
                      <a href={process.env.PUBLIC_URL}>Casual T-shirt </a>
                    </h6>
                    <p>
                      <span className="price">$25.99</span>
                    </p>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL} className="photo">
                      <img src={img2} className="cart-thumb" alt="" />
                    </a>
                    <h6>
                      <a href={process.env.PUBLIC_URL}>Woman Top</a>
                    </h6>
                    <p>
                      <span className="price">$15.99</span>
                    </p>
                  </li>
                  <li className="total">
                    <span className="pull-left">
                      <strong>Total</strong>
                    </span>
                    <span className="pull-right">: $35.99</span>
                  </li>
                  <li>
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-default btn-dark btn-block remove-margin"
                    >
                      Checkout
                    </a>
                  </li>
                </ul>
              </CSSTransition>
          </li>
          <li className="search">
            <a
              href={process.env.PUBLIC_URL}
              id="search-button"
              onClick={showForm}
            >
              <i className="ion-android-search"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AttrNavCart;
