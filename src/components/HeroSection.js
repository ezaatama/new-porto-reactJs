import React from "react";
import { Link } from "react-router-dom";
import style from "./HeroSection.module.css";
import ParticleBackground from "./ParticleBackground";
import Content from "./Content";
import GalleryReact from "../components/TabMenu/GalleryReact";

const PDF_FILE = 'https://drive.google.com/uc?export=download&id=1AbnsXSviyIsZWSJ1ThVaPInYiN4Y-Jnp'

function HeroSection({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel1,
  buttonLabel2,
  img,
  alt,
  imgStart,
}) {
  const downloadFile = (url) => {
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('target', '_blank');
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <>
      <div className={style.particle}>
        <ParticleBackground />
      </div>
      <div
        className={
          lightBg ? style.homeHeroSection : style.homeHeroSectionDarkBg
        }
      >
        <div className={style.container}>
          <div
            className={style.homeHeroRow}
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className={style.col}>
              <div className={style.homeHeroTextWrapper}>
                <h1 className={lightText ? style.heading : style.headingDark}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc ? style.subtitle : style.subtitleDark
                  }
                >
                  {description}
                </p>
              </div>
              <div className={style.homeHeroButton}>
                  <button onClick={() => {downloadFile(PDF_FILE)}} className={style.btnWide}>{buttonLabel1}</button>
                <Link to="/contact">
                  <button className={style.btnLarge}>{buttonLabel2}</button>
                </Link>
              </div>
            </div>
            <div className={style.col}>
              <div className={style.homeHeroImgWrapper}>
                <img src={img} alt={alt} className={style.homeHeroImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content />
      <GalleryReact />
    </>
  );
}

export default HeroSection;
