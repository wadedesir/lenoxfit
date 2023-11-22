import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const ServiceThree = ({ data, title, tagline }) => (
  <section id="service" className="orange-block">
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-center col-md-offset-2">
          <h1 className="mb-0 kaushan-font orange-color font-70px">
            {title}
          </h1>
          <h2 className="mt-10 text-uppercase font-700 letter-spacing-10">
            Our Services
          </h2>
        </div>
      </div>
      <div className="row mt-50">
        <div className="col-md-8 col-md-offset-2">
          <div className="circle-content-box pt-50 pr-50 pb-50 pl-50">
            <Tabs className="icon-tabs" selectedTabPanelClassName="active">
              <TabList className="nav nav-tabs text-center" role="tablist">
                {data.map((item) => (
                  <Tab role="presentation" key={item.id}>
                    <a href="!#" onClick={(e) => e.preventDefault()}>
                      <i className={item.icon}></i>
                      {item.title}
                    </a>
                  </Tab>
                ))}
              </TabList>
              <div className="tab-content text-center">
                {data.map((tab) => (
                  <TabPanel
                    role="tabpanel"
                    className="tab-pane fade in"
                    key={tab.id}
                  >
                    {tab.items.map((item) => (
                      <div className="service-content border-bottom" key={item.id}>
                        <div className="row">
                          <div className="col-md-2">
                            <img
                              src={require("../../assets/images/" + item.image)}
                              className="img-circle"
                              alt={item.title}
                            />
                          </div>
                          <div className="col-md-10">
                            <div className="service-wrap">
                              <h3>{item.title}</h3>
                              <p>{item.text}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default ServiceThree;
