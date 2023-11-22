import React, { useState } from "react";
import AttrNavSocial from "./NavElements/AttrNavSocial";
import NavbarHeader from "./NavElements/NavbarHeader";
import NavbarDropdown from "./NavElements/NavbarDropdown";
import HandleFixedNavbar from "../../helpers/HandleFixedNavbar";
import useWindowSize from "../../helpers/useWindowSize";

const NavbarSocial = ({ type, data, menuAlign, megaItems }) => {
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
        <AttrNavSocial />
        <NavbarHeader
          width={width}
          type={type}
          fixed={fixed}
          handleCollapse={handleCollapse}
          collapse={collapse}
        />
        <NavbarDropdown data={data} collapse={collapse} />
      </div>
    </nav>
  );
};

export default NavbarSocial;
