import React from "react";
import ReactWow from "react-wow";

const classNameesOne = ({ data, title }) => (
  <section className="white-bg" id="pricing">
    <div className="container-fluid mx-10">
      <div className="row">
        <div className="col-sm-8 section-heading pb-0">
          <h2 className="mt-0">{title}</h2>
          <hr className="dark-bg" />
        </div>
      </div>

      <div style={{ marginRight: '15px', marginLeft: '15px' }}>
        <p>
          <span style={{ fontWeight: 'bold' }}>
            PAYMENT PLAN OPTION (EFT):
          </span>
          For your convenience, a monthly fee can be automatically deducted from your checking account or credit card account. There is no enrollment fee with this plan; a one year commitment is required. No discounts are available with this option. <span style={{ fontWeight: 'bold' }}>$42.00</span> per month.
        </p>
        <p>
          <span style={{ fontWeight: 'bold' }}>
            10 DAY VISIT BOOKLETS:
          </span>
          Our Day Visit Booklet has replaced our punch card plan. When purchased in advance, there are 10 visits in a booklet for <span style={{ fontWeight: 'bold' }}>$120</span> which offers a <span style={{ fontWeight: 'bold' }}>$30</span> savings and has no expiration date. Day Booklets are the same as cash and no replacements are available for lost passes/books.
        </p>
      </div>

      <div className="row mt-10">
        {data.map((item, i) => (
          <ReactWow animation="fadeInUp" delay={`0.${i}s`} key={item.id}>
            <div className="col-md-4 p-0">

              <div className="img-box">
                <img
                  src={require("../../assets/images/" + item.image)}
                  alt={item.title}
                />
                {/* <div className={"img-overlay img-bg-" + item.color}>
                  <div className="center-layout">
                    <div className="v-align-middle text-center white-color">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <p className="mt-20">
                        <a
                          href={process.env.PUBLIC_URL + item.path}
                          className="btn btn-outline-white font-500 btn-md btn-square remove-margin"
                        >
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </ReactWow>
        ))}
      </div>
    </div>
  </section>
);

export default classNameesOne;
