import React, { useState } from "react";

const AttrNavSearch = () => {
  const [show, setShow] = useState(false);

  const showForm = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const hideForm = (e) => {
    e.preventDefault();
    setShow(false);
  };
  return (
    <>
      <div
        className={
          "fullscreen-search-overlay" +
          (show ? " fullscreen-search-overlay-show" : "")
        }
        id="search-overlay"
      >
        <a
          href="!#"
          onClick={hideForm}
          className="fullscreen-close"
          id="fullscreen-close-button"
        >
          <i className="ion-close"></i>
        </a>
        <div id="fullscreen-search-wrapper">
          <form method="get" id="fullscreen-searchform">
            <input
              type="text"
              placeholder="Type and hit Enter..."
              id="fullscreen-search-input"
              className="search-bar-top"
            />
            <i className="fullscreen-search-icon ion-android-search">
              <input type="submit" style={{ opacity: 0 }} />
            </i>
          </form>
        </div>
      </div>
      <div className="attr-nav">
        <ul>
          <li className="search">
            <a
              href={process.env.PUBLIC_URL}
              id="search-button"
              onClick={showForm}
            >
              <i className="ion-android-search"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AttrNavSearch;
