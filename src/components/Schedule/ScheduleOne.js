import React, { useEffect, useState } from 'react';
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import loadMBody from "../../custom/loadMBody";

const ScheduleOne = ({ data, title }) => {

  const [mindBody, setMindBody] = useState(false);

  useEffect(() => {
    loadMBody(() => {
      setMindBody(true);
    });
  }, []);

  return (
    <section className="white-bg" id="schedule">


      <div className="container">
        <div className="row">
          <div className="col-sm-8 section-heading pb-0">
            <h2 className="mt-0">{title}</h2>
            <hr className="dark-bg" />
          </div>
        </div>


        {
          mindBody && (
            <healcode-widget
              data-type="schedules"
              data-widget-partner="object"
              data-widget-id="9113668806fe"
              data-widget-version="1">
            </healcode-widget>
          )
        }
        {/* <div className="row mt-50">
        <div className="col-md-8 col-md-offset-2">
          <Tabs className="schedule-tabs" selectedTabPanelClassName="active">
            <TabList className="nav nav-tabs text-center" role="tablist">
              {data.map((item) => (
                <Tab role="presentation" key={item.id}>
                  <a href="!#" onClick={(e) => e.preventDefault()}>
                    {item.title}
                  </a>
                </Tab>
              ))}
            </TabList>
            <div className="tab-content text-center">
              {data.map((item) => (
                <TabPanel
                  role="tabpanel"
                  className="tab-pane fade in"
                  id={item.title.toLowerCase()}
                  key={item.id}
                >
                  <ul className="schedule-menu">
                    {item.classes.map((tab) => (
                      <li key={tab.id}>
                        <div className="schedule-contect" key={tab.id}>
                          <h4>
                            <span className="schedule-title">{tab.title}</span>
                            <span className="schedule-time">{tab.text}</span>
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </div>
          </Tabs>
        </div>
      </div> */}
      </div>
    </section>
  )
};

export default ScheduleOne;
