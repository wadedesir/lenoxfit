import React from "react";

const CartProducts = ({ data }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-bordered shop-cart">
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Item</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0,3).map((item) => (
                  <tr className="cart_item" key={item.id}>
                    <td>
                      <a href={process.env.PUBLIC_URL} title="Remove this item">
                        <i className="ion-ios-close-outline"></i>
                      </a>
                    </td>
                    <td>
                      <a href={process.env.PUBLIC_URL}>
                        <img
                          src={require("../../assets/images/" + item.image)}
                          alt=""
                        />
                      </a>
                    </td>
                    <td>
                      <a href={process.env.PUBLIC_URL}>{item.title}</a>
                    </td>
                    <td>
                      <span>{item.currency + item.price}</span>
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        step="1"
                        min="0"
                        defaultValue="1"
                        title="Qty"
                        placeholder="Qty"
                      />
                    </td>
                    <td className="product-subtotal">
                      <span>{item.currency + item.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="payment-box">
            <div className="row">
              <div className="col-md-6">
                <div className="form-coupon">
                  <h6 className="upper-case">Have a Coupon?</h6>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Coupon code"
                    />
                    <div className="input-group-btn">
                      <button
                        className="btn btn-color btn-md btn-animate remove-margin"
                        type="button"
                      >
                        <span>
                          Apply Coupon <i className="ion-checkmark"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="summary-cart">
                  <h6 className="upper-case">Order Details</h6>
                  <table className="order_table table-responsive table">
                    <tbody>
                      <tr>
                        <th>Subtotal</th>
                        <td>
                          <span>$329.89</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td>
                          <h6>
                            <strong>$329.89</strong>
                          </h6>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="check-btns">
                    <button
                      className="btn btn-dark btn-md btn-animate"
                      type="button"
                    >
                      <span>
                        Update Cart <i className="ion-android-refresh"></i>
                      </span>
                    </button>
                    <button
                      className="btn btn-color btn-md btn-animate"
                      href={process.env.PUBLIC_URL}
                    >
                      <span>
                        Proceed to Checkout <i className="ion-checkmark"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CartProducts;
