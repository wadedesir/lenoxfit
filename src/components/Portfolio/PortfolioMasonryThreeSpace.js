import React from "react";
import Masonry from "react-masonry-component";

const PortfolioMasonryThreeSpace = ({ data }) => (
  <section className="white-bg dark-block">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="grandy-folio" className="masonry-layout-three">
            <div className="portf-wrapper">
              <Masonry className="row">
                {data.map((item) => (
                  <div
                    className={"portf-item col-md-4 col-sm-6 with-spacing"}
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
                                  process.env.PUBLIC_URL +
                                  "single-portfolio-one"
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
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioMasonryThreeSpace;
