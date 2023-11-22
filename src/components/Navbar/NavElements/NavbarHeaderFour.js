import React from "react";
import logoWhite from "../../../assets/images/logo-white.png";
import logoBlack from "../../../assets/images/logo-black.png";

const NavbarHeaderFour = ({ type, fixed, width, handleCollapse, collapse }) => (
  <div className="navbar-header">
    <button
      type="button"
      className="navbar-toggle"
      data-toggle="collapse"
      data-target="#navbar-menu"
      onClick={handleCollapse}
    >
      <i
        className={
          "eicon ion-android-" + (collapse === true ? "close" : "menu")
        }
      ></i>
    </button>
    <div className="logo">
      <a href={process.env.PUBLIC_URL}>
        {!fixed && width > 1023 ? (
          <img
            className="logo logo-display"
            src={type === "dark" ? logoWhite : logoBlack}
            alt=""
          />
        ) : width < 1023 ? (
          <img className="logo logo-scrolled" src={logoBlack} alt="" />
        ) : fixed && width > 1023 ? (
          <img
            className="logo logo-display"
            src={type === "dark" ? logoBlack : logoWhite}
            alt=""
            style={{ opacity: 1, height: "auto" }}
          />
        ) : null}
      </a>
    </div>
  </div>
);

export default NavbarHeaderFour;
