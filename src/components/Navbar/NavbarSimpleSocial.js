import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import NavbarHeader from "./NavElements/NavbarHeader";
import AttrNavSocial from "./NavElements/AttrNavSocial";
import HandleFixedNavbar from "../../helpers/HandleFixedNavbar";
import useWindowSize from "../../helpers/useWindowSize";

const NavbarSimpleSocial = ({ data }) => {
  const { fixed } = HandleFixedNavbar();
  const [collapse, setCollapse] = useState(false);
  const width = useWindowSize().width;
  const handleCollapse = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  return (
    <nav
      className={
        (fixed ? "" : " navbar-transparent ") +
        "navbar navbar-default navbar-fixed white bootsnav on no-full"
      }
    >
      <div className="container">
        <AttrNavSocial />
        <NavbarHeader
          fixed={fixed}
          handleCollapse={handleCollapse}
          collapse={collapse}
          width={width}
        />
        <CSSTransition in={collapse} timeout={300} classNames="collapse-navbar">
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav navbar-right"
              data-in="fadeIn"
              data-out="fadeOut"
            >
              {data.map((item) => (
                <li key={item.id}>
                  <a className="page-scroll" href={`#${item.link}`}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </CSSTransition>
      </div>
    </nav>
  );
};

export default NavbarSimpleSocial;
