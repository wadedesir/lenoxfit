import React from "react";
import logoWhite from "../../assets/images/logo-white.png";
import logoBlack from "../../assets/images/logo-black.png";

const NavbarOnlyLogo = ({ type }) => (
  <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav on no-full brand-center">
    <div className="container">
      <div className="navbar-header">
        <div className="logo">
          <a href={process.env.PUBLIC_URL} className="navbar-brand">
            <img
              className="logo logo-display"
              src={type === "dark" ? logoBlack : logoWhite}
              alt=""
            />
            <img
              className="logo logo-scrolled"
              src={type === "dark" ? logoWhite : logoBlack}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default NavbarOnlyLogo;
