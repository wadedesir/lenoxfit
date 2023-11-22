import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import DropdownToggleItem from "./DropdownToggleItem";

const DropdownItem = ({ item, title }) => {
  const [dropdown, setDropdown] = useState(false);

  const showSub = (e) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  return (
    <li className={"dropdown " + (dropdown === true ? "on" : "")}>
      <a
        href={process.env.PUBLIC_URL}
        className="dropdown-toggle"
        data-toggle="dropdown"
        onClick={showSub}
      >
        {title}
      </a>
      <CSSTransition in={dropdown} timeout={300} classNames="dropdown-menu-">
        <ul className="dropdown-menu single-dropdown">
          {item.map((val, i) => (
            <DropdownToggleItem
              key={val.id}
              subMenu={val.subMenu}
              title={val.title}
              link={val.link}
            />
            // <li key={val.id} className={"dropdown oo " + (collapse ? "on" : "")}>
            //   <Link
            //     className={val.subMenu ? "dropdown-toggle" : null}
            //     data-toggle="dropdown"
            //     to={process.env.PUBLIC_URL + val.link}
            //     onClick={showCollapse}
            //   >
            //     {val.title}
            //   </Link>
            //   {val.subMenu ? (
            //     <DropdownSubItem item={val.subMenu} collapse={collapse} />
            //   ) : null}
            // </li>
          ))}
        </ul>
      </CSSTransition>
    </li>
  );
};

export default DropdownItem;
