import React from "react";
import "./style.css";
import image from "../../assets/Photo Gallery/CAM (4).jpg";
import image1 from "../../assets/Photo Gallery/CAM (1).jpg";
import image2 from "../../assets/Photo Gallery/CAM (14).jpg";
import image3 from "../../assets/Photo Gallery/CAM (18).jpg";
import image4 from "../../assets/Photo Gallery/CAM (20).jpg";
import image5 from "../../assets/Photo Gallery/CAM (21).jpg";
import image6 from "../../assets/Photo Gallery/CAM (22).jpg";
import image7 from "../../assets/Photo Gallery/CAM (3).jpg";
import image8 from "../../assets/Photo Gallery/gate Share baban-4.jpg";
import { Carousel } from "react-responsive-carousel";
import logo from "../../assets/logo2.png";
import apType1 from "../../assets/Type of apartments/160.jpg";
import apType2 from "../../assets/Type of apartments/183.jpg";
import apType3 from "../../assets/Type of apartments/193.jpg";
import apType4 from "../../assets/Type of apartments/222.jpg";
import apType5 from "../../assets/Type of apartments/263.jpg";
import apType6 from "../../assets/Type of apartments/291.jpg";
import floor1 from "../../assets/Floor plans and layouts/WhatsApp Image 2024-03-08 at 07.22.06_7c8ef51c.jpg";
import floor2 from "../../assets/Floor plans and layouts/WhatsApp Image 2024-03-08 at 07.22.07_1ca6b010.jpg";
import floor3 from "../../assets/Floor plans and layouts/WhatsApp Image 2024-03-08 at 07.22.07_ffaee800.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const images = [
    image8,
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    // Add more image URLs as needed
  ];
  return (
    <section className="about-section" id="about">
      <div className="blob-parent">
        <div className="blob-container">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="blobClip">
                <path
                  d="M54.9,-57.2C71.4,-49.9,84.2,-32.7,84.3,-16.1C84.3,-0.4,71.7,15.6,59.4,28.5C47.1,41.4,35.1,50.2,20.6,57.1C6.1,64,-11.1,68.9,-27.2,66.9C-43.2,64.9,-57.9,56,-63.6,42.4C-69.2,28.7,-65.9,10.2,-61.1,-8.5C-56.2,-27.2,-49.9,-46.2,-37.7,-56.9C-25.5,-67.5,-7.4,-70,11.4,-69.8C30.2,-69.6,55.4,-66.7,54.9,-57.2Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>
            <image
              href={image}
              clipPath="url(#blobClip)"
              height="100%"
              width="100%"
            />
          </svg>
        </div>
        <div className="about-text-container">
          <h1 className="header-text-about">
            {t("about.aboutt")} <br /> {t("about.city")}
          </h1>
          <p className="kurdish-text">{t("about.abtext")}</p>
        </div>
      </div>
      <div className="newTransparent">
        <img src={logo} alt="logo" />
      </div>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        centerMode={false}
        infiniteLoop={true}
        emulateTouch={true}
        interval={5000}
        selectedItem={0}
        transitionTime={500}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            style={{ maxHeight: "800px", objectFit: "fill" }}
            alt={`Imag ${index + 1}`}
          />
        ))}
      </Carousel>

      <div className="types">
        <h2 className="apartment-header">
          {t("about.aptext")} {t("about.ap1")}
        </h2>
        <img src={apType1} alt="apartment" className="apartments" />
        <h2 className="apartment-header">
          {t("about.aptext")} {t("about.ap2")}
        </h2>
        <img src={apType2} alt="apartment" className="apartments" />
        <h2 className="apartment-header">
          {t("about.aptext")} {t("about.ap3")}
        </h2>
        <img src={apType3} alt="apartment" className="apartments" />
        <h2 className="apartment-header">
          {t("about.aptext")} {t("about.ap4")}
        </h2>
        <img src={apType4} alt="apartment" className="apartments" />
        <h2 className="apartment-header">
          {t("about.aptext")} {t("about.ap5")}
        </h2>
        <img src={apType5} alt="apartment" className="apartments" />
        <h2 className="apartment-header">
          {t("about.aptext")} {t("about.ap6")}
        </h2>
        <img
          src={apType6}
          alt="apartment"
          className="apartments"
          style={{ marginBottom: "40px" }}
        />
      </div>
      <h1 className="floor-plans">{t("about.floor")}</h1>
      <div className="floors">
        <img src={floor1} alt="Floor 1" className="floor-image" />
        <img src={floor2} alt="Floor 2" className="floor-image" />
        <img src={floor3} alt="Floor 3" className="floor-image" />
      </div>
    </section>
  );
}
