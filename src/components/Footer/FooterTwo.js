import React from "react";
import img from "../../assets/images/logo-footer-light.png";

const FooterTwo = () => (
  <>
    <footer className="footer dark-block" id="footer-fixed">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <div className="logo logo-footer">
                  <a href="index.html">
                    <img className="logo logo-display" src={img} alt="" />
                  </a>
                </div>
                <div className="widget-links">
                  <ul>
                    <li>44 Shirley Ave. West Chicago, IL 60185</li>
                    <li>(001) 7878 234 564</li>
                    <li>hello@gmail.com</li>
                    <li>www.grandy.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Links</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Home</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>About Us</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Our Services</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Blog</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Portfolio</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-2">
              <div className="widget widget-links">
                <h5 className="widget-title">Legal</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Privacy Policies</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>FAQ</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Careers</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="widget widget-text">
                <h5 className="widget-title">Popular Tags</h5>
                <div className="popular-tags">
                  <a href={process.env.PUBLIC_URL}>Minimal</a>
                  <a href={process.env.PUBLIC_URL}>One Page</a>
                  <a href={process.env.PUBLIC_URL}>Design</a>
                  <a href={process.env.PUBLIC_URL}>Creative</a>
                  <a href={process.env.PUBLIC_URL}>Apps</a>
                  <a href={process.env.PUBLIC_URL}>Development</a>
                  <a href={process.env.PUBLIC_URL}>Tips</a>
                  <a href={process.env.PUBLIC_URL}>Responsive</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <ul className="social-media">
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
            <div className="col-md-6 col-xs-12">
              <div className="copy-right text-right">
                © {new Date().getFullYear()} Grandy. All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="footer-height"></div>
  </>
);

export default FooterTwo;
