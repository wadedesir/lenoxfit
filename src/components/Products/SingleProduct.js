import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// Images
import imgProd1 from "../../assets/images/shop/single-product-01.jpg";
import imgProd2 from "../../assets/images/shop/single-product-02.jpg";
import imgProd3 from "../../assets/images/shop/single-product-03.jpg";
import imgProd4 from "../../assets/images/shop/single-product-04.jpg";
import imgProd5 from "../../assets/images/shop/single-product-05.jpg";

const SingleProduct = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1 = [];
  let slider2 = [];

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const NextArrow = ({ currentSlide, slideCount, ...props }) => (
    <button type="button" className="slick-next" {...props}>
      <i className="ion-android-arrow-forward"></i>
    </button>
  );
  const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <button type="button" className="slick-prev" {...props}>
      <i className="ion-android-arrow-back"></i>
    </button>
  );

  const settings1 = {
    arrows: false,
    dots: false,
    infinite: true,
    touchMove: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    slidesToShow: 3,
    focusOnSelect: true,
    className: "product-slide",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          vertical: false,
          slidesToShow: 3,
        },
      },
    ],
  };

  const settings2 = {
    arrows: true,
    dots: false,
    swipeToSlide: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "product-item product-slider",
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-2">
                <Slider
                  {...settings1}
                  asNavFor={nav2}
                  ref={(slider) => (slider1 = slider)}
                  swipeToSlide={true}
                >
                  <div className="small-thumb">
                    <img
                      src={imgProd1}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                  <div className="small-thumb">
                    <img
                      src={imgProd2}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                  <div className="small-thumb">
                    <img
                      src={imgProd3}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                  <div className="small-thumb">
                    <img
                      src={imgProd4}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                  <div className="small-thumb">
                    <img
                      src={imgProd5}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                </Slider>
              </div>
              <div className="col-md-10">
                <Slider
                  {...settings2}
                  asNavFor={nav1}
                  ref={(slider) => (slider2 = slider)}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  <div className="big-thumb">
                    <img
                      src={imgProd1}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                  <div className="big-thumb">
                    <img
                      src={imgProd2}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                  <div className="big-thumb">
                    <img
                      src={imgProd3}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                  <div className="big-thumb">
                    <img
                      src={imgProd4}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                  <div className="big-thumb">
                    <img
                      src={imgProd5}
                      className="img-responsive"
                      alt="single-product"
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <h2>Fireman's Jacket</h2>
            <h3 className="grey">$186.76 </h3>
            <div className="product-star-rating">
              <div className="product-stars">
                <div className="product-stars-rating" data-width="100"></div>
              </div>
            </div>
            <div className="single-product-des">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetur
                adipiscing elit. Praesent vitae odio ullamcorper, accumsan felis
                vitae, commodo diam. Proin facilisis iaculis ipsum, non
                consectetur urna egestas nec. Nulla facilisi. Aliquam erat
                volutpat. Nam aliquet tellus nec augue auctor maximus.
              </p>
            </div>
            <div className="single-product-qty">
              <form>
                <input
                  type="number"
                  step="1"
                  min="1"
                  defaultValue="1"
                  name="quantity"
                  title="Qty"
                  className="input-text qty text"
                  size="4"
                />
                <span className="input-group-btn">
                  <a
                    href={process.env.PUBLIC_URL}
                    className="btn btn-md btn-dark remove-margin"
                  >
                    ADD TO CART <i className="ion-ios-cart"></i>
                  </a>
                </span>
              </form>
            </div>
            <div className="product-fabric-detail">
              <h5>Product Fabric</h5>
              <p>
                100% Cotton Single jersey Prewashed to impart a softer texture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
