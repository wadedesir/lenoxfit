import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import HandleFixedNavbar from "../../helpers/HandleFixedNavbar";
import NavbarHeaderFour from "./NavElements/NavbarHeaderFour";
import useWindowSize from "../../helpers/useWindowSize";

const NavbarLogin = ({ data }) => {
  const { fixed } = HandleFixedNavbar();
  const [collapse, setCollapse] = useState(false);
  const handleCollapse = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  const width = useWindowSize().width;
  return (
    <nav
      className={
        (fixed ? "" : " navbar-transparent ") +
        "navbar navbar-default navbar-fixed white bootsnav on no-full"
      }
    >
      <div className="container">
        <NavbarHeaderFour
          fixed={fixed}
          handleCollapse={handleCollapse}
          collapse={collapse}
          type="dark"
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
              <li>
                <a
                  href={process.env.PUBLIC_URL}
                  className="btn btn-dark btn-sm nav-btn-default"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    </nav>
  );
};

export default NavbarLogin;
