import React from "react";

const PortfolioFilterTwo = ({ categories, handleClick }) => (
  <div className="col-md-12">
    <div
      id="grandy-folio-filter"
      className="cbp-l-filters-alignCenter mt-60 text-sm-center"
      style={{ marginBottom: "100px" }}
    >
      {categories.map((cat, i) =>
        i === 0 ? (
          <div
            className="cbp-filter-item-active cbp-filter-item dark"
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

export default PortfolioFilterTwo;
