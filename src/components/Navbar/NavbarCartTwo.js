import React from "react";
import AttrNavCart from "./NavElements/AttrNavCart";
import NavbarHeaderThree from "./NavElements/NavbarHeaderThree";
import NavbarDropdown from "./NavElements/NavbarDropdown";
import HandleFixedNavbar from "../../helpers/HandleFixedNavbar";

const NavbarCartTwo = ({ type, data, menuAlign }) => {
  const { fixed } = HandleFixedNavbar();
  return (
    <nav
      className={
        "navbar navbar-default navbar-fixed bootsnav on no-full " +
        (type === "dark" ? "dark " : "white ") +
        (menuAlign === "center" ? "menu-center " : "")
      }
    >
      <div className="container">
        <AttrNavCart />
        <NavbarHeaderThree fixed={fixed} />
        <NavbarDropdown data={data} />
      </div>
    </nav>
  );
};

export default NavbarCartTwo;
