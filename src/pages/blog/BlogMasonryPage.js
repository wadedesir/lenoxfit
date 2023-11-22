import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Slider from "react-slick";
import Masonry from "react-masonry-component";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataBlog from "../../data/Blog/blog-three-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-15.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import Loader from "../../components/Loader/Loader";

const BlogMasonryPage = () => {
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
        title="Blog Grid"
        tagline="Recent Articles"
        image={imgBg}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Masonry id="blogMasonry">
                {dataBlog.map((item) =>
                  item.type === "slide" ? (
                    <div
                      className="col-xs-12 col-sm-6 col-md-4 blog-masonry-item"
                      key={item.id}
                    >
                      <div className="post">
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
                        "col-xs-12 col-sm-6 col-md-4 blog-masonry-item " +
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
              </Masonry>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </Loader>
  );
};

export default BlogMasonryPage;
