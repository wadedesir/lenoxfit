import React, { useState } from "react";
import AccordionPanelHeading from "./AccordionPanelHeading";

const AccordionNavMega = ({ item, columnTitle, title }) => {
  let items = [];
  for (var i = 0; i < item.length; i += 5) {
    items.push(item.slice(i, i + 5));
  }

  const [panel, setPanel] = useState(false);

  const handlePanel = (e) => {
    e.preventDefault();
    setPanel(!panel);
  };

  return (
    <li>
      <a
        href={process.env.PUBLIC_URL}
        className="accordion-heading"
        data-toggle="collapse"
        data-target="#side-nav-one"
        onClick={handlePanel}
      >
        {title}
      </a>
      <ul className={"side-bar-nav-list collapse " + (panel ? "in" : "")} >
        {items.map((val, i) => (
          <AccordionPanelHeading key={i} item={val} index={i} columnTitle={columnTitle} />
        ))}
      </ul>
    </li>
  );
};

export default AccordionNavMega;
