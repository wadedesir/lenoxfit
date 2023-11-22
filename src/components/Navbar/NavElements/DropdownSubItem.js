import React from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

const DropdownSubItem = ({ item, collapse }) => (
  <CSSTransition in={collapse} timeout={300} classNames="dropdown-menu-">
    <ul className="dropdown-menu animated">
      {item.map((val, i) => (
        <li key={i}>
          <Link to={val.link}>{val.title}</Link>
        </li>
      ))}
    </ul>
  </CSSTransition>
);

export default DropdownSubItem;
