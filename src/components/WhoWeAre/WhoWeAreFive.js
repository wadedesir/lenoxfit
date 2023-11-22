import React from "react";
import ReactWow from "react-wow";
import ProgressBarOne from "../ProgressBar/ProgressBarOne";

const WhoWeAreFive = ({ dataSkill, dataFeature }) => (
  <section>
    <div className="container">
      <div className="row">
        <ReactWow animation="fadeInLeft" delay="0.1s">
          <div className="col-sm-4 mb-30">
            <div className="text-left">
              <h2 className="text-uppercase font-700 mt-0">
                Live <br /> <span className="font-400">Inspiration</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac vulputate dolor. Nullam venenatis enim in quam euismod
                fringilla. Donec in risus eget purus mattis varius. Nulla
                dapibus quis orci et tincidunt. Phasellus in rhoncus quam. Fusce
                a est lacinia, ultricies mi nec, rutrum dolor
              </p>
              <p>
                Donec vehicula cursus metus viverra aliquet. Nam vel malesuada
                diam. Proin eleifend luctus mi, vel tincidunt sapien auctor nec.
                In quis elit in mauris dignissim pharetra. Praesent efficitur
                dolor a quam tristique ultricies.
              </p>
            </div>
          </div>
        </ReactWow>
        <ProgressBarOne data={dataSkill} />
        <div className="col-md-4">
          {dataFeature.map((feature, i) => (
            <ReactWow
              animation="fadeInUp"
              delay={`0.${i + 1}s`}
              key={feature.id}
            >
              <div className="feature-box text-left mb-30">
                <div className="pull-left">
                  <i className={`${feature.icon} font-40px dark-icon`}></i>
                </div>
                <div className="pull-right">
                  <h4 className="mt-0 font-600">{feature.title}</h4>
                  <p className="font-400">{feature.text}</p>
                </div>
              </div>
            </ReactWow>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAreFive;
