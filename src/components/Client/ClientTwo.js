import React from "react";

const ClientTwo = ({ data }) => (
  <section className="white-bg big-block">
    <div className="container">
      <div className="row row-flex">
        {data.slice(0, 8).map((item) => (
          <div className="col-md-3 col-sm-6" key={item.id}>
            <div className="client-logo">
              <img
                className="img-responsive"
                src={require("../../assets/images/" + item.image)}
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientTwo;
