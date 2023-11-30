import React from "react";
import Collapse from "rc-collapse";
import "rc-collapse/assets/index.css";

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';

import img1 from '../../assets/images/custom/equipment1.jpg'
import img2 from '../../assets/images/custom/equipment2.jpg'
import img3 from '../../assets/images/custom/equipment3.jpg'
import img4 from '../../assets/images/custom/equipment4.jpg'
import img5 from '../../assets/images/custom/equipment5.jpg'

const WelcomeThree = ({ data }) => {

  const images = [img1, img2, img3, img4, img5]
  // const [image, setImage] = React.useState(images[4])
  // let curr = 0

  // const updateImages = () => {
  //   console.log(curr)
  //   setImage(images[curr])
  //   curr = curr + 1
  // }

  // setInterval(updateImages, 5000)

  return (
    <section className="white-bg">
      <div id="slideshow-offerings" className="col-md-6 col-sm-4 bg-flex bg-flex-cover slideshow-container" style={{ marginBottom: 1 }}>
        <Slide className="slideshow">
          <div className="each-slide-effect">
            <img src={images[0]} />
          </div>
          <div className="each-slide-effect">
            <img src={images[1]} />
          </div>
          <div className="each-slide-effect">
            <img src={images[2]} />
          </div>
          <div className="each-slide-effect">
            <img src={images[3]} />
          </div>
          <div className="each-slide-effect">
            <img src={images[4]} />
          </div>
        </Slide>
      </div>

      <div className="container">
        <div className="col-md-5 col-sm-7 col-md-offset-7 col-sm-offset-5">
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
    </section>
  )
};

export default WelcomeThree;
