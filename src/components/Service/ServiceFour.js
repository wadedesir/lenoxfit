import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const ServiceFour = ({ dataSkills, dataServices, title }) => (
  <section id="service">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h2 className="text-uppercase">{title}</h2>
          <hr className="dark-bg" />
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-6">
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
        <div className="col-md-6" id="services-onepage">
          <Tabs
            className="icon-tabs sm-spacer-mt-120"
            selectedTabPanelClassName="active in"
          >
            <TabList className="nav nav-tabs text-center">
              {dataServices.map((tab) => (
                <Tab key={tab.id}>
                  <a href="!#" onClick={(e) => e.preventDefault()}>
                    <i className={tab.icon}></i> {tab.title}
                  </a>
                </Tab>
              ))}
            </TabList>

            <div className="tab-content text-center">
              {dataServices.map((item) => (
                <TabPanel className="tab-pane fade" key={item.id}>
                  <p>{item.text}</p>
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceFour;
