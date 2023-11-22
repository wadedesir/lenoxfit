import React, { useState } from "react";
import AttrNavCart from "./NavElements/AttrNavCart";
import NavbarHeader from "./NavElements/NavbarHeader";
import NavbarDropdown from "./NavElements/NavbarDropdown";
import HandleFixedNavbar from "../../helpers/HandleFixedNavbar";
import useWindowSize from "../../helpers/useWindowSize";

const NavbarCart = ({ type, data, menuAlign }) => {
  const { fixed } = HandleFixedNavbar();
  const width = useWindowSize().width;
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  return (
    <nav
      className={
        (fixed ? "" : " navbar-transparent ") +
        "navbar navbar-default navbar-fixed bootsnav on no-full " +
        (type === "dark" ? "dark " : "white ") +
        (menuAlign === "center" ? "menu-center " : "")
      }
    >
      <div className="container">
        <AttrNavCart />
        <NavbarHeader
          fixed={fixed}
          type={type}
          handleCollapse={handleCollapse}
          collapse={collapse}
          width={width}
        />
        <NavbarDropdown data={data} collapse={collapse} />
      </div>
    </nav>
  );
};

export default NavbarCart;
