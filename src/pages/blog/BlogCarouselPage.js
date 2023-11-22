import React from "react";
import Slider from "react-slick";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataBlog from "../../data/Blog/blog-two-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-17.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import Loader from "../../components/Loader/Loader";

const BlogCarouselPage = () => {
  const settings = {
    className: "blog-slider",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Loader>
      <NavbarSocial data={dataNavbar} type="white" />
      <PageTitleThree
        title="Blog Carousel"
        tagline="Recent Articles"
        image={imgBg}
      />
      <section className="dark-block" style={{ paddingBottom: "150px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 remove-padding">
              <Slider {...settings}>
                {dataBlog.map((post) => (
                  <div className="post" key={post.id}>
                    <div className="post-img">
                      <img
                        className="img-responsive"
                        src={require("../../assets/images/" + post.image)}
                        alt={post.title}
                      />
                    </div>
                    <div className="post-info">
                      <h3>
                        <a href={post.path}>{post.title}</a>
                      </h3>
                      <h6>{post.published}</h6>
                      <hr />
                      <p className="mt-10">
                        <span>
                          <a className="extras-wrap" href="!#">
                            <i className="ion-ios-chatboxes-outline"></i>
                            <span>{post.comments} Comments</span>
                          </a>
                          <span className="extras-wrap">
                            <i className="ion-ios-time-outline"></i>
                            <span>{post.time} Minutes</span>
                          </span>
                        </span>
                      </p>
                      <a className="readmore" href={post.path}>
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <FooterTwo />
    </Loader>
  );
};

export default BlogCarouselPage;
