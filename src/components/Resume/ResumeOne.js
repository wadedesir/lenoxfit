import React from "react";

const ResumeOne = ({ data, title, backfont }) => (
  <section className="dark-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 section-heading white-color">
          <div className="title-section text-center">
            <h2 data-backletter={backfont}>{title}</h2>
          </div>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-6">
          <ul className="timeline timeline-split">
            {data.slice(0, 2).map((item) => (
              <li className="timeline-item" key={item.id}>
                <div className="timeline-info">
                  <span>{item.period}</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h2 className="timeline-title">Experience</h2>
              </div>
            </li>
            {data.slice(2, 4).map((item) => (
              <li className="timeline-item" key={item.id}>
                <div className="timeline-info">
                  <span>{item.period}</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="timeline timeline-split">
            {data.slice(4, 6).map((item) => (
              <li className="timeline-item" key={item.id}>
                <div className="timeline-info">
                  <span>{item.period}</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
            <li className="timeline-item period">
              <div className="timeline-info"></div>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h2 className="timeline-title">Education</h2>
              </div>
            </li>
            {data.slice(6, 8).map((item) => (
              <li className="timeline-item" key={item.id}>
                <div className="timeline-info">
                  <span>{item.period}</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ResumeOne;
