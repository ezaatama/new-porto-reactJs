import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

function Footer() {
    return (
        <div className={style.footerSection}>
            <div className={style.footerLinks}>
                <div className={style.footerLinksWrapper}>
                    <div className={style.footerLinksItems}>
                        <h2>Social Media</h2>
                        {/* <a
                        className={style.socialIconLink}
                        href='#'
                        aria-label='Facebook'
                        >
                        <FaFacebook />
                        </a> */}
                        <a
                        className={style.socialIconLink}
                        href='https://www.instagram.com/ezaatama'
                        aria-label='Instagram'
                        >
                        <FaInstagram />
                        </a>
                        {/* <a
                        className={style.socialIconLink}
                        href={
                            '#'
                        }
                        aria-label='Youtube'
                        >
                        <FaYoutube />
                        </a>
                        <a
                        className={style.socialIconLink}
                        href='#'
                        aria-label='Twitter'
                        >
                        <FaTwitter />
                        </a> */}
                        <a
                        className={style.socialIconLink}
                        href="https://www.linkedin.com/in/reza-putra-pratama/"
                        aria-label='LinkedIn'
                        >
                        <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <section className={style.sosmedSection}>
                <div className={style.sosmedWrap}>
                <div className={style.footerLogo}>
                    <Link to='/' className={style.sosmedLogo}>
                    CloudTama
                    </Link>
                </div>
                <small className={style.websiteRights}>Reza Putra Pratama @2021</small>
                
                </div>
            </section>
        </div>
    )
}


export default Footer
