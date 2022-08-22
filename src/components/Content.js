import React from 'react'
import { Link } from 'react-router-dom'
import style from './Content.module.css'
import img from '../images/working.png'

function Content() {
    return (
        <>
            <div className={style.homeContent}>
                <div className={style.container}>
                    <div className={style.contentRow}>
                        <div className={style.col}>
                            <div className={style.contentImgWrapper}>
                                <img src={img} alt="working" className={style.contentHomeImg} />
                            </div>
                        </div>
                        <div className={style.col}>
                            <div className={style.contentTextWrapper}>
                                <h1 className={style.headingContent}>
                                    Beautiful Apps
                                </h1>
                                <p className={style.subtitleContent}>
                                I will exclusively create you a beautiful mobile apps both native or hybrid using Flutter.
                                </p>
                            </div>
                            <div className={style.contentButton}>
                                <Link to='/'>
                                    <button className={style.btnLarge} >
                                       See More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
