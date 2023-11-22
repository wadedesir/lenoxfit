import React from "react";

const TeamSix = ({ data, title }) => (
  <section id="team">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 section-heading">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="row mt-50">
        {data.slice(0, 4).map((member) => (
          <div
            className="col-md-3 col-sm-6 col-xs-12 wow fadeInUp"
            data-wow-delay="0.1s"
            key={member.id}
          >
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
        ))}
      </div>
    </div>
  </section>
);

export default TeamSix;
