import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const PortfolioPhotography = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(0);

  const closeLightbox = () => {
    setIsOpen(false);
  };
  const openLightbox = (e, photo) => {
    e.preventDefault();
    setPhoto(photo);
    setIsOpen(true);
  };

  return (
    <section className="white-bg pt-0 pb-0 dark-block">
      <div className="container-fluid">
        <div className="row">
          <div id="grandy-folio" className="mosaic-gallery">
            <div className="gallery-wrapper">
              {data.map((item) => (
                <div className={`gallery-item ${item.classes}`} key={item.id}>
                  <div className="portfolio gallery-image-hover text-center">
                    <div className="folio-overlay"></div>
                    <img
                      src={require("../../assets/images/" + item.image)}
                      alt=""
                    />
                    <div className="portfolio-wrap">
                      <ul className="portfolio-details">
                        <li>
                          <a
                            href={process.env.PUBLIC_URL}
                            className="alpha-lightbox"
                            onClick={(e) => openLightbox(e, item.image)}
                          >
                            <i className="ion-plus font-40px"></i>
                          </a>
                        </li>
                      </ul>
                      {isOpen && (
                        <Lightbox
                          mainSrc={require("../../assets/images/" + photo)}
                          onCloseRequest={() => closeLightbox()}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPhotography;
