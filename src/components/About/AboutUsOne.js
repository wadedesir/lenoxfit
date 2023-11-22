import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutUsOne = ({
  titleAbout,
  titleSkills,
  backfontAbout,
  backfontSkills,
  dataSkills,
  dataFeatures,
  imageAbout,
  pathVideo,
  children,
  setToggler,
  toggler,
}) => {
  return (
    <>
      <section className="pt-0 pb-0 dark-block">
        <div className="container-fluid">
          <div className="row row-flex flex-center">
            <div className="col-md-6 col-sm-12 dark-bg">
              <div className="col-inner pt-70 pb-50 spacer white-color">
                <div className="title-section">
                  <h2 className="mt-10" data-backletter={backfontAbout}>
                    {titleAbout}
                  </h2>
                </div>
                <div className="mt-30">{children}</div>
              </div>
            </div>
            <div
              className="col-md-6 col-sm-12 bg-flex-cover"
              style={{ backgroundImage: `url(${imageAbout})` }}
            >
              <div className="center-layout">
                <div className="v-align-middle">
                  <a
                    className="popup-youtube"
                    href="!#"
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
            <div className="col-md-6 col-sm-12 default-bg">
              <div className="col-inner pt-70 pb-50 spacer">
                <div className="title-section white-color mb-50">
                  <h2 className="mt-10" data-backletter={backfontSkills}>
                    {titleSkills}
                  </h2>
                </div>
                {dataSkills.map((skill) => (
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

            <div className="col-md-6 col-sm-12 white-bg">
              <div className="col-inner pt-70 pb-50 spacer">
                <Tabs
                  className="icon-tabs"
                  selectedTabPanelClassName="active in"
                >
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
                      </TabPanel>
                    ))}
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsOne;
