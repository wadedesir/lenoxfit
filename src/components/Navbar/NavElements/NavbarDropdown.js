import React from "react";
import DropdownMega from "./DropdownMega";
import DropdownItem from "./DropdownItem";
import { CSSTransition } from "react-transition-group";

const NavbarDropdown = ({ data, collapse }) => {
  return (
    <CSSTransition in={collapse} timeout={300} classNames="collapse-navbar">
      <div className="collapse navbar-collapse " id="navbar-menu">
        <ul
          className="nav navbar-nav navbar-center"
          data-in="fadeIn"
          data-out="fadeOut"
        >
          {data.map((item) =>
            item.megaMenu === true ? (
              <DropdownMega
                item={item.subMenu}
                columnTitle={item.colsTitle}
                title={item.title}
                key={item.id}
                itemsPerCol={item.itemsPerCol}
              />
            ) : (
              <DropdownItem
                item={item.subMenu}
                title={item.title}
                key={item.id}
              />
            )
          )}
        </ul>
      </div>
    </CSSTransition>
  );
};

export default NavbarDropdown;
