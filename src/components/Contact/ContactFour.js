import React from "react";

const ContactFour = ({ title, backfont }) => (
  <section className="form-style-one">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <div className="title-section text-center">
            <h2 data-backletter={backfont}>{title}</h2>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-8 col-md-offset-2">
          <form name="contact-form" id="contact-form" method="POST" noValidate>
            <div className="messages"></div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                    data-error="Your Name is Required"
                  />
                  <div className="help-block with-errors mt-20"></div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
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
              <label htmlFor="message">Your Message</label>
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
                className="btn btn-dark btn-md btn-square btn-animate remove-margin"
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

export default ContactFour;
