import React, { useState } from "react";
import { Link } from "react-router-dom";

const AccordionSubItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <li key={item.id}>
      {item.subMenu ? (
        <>
          <a
            href={process.env.PUBLIC_URL + item.link}
            className="accordion-heading"
            data-toggle="collapse"
            onClick={handleOpen}
          >
            {item.title}
          </a>
          <ul className={"side-bar-submenu collapse " + (open ? "in" : "")}>
            {item.subMenu.map((val, i) => (
              <li key={i}>
                <Link to={val.link}>{val.title}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <a
          href={process.env.PUBLIC_URL + item.link}
          className="accordion-heading"
          data-toggle="collapse"
        >
          {item.title}
        </a>
      )}
    </li>
  );
};

export default AccordionSubItem;
