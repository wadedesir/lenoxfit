import React from "react";
import img1 from "../../assets/images/gallery/gallery-img.jpg";
import img2 from "../../assets/images/gallery/gallery-img-2.jpg";
import img3 from "../../assets/images/gallery/gallery-img-3.jpg";

const MenuOne = ({ data }) => (
  <section id="menu" className="dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-center col-md-offset-2">
          <h1 className="mb-0 kaushan-font orange-color font-70px">
            Share the Love
          </h1>
          <h2 className="mt-10 text-uppercase font-700 letter-spacing-10 white-color">
            Menu
          </h2>
        </div>
      </div>

      <div className="row mt-50">
        <div className="col-md-6">
          <img src={img1} alt="gallery" />
        </div>
        <div className="col-md-6">
          {data.slice(0, 2).map((item) => (
            <div
              className="circle-content-box pt-50 pr-50 pb-50 pl-50 mt-80"
              key={item.id}
            >
              <div className="menu-text-content">
                <div className="row">
                  <div className="col-md-8">
                    <h3>{item.title}</h3>
                    <h6>{item.tags}</h6>
                  </div>
                  <div className="col-md-4">
                    <h3>{item.currency + item.price}</h3>
                    <div className="mt-20">
                      <a href={process.env.PUBLIC_URL}>
                        <span className="label label-default">Order</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="row mt-50">
        <div className="col-md-6">
          {data.slice(2, 4).map((item) => (
            <div
              className="circle-content-box pt-50 pr-50 pb-50 pl-50 mt-80"
              key={item.id}
            >
              <div className="menu-text-content">
                <div className="row">
                  <div className="col-md-8">
                    <h3>{item.title}</h3>
                    <h6>{item.tags}</h6>
                  </div>
                  <div className="col-md-4">
                    <h3>{item.currency + item.price}</h3>
                    <div className="mt-20">
                      <a href={process.env.PUBLIC_URL}>
                        <span className="label label-default">Order</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="col-md-6">
          <img src={img2} alt="gallery" />
        </div>
      </div>

      <div className="row mt-50">
        <div className="col-md-6">
          <img src={img3} alt="gallery" />
        </div>
        <div className="col-md-6">
          {data.slice(4, 6).map((item) => (
            <div
              className="circle-content-box pt-50 pr-50 pb-50 pl-50 mt-80"
              key={item.id}
            >
              <div className="menu-text-content">
                <div className="row">
                  <div className="col-md-8">
                    <h3>{item.title}</h3>
                    <h6>{item.tags}</h6>
                  </div>
                  <div className="col-md-4">
                    <h3>{item.currency + item.price}</h3>
                    <div className="mt-20">
                      <a href={process.env.PUBLIC_URL}>
                        <span className="label label-default">Order</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MenuOne;
