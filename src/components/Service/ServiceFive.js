import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const ServiceFive = ({ data }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <Tabs className="icon-tabs" selectedTabPanelClassName="active in">
            <TabList className="nav nav-tabs text-center">
              {data.map((tab) => (
                <Tab key={tab.id} role="presentation">
                  <i className={tab.icon}></i> <span>{tab.title}</span>
                </Tab>
              ))}
            </TabList>
            <div className="tab-content text-center">
              {data.map((tab) => (
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
  </section>
);

export default ServiceFive;
