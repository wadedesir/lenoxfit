import React from "react";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";

const AccordionLight = ({ data }) => (
  <section>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
        <h4 className="text-uppercase text-center">Light Accordions</h4>
          <Collapse
            accordion={true}
            defaultActiveKey="1"
            className="panel-group accordion-transparent mt-50"
            id="accordion-transparent"
          >
            {data.map((panel) => (
              <Collapse.Panel
                key={panel.id}
                header={panel.title}
                className="panel panel-default"
              >
                {panel.text}
              </Collapse.Panel>
            ))}
          </Collapse>
        </div>
      </div>
    </div>
  </section>
);

export default AccordionLight;
