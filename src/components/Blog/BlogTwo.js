import React from "react";
import Slider from "react-slick";

const BlogTwo = ({ data, title, tagline, backfont }) => {
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
    <section className="dark-block">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading">
            <div className="title-section text-center">
              <h4 className="text-uppercase">{tagline}</h4>
              <h2 data-backletter={backfont}>{title}</h2>
            </div>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-md-12 remove-padding">
            <Slider {...settings}>
              {data.map((post) => (
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
                      <a href={process.env.PUBLIC_URL + "blog-standard"}>
                        {post.title}
                      </a>
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
                    <a
                      className="readmore"
                      href={process.env.PUBLIC_URL + "blog-standard"}
                    >
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
  );
};

export default BlogTwo;
