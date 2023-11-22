import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const TabsOne = ({ data, title }) => (
  <section>
    <div className="container">
      <div className="row">
        <h4 className="text-uppercase text-center">{title}</h4>
      </div>
      <div className="row mt-50">
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

export default TabsOne;
