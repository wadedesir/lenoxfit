import React from "react";

const AttrNavSocial = () => (
  <div className="attr-nav">
    <ul className="social-media-dark social-top">
      <li>
        <a href={process.env.PUBLIC_URL} className="ion-social-facebook"><span></span></a>
      </li>
      <li>
        <a href={process.env.PUBLIC_URL} className="ion-social-twitter"><span></span></a>
      </li>
      <li>
        <a href={process.env.PUBLIC_URL} className="ion-social-linkedin"><span></span></a>
      </li>
    </ul>
  </div>
);

export default AttrNavSocial;
