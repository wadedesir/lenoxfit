import React from "react";

const DemoPages = ({ data }) => (
  <section id="demo" className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading text-center">
          <h4 className="text-uppercase">What's Unique on Grandy</h4>
          <h2>
            <span className="default-color">14+</span> Home Page Demos
          </h2>
          <p className="mt-20">
            Grandy is Professional and Great template with 15 unique home page
            designs
            <br />
            for creative business, startup business, digital agency,
            photography, architecture,
            <br />
            resume, fashion, fitness, app landing and minimal concept.
          </p>
        </div>
      </div>
      <div className="row mt-50">
        {data.map((page, i) => (
          <div
            className={"col-md-4 col-md-6 " + (i > 2 ? "mt-50" : "")}
            key={page.id}
          >
            <div className="demo-box">
              <a
                href={process.env.PUBLIC_URL + page.path}
                target="_blank"
                rel="noopener noreferrer"
                className="single-img"
              >
                <div className="demo-img">
                  <img
                    src={require("../../assets/images/" + page.image)}
                    alt={page.title}
                  />
                </div>
              </a>
              <div className="demo-text">
                <h3>{page.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DemoPages;
