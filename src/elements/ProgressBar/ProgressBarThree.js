import React from "react";
import VisibilitySensor from "react-visibility-sensor";

const ProgressBarThree = ({ data, title }) => (
  <section className="default-bg dark-block">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="text-uppercase text-center mt-0 white-color">{title}</h4>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-8 col-md-offset-2">
          {data.map((skill) => (
            <VisibilitySensor key={skill.id}>
              {({ isVisible }) => {
                return (
                  <>
                    <div className="progress-bar-title">{skill.title}</div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{
                          width: isVisible ? `${skill.text}%` : "20%",
                        }}
                      >
                        <span>{skill.text}%</span>
                      </div>
                    </div>
                  </>
                );
              }}
            </VisibilitySensor>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProgressBarThree;
