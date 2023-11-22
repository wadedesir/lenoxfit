import React from "react";

const PortfolioFilter = ({ categories, handleClick }) => (
  <div className="col-md-8">
    <div
      id="grandy-folio-filter"
      className="cbp-l-filters-alignRight mt-40 text-sm-center"
    >
      {categories.map((cat, i) =>
        i === 0 ? (
          <div
            className="cbp-filter-item-active cbp-filter-item"
            key={i}
            value={cat}
            data-group={cat}
            onClick={handleClick}
          >
            {cat}
          </div>
        ) : (
          <div
            key={i}
            value={cat}
            className="cbp-filter-item"
            data-group={cat}
            onClick={(evt) => handleClick(evt)}
          >
            {cat}
          </div>
        )
      )}
    </div>
  </div>
);

export default PortfolioFilter;
