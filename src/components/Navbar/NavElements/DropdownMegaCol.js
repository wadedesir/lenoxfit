import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const DropdownMegaCol = ({ columnTitle, index, val }) => {
  const [collapse, setCollapse] = useState(false);
  const showCol = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };

  return (
    <CSSTransition in={collapse} timeout={300} classNames="col-menu-">
      <div className={"col-menu col-md-4 " + (collapse === true ? "on" : "")}>
        <h6 className="title" onClick={showCol}>
          {columnTitle}
        </h6>
        <div className="content">
          <ul className="menu-col">
            {val.map((value, index) => (
              <li key={index}>
                <Link to={val[index]["link"]}>{val[index]["title"]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CSSTransition>
  );
};

export default DropdownMegaCol;
