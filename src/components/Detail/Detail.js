import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Menu from "../TabMenu/Menu";
import style from "./Detail.module.css";

const Detail = () => {
  const { id: idParams } = useParams();
  return (
    <>
      <div className={style.detailSection}>
        {Menu.filter((e) => e.id == idParams).map((elem) => {
          const {
            name,
            image,
            description,
            description_dua,
            image_satu,
            image_dua,
            image_tiga,
            alt,
            to_appstore,
            to_playstore,
            playstore,
            appstore,
            id,
          } = elem;

          if (id != idParams) return idParams;
          return (
            <div className={style.col}>
              <div className={style.detailTitle}>
                <div className={style.detailBanner}>
                  <h2 className={style.titleDescription}>{name}</h2>
                  <img src={image} alt={alt} className={style.contentImg} />
                </div>
                <div className={style.detailBody}>
                  <p className={style.detailDescription}>{description}</p>
                  <p className={style.detailDescription}>{description_dua}</p>
                  <div className={style.gridContainer}>
                    <div className={style.gridItem}>
                      <img
                        src={image_satu}
                      />
                    </div>
                    <div className={style.gridItem}>
                      <img
                        src={image_dua}
                      />
                    </div>
                    <div className={style.gridItem}>
                      <img
                        src={image_tiga}
                      />
                    </div>
                  </div>
                  {(to_appstore || to_playstore) && (
                    <h4 className={style.detailDownload}>
                      Download App here :
                    </h4>
                  )}
                  <div className={style.row}>
                    {to_playstore && (
                      <a href={to_playstore}>
                        <div className={style.column}>
                          <img
                            src={playstore}
                            alt="playstore"
                            className={style.image_play}
                          />
                        </div>
                      </a>
                    )}
                    {to_appstore && (
                      <a href={to_appstore}>
                        <div className={style.column}>
                          <img
                            src={appstore}
                            alt="appstore"
                            className={style.image_play}
                          />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Detail;
