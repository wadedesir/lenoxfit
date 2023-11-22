import React from "react";

const PortfolioFour = ({ data }) => (
  <section className="pb-0">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading pb-0">
          <h2 className="text-uppercase">Select Projects</h2>
        </div>
      </div>
    </div>
    <div className="container-fluid remove-padding overflow-h">
      <div className="row">
        <div className="col-md-12 mt-50">
          <div id="grandy-folio" className="grid-layout-three">
            <div className="portf-wrapper">
              {data.map((item) => (
                <div
                  className="portf-item col-md-3 col-sm-6"
                  key={item.id}
                  data-groups={
                    item.category
                      ? "[" + item.category.map((val) => `"${val}"`) + "]"
                      : null
                  }
                >
                  <div className="portf-item-wrapper">
                    <div className="portfolio gallery-image-hover text-center">
                      <div className="folio-overlay"></div>
                      <img
                        src={require("../../assets/images/" + item.image)}
                        alt={item.title}
                      />
                      <div className="portfolio-wrap">
                        <div className="portfolio-description">
                          <h3 className="portfolio-title">
                            <a
                              href={
                                process.env.PUBLIC_URL + "single-portfolio-one"
                              }
                            >
                              {item.title}
                            </a>
                          </h3>
                          <a href={process.env.PUBLIC_URL} className="links">
                            {item.tags[0]}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioFour;
