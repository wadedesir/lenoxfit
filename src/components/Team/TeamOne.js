import React from "react";
import ReactWow from "react-wow";

const TeamOne = ({ data, title, bg }) => (
  <section id="team" className={bg === "white" ? "white-bg" : ""}>
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h2>{title}</h2>
          <hr className="dark-bg" />
        </div>
      </div>
      <div className="row mt-50">
        {data.slice(0, 4).map((member, i) => (
          <ReactWow key={member.id} animation="fadeInUp" delay={`0.${i + 1}s`}>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="team-member-container gallery-image-hover">
                <img
                  src={require("../../assets/images/" + member.image)}
                  className="img-responsive"
                  alt={member.title}
                />
                <div className="member-caption">
                  <div className="member-description">
                    <div className="member-description-wrap">
                      <h4 className="member-title">
                        <a href={process.env.PUBLIC_URL}>{member.title}</a>
                      </h4>
                      <p className="member-subtitle">{member.role}</p>
                      <ul className="member-icons">
                        {member.social.map((icon) => (
                          <li className="social-icon" key={icon.id}>
                            <a href={icon.path}>
                              <i className={`ion-social-${icon.title}`}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ReactWow>
        ))}
      </div>
    </div>
  </section>
);

export default TeamOne;
