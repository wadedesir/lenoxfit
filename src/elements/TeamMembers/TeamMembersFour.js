import React from "react";

const TeamMembersFour = ({ data, title }) => (
  <section className="white-bg dark-block" id="team-dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h4 className="text-uppercase text-center mt-0">{title}</h4>
        </div>
      </div>
      <div className="row media-member">
        {data.slice(0, 4).map((member) => (
          <div className="col-md-3 col-sm-6" key={member.id}>
            <div className="member text-center">
              <div className="team-member-container">
                <img
                  src={require("../../assets/images/" + member.image)}
                  className="img-responsive"
                  alt={member.title}
                />
                <div className="member-caption">
                  <div className="member-description text-center">
                    <div className="member-description-wrap">
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
              <div className="white-bg pt-20 pb-20 box-shadow-hover">
                <h4 className="member-title">
                  <a href={process.env.PUBLIC_URL}>{member.title}</a>
                </h4>
                <p className="member-subtitle">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamMembersFour;
