import React from "react";
import VisibilitySensor from "react-visibility-sensor";

const SkillOne = ({ data, title, backfont }) => (
  <section className="white-bg default-block">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading">
          <div className="title-section text-center">
            <h2 data-backletter={backfont}>{title}</h2>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-6">
          {data.slice(0, 3).map((skill) => (
            <VisibilitySensor key={skill.id}>
              {({ isVisible }) => {
                return (
                  <>
                    <div className="progress-bar-title">{skill.title}</div>
                    <div className="progress">
                      <div
                        className="progress-bar animated"
                        style={{ width: isVisible ? skill.text + "%" : "20%" }}
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
        <div className="col-md-6">
          {data.slice(3, 6).map((skill) => (
            <VisibilitySensor key={skill.id}>
              {({ isVisible }) => {
                return (
                  <>
                    <div className="progress-bar-title">{skill.title}</div>
                    <div className="progress">
                      <div
                        className="progress-bar animated"
                        style={{ width: isVisible ? skill.text + "%" : "20%" }}
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

export default SkillOne;
