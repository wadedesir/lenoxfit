import React from "react";
// DATA Files
import dataNavbar from "../../data/Navbar/nav-main-data.json";
import dataBlog from "../../data/Blog/blog-two-data.json";
// Images
import imgBg from "../../assets/images/slides/title-bg-14.jpg";
import imgComm1 from "../../assets/images/team/avatar-1.jpg";
import imgComm2 from "../../assets/images/team/avatar-2.jpg";
import imgComm3 from "../../assets/images/team/avatar-3.jpg";
// Components
import NavbarSocial from "../../components/Navbar/NavbarSocial";
import PageTitleThree from "../../components/PageTitle/PageTitleThree";
import FooterTwo from "../../components/Footer/FooterTwo";
import Loader from "../../components/Loader/Loader";

const BlogStandardPage = () => (
  <Loader>
    <NavbarSocial data={dataNavbar} type="white" />
    <PageTitleThree
      title="Blog Standard"
      tagline="Recent Articles"
      image={imgBg}
    />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-9">
            {dataBlog.slice(0, 1).map((item) => (
              <div className="post mb-50" key={item.id}>
                <div className="post">
                  <div className="post-img">
                    <img
                      className="img-responsive"
                      src={require("../../assets/images/" + item.image)}
                      alt=""
                    />
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
            ))}
            <div className="blog-standard">
              <p className="font-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus tempor lacus et tellus consectetur, vel pretium ante
                elementum. Aliquam elementum dignissim tellus a venenatis.
                Vestibulum vel sem pulvinar, scelerisque orci non, interdum
                magna. Sed vestibulum elit sed placerat semper. Quisque
                consectetur sollicitudin purus et tempus. Sed sit amet dapibus
                magna. Curabitur non odio magna. Fusce viverra elit eget orci
                ultricies dapibus.
              </p>
              <blockquote>
                <p>
                  Donec dui ipsum, pulvinar sit amet mattis quis, dapibus eu
                  libero. Curabitur lobortis, diam non semper placerat, ipsum
                  felis pulvinar magna, quis dapibus enim velit vel lorem.
                </p>
              </blockquote>
            </div>
            <div className="post-tags">
              <a href={process.env.PUBLIC_URL}>Design</a>
              <a href={process.env.PUBLIC_URL}>Branding</a>
              <a href={process.env.PUBLIC_URL}>Stationery</a>
              <a href={process.env.PUBLIC_URL}>Development</a>
              <a href={process.env.PUBLIC_URL}>Concept</a>
            </div>

            <h2 className="comment-reply-title mt-30">5 Comments:</h2>
            <ul className="comment-box">
              <li className="post-comment">
                <div className="comment-content">
                  <a href={process.env.PUBLIC_URL} className="avatar">
                    <img src={imgComm1} alt={process.env.PUBLIC_URL} />
                  </a>
                  <div className="post-body">
                    <div className="comment-header">
                      <span className="author">
                        <a href={process.env.PUBLIC_URL}>Karl Casey</a>
                      </span>
                      <span className="time-ago">
                        <a href={process.env.PUBLIC_URL}>25 mins ago</a>
                      </span>
                    </div>
                    <div className="post-message">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc quam justo, ullamcorper tincidunt pellentesque in,
                        condimentum ut enim.
                      </p>
                    </div>
                    <div className="comment-footer">
                      <span className="reply">
                        <a href={process.env.PUBLIC_URL}>
                          <i className="ion-reply"></i> Reply
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="reply-comment">
                  <li className="post-comment">
                    <div className="comment-content">
                      <a href={process.env.PUBLIC_URL} className="avatar">
                        <img src={imgComm2} alt={process.env.PUBLIC_URL} />
                      </a>
                      <div className="post-body">
                        <div className="comment-header">
                          <span className="author">
                            <a href={process.env.PUBLIC_URL}>Lynda Stone</a>
                          </span>
                          <span className="time-ago">
                            <a href={process.env.PUBLIC_URL}>18 days ago</a>
                          </span>
                        </div>
                        <div className="post-message">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </div>
                        <div className="comment-footer">
                          <span className="reply">
                            <a href={process.env.PUBLIC_URL}>
                              <i className="ion-reply"></i> Reply
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="post-comment">
                <div className="comment-content">
                  <a href={process.env.PUBLIC_URL} className="avatar">
                    <img src={imgComm3} alt={process.env.PUBLIC_URL} />
                  </a>
                  <div className="post-body">
                    <div className="comment-header">
                      <span className="author">
                        <a href={process.env.PUBLIC_URL}>Roland Buford</a>
                      </span>
                      <span className="time-ago">
                        <a href={process.env.PUBLIC_URL}>3 months ago</a>
                      </span>
                    </div>
                    <div className="post-message">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc quam justo, ullamcorper tincidunt pellentesque in,
                        condimentum ut enim.
                      </p>
                    </div>
                    <div className="comment-footer">
                      <span className="reply">
                        <a href={process.env.PUBLIC_URL}>
                          <i className="ion-reply"></i> Reply
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div id="respond" className="comment-respond">
              <h2 id="reply-title" className="comment-reply-title">
                Leave a Comment
              </h2>
              <form method="post" id="form-comments" className="comment-form">
                <div className="row-form row">
                  <div className="col-form col-md-6">
                    <div className="form-group">
                      <input
                        name="author"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-form col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="comment"
                    id="comment-field"
                    className="form-control"
                    placeholder="Comment"
                    rows="5"
                  ></textarea>
                </div>

                <p className="form-submit">
                  <input
                    name="submit"
                    type="submit"
                    id="submit-btn"
                    className="btn btn-color btn-md btn-default remove-margin"
                    value="Post Comment"
                  />
                  <input type="hidden" name="comment_post_ID" />
                  <input
                    type="hidden"
                    name="comment_parent"
                    id="comment_parent"
                    value="0"
                  />
                </p>
              </form>
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dui
                lorem adipiscing in adipiscing et.
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

export default BlogStandardPage;
