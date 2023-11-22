import React from "react";
import ReactWow from "react-wow";

const BlogOne = ({ data, title, pattern }) => (
  <section className={pattern ? "pattern-bg-dark" : ""}>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h2>{title}</h2>
          <hr className="dark-bg" />
        </div>
      </div>
      <div className="row mt-50">
        {data.map((post, i) => (
          <div className="col-md-4" key={post.id}>
            <ReactWow animation="fadeInUp" delay={`0.${i}s`}>
              <div className="post">
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
                      <a className="extras-wrap" href={process.env.PUBLIC_URL}>
                        <i className="ion-ios-chatboxes-outline"></i>
                        <span>{post.comments} Comments</span>
                      </a>
                      <span className="extras-wrap">
                        <i className="ion-ios-time-outline"></i>
                        <span>{post.time} Minutes</span>
                      </span>
                    </span>
                  </p>
                  <a className="readmore" href={process.env.PUBLIC_URL}>
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </ReactWow>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogOne;
