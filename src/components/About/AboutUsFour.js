import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const AboutUsFour = ({
  titleSkills,
  dataSkills,
  dataFeatures,
  imgVideo,
  imgAbout,
  pathVideo,
  toggler,
  setToggler,
}) => (
  <section className="pt-0 pb-0">
    <div className="container-fluid">
      <div className="row row-flex flex-center">
        <div className="col-md-6 col-sm-6">
          <div className="col-inner pt-70 pb-50 spacer white-bg">
            <div className="title-section mb-50">
              <h2 className="mt-10">{titleSkills}</h2>
            </div>

            {dataSkills.map((skill) => (
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
        <div
          className="col-md-6 col-sm-6 bg-flex-cover"
          style={{ backgroundImage: `url(${imgVideo})` }}
        >
          <div className="center-layout">
            <div className="v-align-middle">
              <a
                className="popup-youtube"
                href={pathVideo}
                onClick={(e) => {
                  e.preventDefault();
                  setToggler(!toggler);
                }}
              >
                <div className="play-button">
                  <i className="eicon ion-android-arrow-dropright"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-flex flex-center">
        <div
          className="col-md-6 col-sm-6 bg-flex-cover"
          style={{ backgroundImage: `url(${imgAbout})` }}
        ></div>

        <div className="col-md-6 col-sm-6 white-bg">
          <div className="col-inner pt-70 pb-50 spacer">
            <Tabs className="icon-tabs" selectedTabPanelClassName="active in">
              <TabList className="nav nav-tabs text-center">
                {dataFeatures.map((tab) => (
                  <Tab key={tab.id} role="presentation">
                    <i className={tab.icon}></i> <span>{tab.title}</span>
                  </Tab>
                ))}
              </TabList>

              <div className="tab-content text-center">
                {dataFeatures.map((tab) => (
                  <TabPanel
                    key={tab.id}
                    className="tab-pane fade"
                    id={tab.htmlID}
                  >
                    <p>{tab.text}</p>
                    <p className="mt-20">
                      <a
                        href={process.env.PUBLIC_URL + tab.path}
                        className="btn btn-outline btn-sm"
                      >
                        Know more
                      </a>
                    </p>
                  </TabPanel>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUsFour;
