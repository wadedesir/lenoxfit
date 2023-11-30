import React from "react";
import ReactWow from "react-wow";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';


import award1 from '../../assets/images/custom/award1.png'
import award2 from '../../assets/images/custom/award2.png'
import award3 from '../../assets/images/custom/ward.png'
import award4 from '../../assets/images/custom/scrn.png'
import award5 from '../../assets/images/custom/award2017.png'

const CounterTwo = ({ data, bg }) => (
  <section className={(bg === "dark" ? "dark" : "white") + "-bg pt-10 pb-10"}>
    <div className="container">
      <div className="row">
        {/* {data.map((counter, i) => (
          <div className="col-md-3 col-sm-6" key={counter.id}>
            <ReactWow animation="fadeInUp" delay={`0.${i}s`}>
              <div className="counter">
                <i
                  className={`${counter.icon} ${bg === "dark" ? "light" : "dark"
                    }-icon font-40px`}
                ></i>
                <h2 className={bg === "dark" ? "white-color" : ""}>
                  <span className="count font-600">{counter.title}</span>
                  <span className="font-600">+</span>
                </h2>
                <h3 className={(bg === "dark" ? "white" : "dark") + "-color"}>
                  {counter.text}
                </h3>
              </div>
            </ReactWow>
          </div>
        ))} */}

        <div className="row">
          <div className="col-sm-8 section-heading pb-0">
            <h2 className="mt-0" style={{ color: 'white' }}>Awards</h2>
            <hr className="white-bg" />
          </div>
        </div>

        <ReactWow animation="fadeInUp" delay={`0.1s`}>
          <div className="counter">
            <Slide className="slideshow">
              <div className="each-slide-effect">
                <img src={award1} />
              </div>
              <div className="each-slide-effect">
                <img src={award2} />
              </div>
              <div className="each-slide-effect">
                <img src={award3} />
              </div>
              <div className="each-slide-effect">
                <img src={award4} />
              </div>
              <div className="each-slide-effect">
                <img src={award5} />
              </div>
            </Slide>
          </div>
        </ReactWow>
      </div>
    </div>
  </section>
);

export default CounterTwo;
