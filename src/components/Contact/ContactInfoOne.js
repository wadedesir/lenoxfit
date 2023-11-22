import React from "react";

const ContactInfoOne = () => (
  <section className="p-0 white-bg">
    <div className="container-fluid">
      <div className="row row-flex">
        <div className="col-md-4">
          <div className="col-inner spacer light-br-r">
            <div className="text-center">
              <i className="icon-map-pin font-50px indigo-icon"></i>
              <h3>Office Address</h3>
              <p>
                44 Shirley Ave. <br />
                West Chicago, IL 60185
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-inner spacer light-br-r">
            <div className="text-center">
              <i className="icon-envelope font-50px indigo-icon"></i>
              <h3>Email Us</h3>
              <p className="mb-0">contact@grandy.com</p>
              <p>careers@grandy.com</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-inner spacer">
            <div className="text-center">
              <i className="icon-dial font-50px indigo-icon"></i>
              <h3>Call Us</h3>
              <p className="mb-0">(+1) 623 432-0170</p>
              <p>(+1) 623 432-0275</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactInfoOne;
