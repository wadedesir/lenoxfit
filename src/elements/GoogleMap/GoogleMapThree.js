import React from "react";
import Map from "../../components/Map/Map";

const GoogleMapThree = ({ title }) => (
  <section className="map-section white-bg pb-0">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-uppercase text-center mt-0">{title}</h4>
        </div>
      </div>
    </div>
    <Map type="3" classes="wide mt-50" />
  </section>
);

export default GoogleMapThree;
