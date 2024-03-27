import React from "react";
// import { useState } from "react";
import "./style.css";
import image from "../../assets/Photo Gallery/CAM (20).jpg";
import logo from "../../assets/logo2.png";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="home-section" id="home">
        <div className="transparent-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="home-text">
          <h1 className="header-text">{t("about.group")}</h1>
          {t("about.hometext")}
          <br />
          <h1 className="header-text">{t("about.vision")}</h1>
          {t("about.visiontext")}
        </div>
        <div className="image-containerr">
          <img alt="ime" src={image} />
        </div>
      </section>
    </>
  );
}
