import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
// DATA Files
import dataModel from "../../data/Models/model-one-data.json";
// Images
import img1 from "../../assets/images/bg-left-img-3.jpg";
import img2 from "../../assets/images/bg-right-img-4.jpg";
import img3 from "../../assets/images/slides/home-bg-22.jpg";
import img4 from "../../assets/images/bg-left-img-4.jpg";
// Components
import FashionSlider from "../../components/Slider/FashionSlider";
import NavbarOnlyLogo from "../../components/Navbar/NavbarOnlyLogo";
import Loader from "../../components/Loader/Loader";

const HomeFashion = () => {
  const settings = {
    className: "model-slider",
    dots: true,
    autoplay: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
  };
  const [toggler, setToggler] = useState(false);

  return (
    <Loader>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=sU3FkzUKHXU"]}
      />
      <NavbarOnlyLogo />
      <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        navigation
        navigationPosition="right"
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <FashionSlider />
              <section className="section dark-bg">
                <div className="bg-wrap">
                  <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
                    <div
                      className="bg-flex-holder bg-flex-cover"
                      style={{ backgroundImage: `url(${img1})` }}
                    ></div>
                  </div>
                </div>
                <div className="container">
                  <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
                    <h1 className="mb-0 play-font white-color">About Us</h1>
                    <h3 className="mt-10 kaushan-font pink-color">
                      Fashion Agency
                    </h3>
                    <div className="mt-30">
                      <p className="play-font">
                        We are an Fashion agency, based in New York. Vision
                        Every company is performing best online. Mission Helping
                        businesses to find the perfect and most succesful
                        strategy, to be online. we come up with great creative
                        ideas that engage and captivate your customers.
                      </p>
                      <p className="mt-30 play-font">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed in arcu est. Vivamus elementum tempus orci, id
                        ultrices diam gravida in. Curabitur hendrerit pulvinar
                        mauris, vel pellentesque velit venenatis aliquam.
                      </p>
                      <div className="inline-btn mt-30">
                        <a
                          href="https://www.youtube.com/watch?v=sU3FkzUKHXU"
                          className="btn btn-sm btn-circle btn-outline-white ml-0 popup-youtube"
                          onClick={(e) => {
                            e.preventDefault();
                            setToggler(!toggler);
                          }}
                        >
                          <i className="eicon ion-android-arrow-dropright"></i>
                        </a>
                        <p>Watch Our Video</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section dark-bg">
                <div className="bg-wrap">
                  <div className="col-md-6 col-sm-4 bg-flex bg-flex-right">
                    <div
                      className="bg-flex-holder bg-flex-cover"
                      style={{ backgroundImage: `url(${img2})` }}
                    ></div>
                  </div>
                </div>
                <div className="container">
                  <div className="col-md-5 col-sm-7">
                    <h1 className="mb-0 play-font white-color">Our Models</h1>
                    <h3 className="mt-10 kaushan-font pink-color">
                      Passion for Fashion
                    </h3>
                    <Slider {...settings}>
                      {dataModel.map((item) => (
                        <div className="row item-model" key={item.id}>
                          <div className="col-md-8">
                            <img
                              src={require("../../assets/images/" + item.image)}
                              alt={item.title}
                            />
                            <div className="model-box title-section">
                              <h4 data-backletter={"0" + item.id}>
                                <a href={process.env.PUBLIC_URL}>
                                  {item.title}
                                </a>
                              </h4>
                              <p>{item.role}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </section>
              <section className="section home-slider">
                <div className="full-screen-bg">
                  <div
                    className="parallax-img"
                    style={{
                      background: `url(${img3}) center center / cover scroll no-repeat`,
                    }}
                  ></div>
                  <div className="hero-text-wrap">
                    <div className="hero-text">
                      <div className="container">
                        <div className="text-right">
                          <h4 className="kaushan-font pink-color">
                            Glasses are Sexy
                          </h4>
                          <h4 className="play-font mt-30 line-height-45 white-color">
                            Dress like you’re going to meet <br />
                            your worst enemy today
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section dark-bg dark-block">
                <div className="bg-wrap">
                  <div className="col-md-6 col-sm-4 bg-flex bg-flex-left">
                    <div
                      className="bg-flex-holder bg-flex-cover"
                      style={{ backgroundImage: `url(${img4})` }}
                    ></div>
                  </div>
                </div>
                <div className="container">
                  <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
                    <h1 className="mb-0 play-font white-color">Contact Us</h1>
                    <h3 className="mt-10 kaushan-font pink-color">
                      Different is Beautiful
                    </h3>
                    <div className="mt-30">
                      <form
                        name="contact-form"
                        id="contact-form"
                        action="php/contact.php"
                        method="POST"
                        className="mt-20"
                      >
                        <div className="messages"></div>
                        <div className="form-group">
                          <label className="sr-only" htmlFor="name">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            required
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-group">
                          <label className="sr-only" htmlFor="email">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="sr-only" htmlFor="message">
                            Message
                          </label>
                          <textarea
                            name="message"
                            className="form-control"
                            id="message"
                            rows="7"
                            placeholder="Your Message"
                            required
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-outline-white btn-md btn-square remove-margin"
                        >
                          Send Message
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        }}
      />
    </Loader>
  );
};

export default HomeFashion;
