import React from "react";
import { CSSTransition } from "react-transition-group";
import DropdownMega from "./DropdownMega";
import DropdownItem from "./DropdownItem";

const NavbarDropdownMiddle = ({ data, collapse }) => {
  return (
    <CSSTransition in={collapse} timeout={300} classNames="collapse-navbar">
      <div className="collapse navbar-collapse" id="navbar-menu">
        <div className="col-half left">
          <ul
            className="nav navbar-nav navbar-center navbar-left"
            data-in="fadeIn"
            data-out="fadeOut"
          >
            {data
              .slice(0, 3)
              .map((item) =>
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
        <div className="col-half right">
          <ul
            className="nav navbar-nav navbar-center navbar-right"
            data-in="fadeIn"
            data-out="fadeOut"
          >
            {data
              .slice(3, 6)
              .map((item) =>
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
      </div>
    </CSSTransition>
  );
};

export default NavbarDropdownMiddle;
