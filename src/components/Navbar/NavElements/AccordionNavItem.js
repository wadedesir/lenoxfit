import React, { useState } from "react";
import AccordionSubItem from "./AccordionSubItem";

const AccordionNavItem = ({ item, title }) => {
  
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  
  return (
  <li>
    <a
      href={process.env.PUBLIC_URL}
      className="accordion-heading"
      data-toggle="collapse"
      onClick={handleOpen}
    >
      {title}
    </a>
    <ul className={"side-bar-nav-list collapse " + (open ? "in" : "")}>
      {item.map((val, i) => (
        <AccordionSubItem item={val} index={i} key={val.id} />
      ))}
    </ul>
  </li>
)};

export default AccordionNavItem;