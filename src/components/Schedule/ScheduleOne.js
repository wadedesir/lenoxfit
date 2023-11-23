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


      <div className="container" style={{ maxHeight: '100vh', overflow: 'hidden' }}>
        <div className="row">
          <div className="col-sm-8 section-heading pb-0">
            <h2 className="mt-0">{title}</h2>
            <hr className="dark-bg" />
          </div>
        </div>

        <div style={{ maxHeight: '70vh', overflow: 'scroll' }}>
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

          <ul>
            <li><h4>NO STREET SHOES OR SNEAKERS ALLOWED IN AEROBICS STUDIO</h4></li>
            <li><h4>PLEASE BE ON TIME FOR CLASS</h4></li>
            <li><h4>FOR YOUR SAFETY, NO ONE IS ALLOWED IN CLASS IF IT HAS BEEN IN SESSION FOR MORE THAN 10 MINUTES</h4></li>
            <li><h4>PLEASE WIPE DOWN THE SPINNING BIKES, MATS AND EQUIPMENT AFTER USE</h4></li>
            <li><h4>ALL EQUIPMENT IS TO BE RETURNED TO DESIGNATED AREA AFTER USE</h4></li>
            <li><h4>DO NOT REMOVE ANY EQUIPMENT FROM STUDIO</h4></li>
            <li><h4>CLASSES AND INSTRUCTORS ARE SUBJECT TO CHANGE WITHOUT NOTICE</h4></li>
            <li><h4>CLASSES ARE 45 MINUTES UNLESS OTHERWISE DESIGNATED</h4></li>
          </ul>

        </div>
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
