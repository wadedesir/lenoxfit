import React, { useState } from "react";
import {Link} from "react-router-dom";

const AccordionPanelHeading = ({ item, index, columnTitle }) => {
    
    const [subitem, setSubitem] = useState(false);

    const handleSub = (e) => {
        e.preventDefault();
        setSubitem(!subitem);
      };
    
    return (
  <li key={index}>
    <a
      href={process.env.PUBLIC_URL}
      className={"accordion-heading " + (subitem ? "" : "collapsed")}
      data-toggle="collapse"
      data-target="#submenu-one"
      onClick={handleSub}
    >
      { columnTitle }
    </a>
    <ul className={"side-bar-submenu collapse " + (subitem ? "in" : "")}>
      {item.map((value, index) => (
        <li key={index}>
          <Link to={item[index]["link"]}>{item[index]["title"]}</Link>
        </li>
      ))}
    </ul>
  </li>
)};

export default AccordionPanelHeading;
