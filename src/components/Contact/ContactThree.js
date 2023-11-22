import React from "react";

const ContactThree = ({ image, title, tagline }) => (
  <section className="dark-bg form-style-one">
    <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
      <div
        className="bg-flex-holder bg-flex-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>

    <div className="container">
      <div className="col-md-5 col-sm-7 white-color col-md-offset-7 col-sm-offset-5">
        <h1 className="mb-0 font-700 text-uppercase mt-0">{title}</h1>
        <h2 className="mt-10 font-200 letter-spacing-10 source-font text-uppercase">
          {tagline}
        </h2>
        <div className="mt-50">
          <form
            name="contact-form"
            id="contact-form"
            method="POST"
            className="mt-20"
          >
            <div className="messages"></div>
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
            <button
              type="submit"
              name="submit"
              className="btn btn-outline-white btn-md btn-square remove-margin"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactThree;
