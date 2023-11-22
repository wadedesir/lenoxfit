import React from "react";

const DemoLayouts = ({ data }) => (
  <section className="dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading text-center white-color">
          <h4 className="text-uppercase">
            Showcase your project in a creative style
          </h4>
          <h2>Portfolio Layouts</h2>
        </div>
      </div>

      <div className="row mt-50">
        {data.map((layout, i) => (
          <div className="col-md-3 col-md-6" key={layout.id}>
            <div className="demo-box">
              <a
                href={process.env.PUBLIC_URL + layout.path}
                target="_blank"
                rel="noopener noreferrer"
                className="single-img"
              >
                <div className="demo-img no-radius">
                  <img
                    src={require("../../assets/images/" + layout.image)}
                    alt={layout.title}
                  />
                </div>
              </a>
              <div className="demo-text white-color">
                <h6>{layout.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DemoLayouts;
