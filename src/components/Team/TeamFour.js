import React from "react";
import ReactWow from "react-wow";

const TeamFour = ({ data }) => (
  <section className="white-bg pt-0" id="team-dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h2 className="text-uppercase font-700 mt-0">
            Our <span className="font-400">Team</span>
          </h2>
          <hr className="dark-bg" />
        </div>
      </div>
      <div className="row mt-50">
        {data.map((member, i) => (
          <ReactWow animation="fadeInUp" delay={`0.${i + 1}s`} key={member.id}>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="team-member-container">
                <img
                  src={require("../../assets/images/" + member.image)}
                  className="img-responsive img-circle"
                  alt={member.title}
                />
              </div>
              <div className="text-center">
                <h4 className="member-title">
                  <a href={process.env.PUBLIC_URL}>{member.title}</a>
                </h4>
                <p className="member-subtitle">{member.role}</p>
              </div>
            </div>
          </ReactWow>
        ))}
      </div>
    </div>
  </section>
);

export default TeamFour;
