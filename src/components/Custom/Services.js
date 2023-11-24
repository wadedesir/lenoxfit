import React from 'react';

import dataAccordion from "../../data/Accordions/accordions-data.json";
import WelcomeThree from "../../components/Welcome/WelcomeThree";

const Services = () => {
  return (
    <section className="white-bg" id="services" style={{ paddingBottom: '40px' }}>


      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 section-heading pb-0">
            <h2 className="mt-0">Services</h2>
            <hr className="dark-bg" />
          </div>
        </div>

        <div className='row'>
          <WelcomeThree data={dataAccordion} />
        </div>

      </div>
    </section>
  )
};

export default Services;
