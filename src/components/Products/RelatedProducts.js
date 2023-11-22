import React from "react";

const RelatedProducts = ({ data }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h5 className="mt-0">Related Product</h5>
        </div>
      </div>
      <div className="row mt-50">
        {data.slice(0, 4).map((item) => (
          <div className="col-md-3 col-sm-6" key={item.id}>
            <div className="product">
              <div className="product-wrap">
                <img
                  src={require("../../assets/images/" + item.image)}
                  className="img-responsive"
                  alt={item.title}
                />
                <div className="badge-box">
                  {item.sale ? <span className="sale-box">Sale</span> : ""}
                  {item.new ? <span className="new-arrive">New</span> : ""}
                </div>
                <div className="product-caption">
                  <div className="product-description text-center">
                    <div className="product-description-wrap">
                      <ul className="product-btn-group">
                        <li>
                          <a href={process.env.PUBLIC_URL}>
                            <i className="ion-ios-cart"></i>
                          </a>
                        </li>
                        <li>
                          <a href={process.env.PUBLIC_URL}>
                            <i className="ion-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a href={process.env.PUBLIC_URL}>
                            <i className="ion-heart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-detail">
                <div className="white-bg pt-20 pb-20 box-shadow-hover text-center">
                  <h4>{item.title}</h4>
                  <div className="product-star-rating">
                    <div className="product-stars">
                      <div
                        className="product-stars-rating"
                        data-width={item.rating}
                      ></div>
                    </div>
                  </div>
                  <p>
                    {item.price + " "}
                    {item.oldPrice && (
                      <span className="old-price">
                        {item.currency + item.oldPrice || ""}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedProducts;
