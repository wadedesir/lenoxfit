import React from "react";
import ReactWow from "react-wow";
import Map from "../Map/Map";
const ContactFive = () => (
  <section className="contact-us pt-0 pb-0 form-style-one" id="contact">
    <div className="container-fluid">
      <div className="row row-flex flex-center">
        <div className="col-md-6 col-sm-12 map-section">
          <Map type="2" />
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="col-inner pt-70 pb-50 spacer">
            <div className="section-heading mb-50">
              <h2 className="mt-0">Contact Us</h2>
              <hr className="dark-bg left-line" />
            </div>
            <form
              name="contact-form"
              id="contact-form"
              action=""
              method="POST"
              className="mt-50"
            >
              <div className="messages"></div>
              <ReactWow animation="fadeInUp" delay="0.1s">
                <div className="form-group">
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                    placeholder="Your Name"
                    data-error="Your Name is Required"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
              </ReactWow>
              <ReactWow animation="fadeInUp" delay="0.2s">
                <div className="form-group">
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                    data-error="Please Enter Valid Email"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
              </ReactWow>
              <ReactWow animation="fadeInUp" delay="0.3s">
                <div className="form-group">
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="message"
                    rows="7"
                    placeholder="Your Message"
                    required
                    data-error="Please, Leave us a message"
                  ></textarea>
                  <div className="help-block with-errors mt-20"></div>
                </div>
              </ReactWow>
              <ReactWow animation="fadeInUp" delay="0.4s">
                <div>
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-dark btn-md btn-square remove-margin"
                  >
                    Send Message
                  </button>
                </div>
              </ReactWow>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactFive;
