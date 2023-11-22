import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
// Images
import imgAvatar1 from "../../assets/images/team/avatar-1.jpg";
import imgAvatar2 from "../../assets/images/team/avatar-2.jpg";
import imgAvatar3 from "../../assets/images/team/avatar-3.jpg";

const ProductDescription = () => (
  <section className="white-bg dark-block">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Tabs className="light-tabs" selectedTabPanelClassName="in">
            <TabList className="nav nav-tabs text-left" role="tablist">
              <Tab selectedClassName="active" className="">
                <a href="#description" onClick={(e) => e.preventDefault()}>
                  Description
                </a>
              </Tab>
              <Tab selectedClassName="active" className="">
                <a href="#info" onClick={(e) => e.preventDefault()}>
                  Additional Information
                </a>
              </Tab>
              <Tab selectedClassName="active" className="">
                <a href="#review" onClick={(e) => e.preventDefault()}>
                  Review (3)
                </a>
              </Tab>
            </TabList>
            <div className="tab-content text-left">
              <TabPanel className="tab-pane fade active" id="description">
                <>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ante libero, venenatis vel auctor ac, pellentesque
                    non magna. In a gravida elit. Donec consectetur egestas
                    purus, in imperdiet justo finibus sed. Mauris faucibus a
                    elit sit amet varius. Etiam augue erat, commodo id egestas
                    eget, hendrerit a enim. Quisque id venenatis nibh. Nullam
                    finibus nulla ut vulputate feugiat.
                  </p>
                  <p>
                    Integer congue ipsum ut nulla molestie, vestibulum aliquam
                    ligula elementum. Etiam et lacus libero. Nam viverra odio
                    magna, quis blandit enim pulvinar at. Nullam dignissim est
                    et massa elementum varius.
                  </p>
                </>
              </TabPanel>
              <TabPanel className="tab-pane fade active" id="info">
                <div className="table-responsive mt-20">
                  <table className="table table-bordered shop-table">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>Color</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>S</td>
                        <td>Red</td>
                      </tr>
                      <tr>
                        <td>M</td>
                        <td>Blue</td>
                      </tr>
                      <tr>
                        <td>L</td>
                        <td>Green</td>
                      </tr>
                      <tr>
                        <td>XL</td>
                        <td>Yellow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
              <TabPanel className="tab-pane fade active" id="review">
                <>
                  <h2 className="comment-reply-title mt-30">
                    3 reviews for Fireman's jacket
                  </h2>
                  <ul className="comment-box">
                    <li className="post-comment">
                      <div className="comment-content">
                        <a href={process.env.PUBLIC_URL} className="avatar">
                          <img src={imgAvatar1} alt={process.env.PUBLIC_URL} />
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nunc quam justo, ullamcorper tincidunt
                              pellentesque in, condimentum ut enim.
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
                              <img
                                src={imgAvatar2}
                                alt={process.env.PUBLIC_URL}
                              />
                            </a>
                            <div className="post-body">
                              <div className="comment-header">
                                <span className="author">
                                  <a href={process.env.PUBLIC_URL}>
                                    Lynda Stone
                                  </a>
                                </span>
                                <span className="time-ago">
                                  <a href={process.env.PUBLIC_URL}>
                                    18 days ago
                                  </a>
                                </span>
                              </div>
                              <div className="post-message">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
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
                          <img src={imgAvatar3} alt={process.env.PUBLIC_URL} />
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nunc quam justo, ullamcorper tincidunt
                              pellentesque in, condimentum ut enim.
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
                  <div id="respond" className="comment-respond form-style-one">
                    <h2 id="reply-title" className="comment-reply-title">
                      Add a Review
                    </h2>
                    <form
                      method="post"
                      id="form-comments"
                      className="comment-form"
                    >
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
                          className="btn btn-dark btn-md btn-default remove-margin"
                          value="Submit"
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
                </>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  </section>
);

export default ProductDescription;
