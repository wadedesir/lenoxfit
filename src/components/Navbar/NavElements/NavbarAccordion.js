import React from "react";
import DropdownMega from "./DropdownMega";
import DropdownItem from "./DropdownItem";

const NavbarDropdown = ({ data }) => {
  return (
    <div className="collapse navbar-collapse" id="navbar-menu">
      <ul
        className="nav navbar-nav navbar-center"
        data-in="fadeIn"
        data-out="fadeOut"
      >
        {data.map((item) =>
          item.megaMenu === true ? (
            <DropdownMega
              item={item.subMenu}
              columnTitle={item.columnTitle}
              title={item.title}
              key={item.id}
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
  );
};

export default NavbarDropdown;
