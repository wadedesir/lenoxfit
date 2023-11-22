import React from "react";
import logoWhite from "../../../assets/images/logo-white.png";
import logoBlack from "../../../assets/images/logo-black.png";

const NavbarHeaderThree = ({ type }) => (
  <div className="navbar-header">
    <button
      type="button"
      className="navbar-toggle"
      data-toggle="collapse"
      data-target="#navbar-menu"
    >
      <i className="eicon ion-android-menu"></i>
    </button>
    <div className="logo">
      <a href={process.env.PUBLIC_URL}>
        <img
          className="logo logo-scrolled"
          src={type === "dark" ? logoWhite : logoBlack}
          alt=""
        />
      </a>
    </div>
  </div>
);

export default NavbarHeaderThree;
