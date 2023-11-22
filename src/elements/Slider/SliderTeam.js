import React from "react";
import Slider from "react-slick";

const SliderTeam = ({ data, title }) => {
  const settings = {
    className: "team-slider",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <h4 className="text-uppercase text-center">{title}</h4>
        </div>

        <div className="row mt-50">
          <div className="col-md-12 remove-padding">
            <Slider {...settings}>
              {data.map((member) => (
                <div className="member" key={member.id}>
                  <div className="team-member-container gallery-image-hover">
                    <img
                      src={require("../../assets/images/" + member.image)}
                      className="img-responsive"
                      alt={member.title}
                    />
                    <div className="member-caption">
                      <div className="member-description">
                        <div className="member-description-wrap">
                          <h4 className="member-title">{member.title}</h4>
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
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderTeam;
