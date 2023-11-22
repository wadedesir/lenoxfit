import React, { useState, useRef, useEffect } from "react";
import Shuffle from "shufflejs";
import PortfolioFilterTwo from "./PortfolioFilterTwo";

const PortfolioThree = ({ data, title, backfont }) => {
  const [shuffle, setShuffle] = useState();
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      setShuffle(
        new Shuffle(element.current, {
          itemSelector: ".portf-item",
        })
      );
      return () => {
        element.current = {};
      };
    }
  }, []);
  const categories = [
    "All",
    "Branding",
    "Print Design",
    "UI/UX Design",
    "Development",
  ];
  const filterElements = (evt) => {
    const btn = evt.currentTarget;
    evt.target.parentElement
      .querySelectorAll(".cbp-filter-item-active")
      .forEach((e) => e.classList.remove("cbp-filter-item-active"));
    evt.currentTarget.classList.add("cbp-filter-item-active");
    const cat = btn.getAttribute("value");
    shuffle.filter((element) => {
      return element.getAttribute("data-groups").includes(cat);
    });
  };
  return (
    <section className="dark-bg gradient-block pattern-bg-light">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading pb-0 white-color">
            <div className="title-section text-center">
              <h2 data-backletter={backfont}>{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <PortfolioFilterTwo
            categories={categories}
            handleClick={filterElements}
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div id="grandy-folio" className="grid-layout-three">
              <div className="portf-wrapper">
                <div className="row" ref={element}>
                  {data.map((item) => (
                    <div
                      className="portf-item col-md-4 col-sm-6 with-spacing"
                      key={item.id}
                      data-groups={
                        item.category
                          ? "[" + item.category.map((val) => `"${val}"`) + "]"
                          : null
                      }
                    >
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioThree;
