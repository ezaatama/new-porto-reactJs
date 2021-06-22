import React from 'react'
import style from './About.module.css'
import Illustration from '../../images/illustration.svg'

function About() {
    return (
        <>
            <div className={style.aboutSection}>
                <div className={style.container}>
                    <div className={style.aboutRow}>
                        <div className={style.col}>
                            <div className={style.aboutImgWrapper}>
                                <img src={Illustration} alt="person" className={style.aboutImg} />
                            </div>
                        </div>
                        <div className={style.col}>
                            <div className={style.aboutTextWrapper}>
                                <p className={style.aboutSubtitle}>
                                    Reza Putra Pratama
                                </p>
                                <h1 className={style.aboutHeading}>
                                    Jr.Front End <span style={{ color : '#FCC233'}}>WebDeveloper</span>
                                </h1>
                                <p className={style.aboutSubtitle}>
                                I have a strong interest in programming especially being a front end developer. 
                                However, I do not rule out learning new things, especially in the technical scope of documentation, web content and information systems. 
                                My interests are based on my experiences as a student and as an intern.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
