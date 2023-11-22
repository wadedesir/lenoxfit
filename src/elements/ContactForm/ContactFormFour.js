import React from "react";

const ContactFormFour = ({ title }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading pb-0">
          <h4 className="text-uppercase text-center">{title}</h4>
        </div>
      </div>

      <div className="row mt-50">
        <div className="col-md-8 col-md-offset-2">
          <form name="contact-form" className="contact-me">
            <div className="messages"></div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    data-error="Your Name is Required"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label for="email">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    required
                    data-error="Please Enter Valid Email"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="message">Your Message</label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                rows="7"
                required
                data-error="Please, Leave us a message"
              ></textarea>
              <div className="help-block with-errors mt-20"></div>
            </div>
            <div className="text-center">
              <button
                type="submit"
                name="submit"
                className="btn btn-color btn-md btn-circle btn-animate remove-margin"
              >
                <span>
                  Send Message <i className="ion-android-arrow-forward"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactFormFour;
