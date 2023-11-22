import React, { useState } from "react";
import logo from "../../assets/images/logo-black.png";
import AccordionNavMega from "./NavElements/AccordionNavMega";
import AccordionNavItem from "./NavElements/AccordionNavItem";

const NavbarLeftSide = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={"side-menu-left side-menu-" + (open ? "open" : "close")}>
      <button
        type="button"
        className="side-menu-toggle side-menu-hamburger"
        onClick={() => setOpen(!open)}
      >
        <span className="side-menu-hamburger-icon"></span>
      </button>
      <nav className="side-menu-nav" role="navigation">
        <a className="side-menu-brand" href="index.html">
          <img src={logo} alt="" />
        </a>
        <ul className="side-bar-nav">
          {data.map((item) =>
            item.megaMenu === true ? (
              <AccordionNavMega
                item={item.subMenu}
                columnTitle={item.colsTitle}
                title={item.title}
                key={item.id}
              />
            ) : (
              <AccordionNavItem
                item={item.subMenu}
                title={item.title}
                key={item.id}
              />
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavbarLeftSide;
