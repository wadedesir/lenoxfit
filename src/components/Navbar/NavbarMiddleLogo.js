import React, { useState } from "react";
import NavbarHeaderTwo from "./NavElements/NavbarHeaderTwo";
import NavbarDropdownMiddle from "./NavElements/NavbarDropdownMiddle";
import HandleFixedNavbar from "../../helpers/HandleFixedNavbar";
import useWindowSize from "../../helpers/useWindowSize";

const NavbarMiddleLogo = ({ data }) => {
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
        "navbar navbar-default navbar-fixed white bootsnav on no-full brand-center"
      }
    >
      <div className="container">
        <NavbarHeaderTwo
          fixed={fixed}
          handleCollapse={handleCollapse}
          collapse={collapse}
          width={width}
        />
        <NavbarDropdownMiddle data={data} collapse={collapse} />
      </div>
    </nav>
  );
};

export default NavbarMiddleLogo;
