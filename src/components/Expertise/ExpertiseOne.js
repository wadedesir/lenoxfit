import React from "react";
import VisibilitySensor from "react-visibility-sensor";

const ExpertiseOne = ({ data, title }) => (
  <section className="default-bg color-block">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="mt-30 mb-30">
            {data.map((skill) => (
              <VisibilitySensor key={skill.id}>
                {({ isVisible }) => {
                  return (
                    <>
                      <div className="progress-bar-title">
                        {skill.title}
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: isVisible ? skill.text + "%" : "20%",
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

        <div className="col-md-6">
          <div className="white-color">
            <h2 className="text-uppercase">Our Expertise</h2>
            <p className="font-20px mt-20">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed in
              arcu est. Vivamus elementum tempus orci id ultrices diam gravida
              in. Curabitur hendrerit pulvinar mauris vel pellentesque velit
              venenatis aliquam. Duis vulputate nibh ac nunc volutpat faucibus
              commodo felis auctor. Duis sit amet dictum arcu.
            </p>
            <p className="font-20px mt-30">
              Suspendisse potenti. In turpis nunc, pellentesque id risus eu
              euismod aliquet lorem. Donec at mi nec nisl tempor dictum nec nec
              nunc. Nullam vulputate erat et vehicula fringilla.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExpertiseOne;
