import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import ReactWow from "react-wow";

const CounterOne = ({ data }) => {
  const [viewed, setViewed] = useState(false);

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  return (
    <ReactWow animation="fadeInUp" delay="0.1s">
      <section className="white-bg pt-80 pb-80">
        <div className="container">
          <div className="row">
            {data.map((counter) => (
              <div className="col-md-3 col-sm-6" key={counter.id}>
                <div className="counter wow fadeInUp" data-wow-delay="0.1s">
                  <h2>
                    <span className="count font-600">
                      <VisibilitySensor
                        onChange={viewChangeHandler}
                        delayedCall
                      >
                        <CountUp end={viewed ? counter.title : 0} />
                      </VisibilitySensor>
                    </span>
                    <span className="font-600">+</span>
                  </h2>
                  <h3 className="dark-color">{counter.text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ReactWow>
  );
};

export default CounterOne;
