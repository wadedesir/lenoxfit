import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownMegaCol from "./DropdownMegaCol";

const DropdownMega = ({ item, columnTitle, title, itemsPerCol }) => {
  let items = [];
  for (var i = 0; i < item.length; i += itemsPerCol) {
    items.push(item.slice(i, i + itemsPerCol));
  }
  const [dropdown, setDropdown] = useState(false);
  const showSub = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };
  
  return (
    <li
      className={"dropdown megamenu-fw " + (dropdown === true ? "on" : "")}
    >
      <a
        href={process.env.PUBLIC_URL}
        className="dropdown-toggle"
        data-toggle="dropdown"
        onClick={showSub}
      >
        {title}
      </a>
      <CSSTransition in={dropdown} timeout={300} classNames="dropdown-menu-">
        <ul className="dropdown-menu megamenu-content" role="menu">
          <li>
            <div className="row">
              {items.map((val, i) => (
                <DropdownMegaCol columnTitle={columnTitle} key={i} val={val} />
              ))}
            </div>
          </li>
        </ul>
      </CSSTransition>
    </li>
  );
};

export default DropdownMega;
