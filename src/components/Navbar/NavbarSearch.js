import React, { useState } from "react";
import AttrNavSearch from "./NavElements/AttrNavSearch";
import NavbarHeader from "./NavElements/NavbarHeader";
import NavbarDropdown from "./NavElements/NavbarDropdown";
import HandleFixedNavbar from "../../helpers/HandleFixedNavbar";
import useWindowSize from "../../helpers/useWindowSize";

const NavbarSearch = ({ data, type, menuAlign }) => {
  const { fixed } = HandleFixedNavbar();
  const [collapse, setCollapse] = useState(false);
  const width = useWindowSize().width;
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
        <AttrNavSearch />
        <NavbarHeader
          type={type}
          fixed={fixed}
          handleCollapse={handleCollapse}
          collapse={collapse}
          width={width}
        />
        <NavbarDropdown data={data} collapse={collapse} />
      </div>
    </nav>
  );
};

export default NavbarSearch;
