import React from "react";
import VisibilitySensor from "react-visibility-sensor";

const ProgressBarOne = ({ data }) => (
  <div className="col-md-4">
    {data.map((item) => (
      <VisibilitySensor key={item.id}>
        {({ isVisible }) => {
          return (
            <>
              <div className="progress-bar-title">{item.title}</div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{
                    width: isVisible ? `${item.text}%` : "20%",
                  }}
                >
                  <span>{item.text}%</span>
                </div>
              </div>
            </>
          );
        }}
      </VisibilitySensor>
    ))}
  </div>
);

export default ProgressBarOne;
