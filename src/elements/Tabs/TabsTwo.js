import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const TabsTwo = ({ data, title }) => (
  <section className="white-bg">
    <div className="container">
      <div className="row">
        <h4 className="text-uppercase text-center">{title}</h4>
      </div>
      <div className="row mt-50">
        <div className="col-md-8 col-md-offset-2">
          <Tabs className="light-tabs" selectedTabPanelClassName="in">
            <TabList className="nav nav-tabs text-center" role="tablist">
              {data.map((item) => (
                <Tab selectedClassName="active" className="" key={item.id}>
                  <a href="!#" onClick={(e) => e.preventDefault()}>
                    {item.title}
                  </a>
                </Tab>
              ))}
            </TabList>
            <div className="tab-content text-left">
              {data.map((item) => (
                <TabPanel
                  className="tab-pane fade active"
                  id="description"
                  key={item.id}
                >
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

export default TabsTwo;
