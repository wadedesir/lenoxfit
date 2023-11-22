import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownSubItem from "./DropdownSubItem";

const DropdownToggleItem = ({ title, subMenu, link }) => {
  const [collapse, setCollapse] = useState(false);

  const showCollapse = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  return (
    <li className={"dropdown " + (collapse ? "on" : "")}>
      {subMenu ? (
        <Link
          className="dropdown-toggle"
          data-toggle="dropdown"
          to={process.env.PUBLIC_URL + link}
          onClick={showCollapse}
        >
          {title}
        </Link>
      ) : (
        <Link to={process.env.PUBLIC_URL + link}>{title}</Link>
      )}

      {subMenu ? <DropdownSubItem item={subMenu} collapse={collapse} /> : null}
    </li>
  );
};

export default DropdownToggleItem;
