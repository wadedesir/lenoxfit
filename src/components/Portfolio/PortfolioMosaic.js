import React from "react";
import PortfolioFilter from "./PortfolioFilter";
import gsap from "gsap";

const PortfolioMosaic = ({ title, tagline, data }) => {
  function flip(elements, changeFunc, vars) {
    elements = gsap.utils.toArray(elements);
    vars = vars || {};
    let tl = gsap.timeline({
        onComplete: vars.onComplete,
        delay: vars.delay || 0,
      }),
      bounds = elements.map((el) => el.getBoundingClientRect()),
      copy = {},
      p;
    elements.forEach((el) => {
      el._flip && el._flip.progress(1);
      el._flip = tl;
    });
    for (p in vars) {
      p !== "onComplete" && p !== "delay" && (copy[p] = vars[p]);
    }
    copy.x = (i, element) =>
      "+=" + (bounds[i].left - element.getBoundingClientRect().left);
    copy.y = (i, element) =>
      "+=" + (bounds[i].top - element.getBoundingClientRect().top);
    return tl.from(elements, copy);
  }
  const cats = [
    "All",
    "Branding",
    "Print Design",
    "UI/UX Design",
    "Development",
  ];
  const filterElements = (evt) => {
    evt.target.parentElement
      .querySelectorAll(".cbp-filter-item-active")
      .forEach((e) => e.classList.remove("cbp-filter-item-active"));
    evt.target.classList.add("cbp-filter-item-active");
    const cat = evt.target.getAttribute("value").toLowerCase();
    const portfolio = document.getElementById("grandy-folio");
    const items = portfolio.querySelectorAll(".portf-item");
    flip(items);
    for (let i = 0; i < items.length; i++) {
      if (!items[i].getAttribute("data-groups").includes(cat)) {
        items[i].classList.add("portf-item-off");
      } else {
        items[i].classList.remove("portf-item-off");
      }
    }
  };
  return (
    <section className="pb-0 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-sm-center">
            <h4 className="text-uppercase">{title}</h4>
            <h2 className="font-600">{tagline}</h2>
          </div>
          <PortfolioFilter categories={cats} handleClick={filterElements} />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-120">
          <div id="grandy-folio" className="mosaic-layout">
            <div className="portf-wrapper">
              {data.map((item) => (
                <div
                  className={`portf-item ${item.classes}`}
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
                      alt=""
                    />
                    <div className="portfolio-wrap">
                      <div className="portfolio-description">
                        <h3 className="portfolio-title">
                          <a
                            href={
                              process.env.PUBLIC_URL + "/single-portfolio-one"
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
    </section>
  );
};
export default PortfolioMosaic;
