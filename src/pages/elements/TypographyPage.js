import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-19.jpg";
// Components
import PageTitle from "../../components/PageTitle/PageTitle";
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import FooterOne from "../../components/Footer/FooterOne";
import Loader from "../../components/Loader/Loader";

const TypographyPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="dark" />
    <PageTitle title="Typography" tagline="H1, H2, P and List" image={imgBg} />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center col-sm-6">
            <p>
              Lorem ipsum dolor sit amet,
              <mark>consectetur adipiscing elit tincidunt</mark>
              Nam consequat nunc, ultrices vehicula mauris mollis et. Sed
              pharetra ultrices quam in laoreet. Donec
              <small>
                This line of text is meant to be treated as fine print.
              </small>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
              Duis pulvinar mattis turpis in mollis. Suspendisse eu eros id
              dolor efficitur tincidunt quis id tellus.
              <u>This line of text will render as underlined</u>
              <br />
              <strong>This line rendered as bold text.</strong>
              <em>This line rendered as italicized text.</em>
            </p>
            <blockquote className="blockquote mt-20">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
            <blockquote className="blockquote blockquote-reverse mt-20">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
          <div className="col-md-6 text-center col-sm-6">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tincidunt consequat nunc, ultrices vehicula mauris mollis et. Sed
              pharetra ultrices quam in laoreet. Donec laoreet eu mi nec
              sagittis. Curabitur nunc velit, egestas vel aliquet ac, tempus
              quis dolor. Duis pulvinar mattis turpis in mollis. Suspendisse eu
              eros id dolor efficitur tincidunt quis id tellus. In lacinia
              laoreet auctor. Mauris a consequat magna, in tempus urna. Nam
              fringilla sed tellus laoreet ornare.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="white-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center col-sm-6 mb-50">
            <h1>h1 heading</h1>
            <h2>h2 heading</h2>
            <h3>h3 heading</h3>
            <h4>h4 heading</h4>
            <h5>h5 heading</h5>
            <h6>h6 heading</h6>
          </div>
          <div className="col-md-6 text-center col-sm-6">
            <h1 className="upper-case">h1 heading</h1>
            <h2 className="upper-case">h2 heading</h2>
            <h3 className="upper-case">h3 heading</h3>
            <h4 className="upper-case">h4 heading</h4>
            <h5 className="upper-case">h5 heading</h5>
            <h6 className="upper-case">h6 heading</h6>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="widget-list">
                  <ul>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>
                      List Item
                      <ul>
                        <li>List Item</li>
                        <li>List Item</li>
                      </ul>
                    </li>
                    <li>List Item</li>
                    <li>List Item</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="widget-list">
                  <ol>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>
                      List Item
                      <ol>
                        <li>List Item</li>
                        <li>List Item</li>
                      </ol>
                    </li>
                    <li>List Item</li>
                    <li>List Item</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default TypographyPage;
