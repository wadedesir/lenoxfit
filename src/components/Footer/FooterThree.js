import React from "react";

const FooterThree = () => (
  <>
    <footer className="footer creative-block" id="footer-fixed">
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="social-media text-center">
                <li>
                  <a
                    href={process.env.PUBLIC_URL}
                    className="ion-social-linkedin"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL}
                    className="ion-social-facebook"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL}
                    className="ion-social-twitter"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL}
                    className="ion-social-pinterest"
                  >
                    <span></span>
                  </a>
                </li>
                <li>
                  <a
                    href={process.env.PUBLIC_URL}
                    className="ion-social-instagram"
                  >
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="footer-three-height"></div>
  </>
);

export default FooterThree;
