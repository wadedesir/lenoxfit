import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataBlog from "../../data/Blog/blog-two-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-18.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import Loader from "../../components/Loader/Loader";

const BlogSidebarRightPage = () => {
  const [toggler, setToggler] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    className: "blog-grid-slider",
  };
  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <NavbarSocial data={dataNavbar} type="white" />
      <PageTitleThree
        title="Blog Sidebar Right"
        tagline="Recent Articles"
        image={imgBg}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-9">
              {dataBlog.slice(0, 4).map((item) =>
                item.type === "slide" ? (
                  <div
                    className={
                      "post mb-50 " +
                      (item.type === "video" ? "blog-grid-video" : "")
                    }
                    key={item.id}
                  >
                    <div
                      className={
                        "post " + (item.type === "video" ? "video-alpha" : "")
                      }
                    >
                      <Slider {...settings}>
                        {item.slides.map((item, i) => (
                          <img
                            className="img-responsive"
                            src={require("../../assets/images/" + item)}
                            alt=""
                            key={i}
                          />
                        ))}
                      </Slider>
                      <div className="post-info">
                        <h3>
                          <a href={item.path}>{item.title}</a>
                        </h3>
                        <h6>{item.published}</h6>
                        <hr />
                        <p className="mt-10">
                          <span>
                            <a className="extras-wrap" href={item.path}>
                              <i className="ion-ios-chatboxes-outline"></i>
                              <span>{item.comments} Comments</span>
                            </a>
                            <span className="extras-wrap">
                              <i className="ion-ios-time-outline"></i>
                              <span>{item.time} Minutes</span>
                            </span>
                          </span>
                        </p>
                        <a className="readmore" href={item.path}>
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      "post mb-50 " +
                      (item.type === "video" ? "blog-grid-video" : "")
                    }
                    key={item.id}
                  >
                    <div
                      className={
                        "post " + (item.type === "video" ? "video-alpha" : "")
                      }
                    >
                      <div className="post-img">
                        <img
                          className="img-responsive"
                          src={require("../../assets/images/" + item.image)}
                          alt=""
                        />
                        {item.type === "video" ? (
                          <a
                            className="video-play popup-youtube"
                            href={item.videoPath}
                            title={item.title}
                            onClick={(e) => {
                              e.preventDefault();
                              setToggler(!toggler);
                            }}
                          >
                            <i className="eicon ion-android-arrow-dropright"></i>
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="post-info">
                        <h3>
                          <a href={item.path}>{item.title}</a>
                        </h3>
                        <h6>{item.published}</h6>
                        <hr />
                        <p className="mt-10">
                          <span>
                            <a className="extras-wrap" href={item.path}>
                              <i className="ion-ios-chatboxes-outline"></i>
                              <span>{item.comments} Comments</span>
                            </a>
                            <span className="extras-wrap">
                              <i className="ion-ios-time-outline"></i>
                              <span>{item.time} Minutes</span>
                            </span>
                          </span>
                        </p>
                        <a className="readmore" href={item.path}>
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              )}
              <div className="clearfix">
                <ul className="pagination">
                  <li>
                    <a href={process.env.PUBLIC_URL}>
                      <i className="ion-chevron-left"></i>
                    </a>
                  </li>
                  <li className="active">
                    <a href={process.env.PUBLIC_URL}>1</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>2</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>3</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>4</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>
                      <i className="ion-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <div className="widget sidebar_widget">
                <form className="search-form" method="get">
                  <input
                    type="text"
                    name="name"
                    className="form-control search-field"
                    id="search"
                    placeholder="Type what it's your mind..."
                  />
                  <button
                    type="submit"
                    className="fa fa-search search-submit"
                  ></button>
                </form>
              </div>
              <div className="widget widget_about">
                <h5 className="widget-title">About</h5>
                <p className="font-300">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed
                  dui lorem adipiscing in adipiscing et.
                </p>
              </div>
              <div className="widget sidebar_widget widget_archive">
                <h5 className="widget-title">Archive</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL}>January 2017</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>May 2016</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>June 2015</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Febuary 2017</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>April 2015</a>
                  </li>
                </ul>
              </div>
              <div className="widget sidebar_widget widget_categories">
                <h5 className="widget-title">Categories</h5>
                <ul>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Business</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Health</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Motion Graphic</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Conecpt Design</a>
                  </li>
                  <li>
                    <a href={process.env.PUBLIC_URL}>Lifestyle</a>
                  </li>
                </ul>
              </div>
              <div className="widget sidebar_widget widget_tag_cloud">
                <h5 className="widget-title">Tags</h5>
                <div className="post-tags">
                  <a href={process.env.PUBLIC_URL}>Design</a>
                  <a href={process.env.PUBLIC_URL}>Envato</a>
                  <a href={process.env.PUBLIC_URL}>Photography</a>
                  <a href={process.env.PUBLIC_URL}>Videos</a>
                  <a href={process.env.PUBLIC_URL}>Creative</a>
                  <a href={process.env.PUBLIC_URL}>Apps</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </Loader>
  );
};

export default BlogSidebarRightPage;
