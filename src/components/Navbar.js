import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../images/eza.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "000" }}>
        <div className={style.navbar}>
          <div className={style.navbarContainer}>
            <Link to="/" className={style.navbarLogo} onClick={closeMobileMenu}>
              <img src={logo} alt="logo" className={style.navbarIcon} />
              ezdevs
            </Link>
            <div className={style.menuIcon} onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? style.navMenuActive : style.navMenu}>
              <li className={style.navItem}>
                <Link
                  to="/"
                  className={style.navLinks}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  to="/about"
                  className={style.navLinks}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  to="/portofolio"
                  className={style.navLinks}
                  onClick={closeMobileMenu}
                >
                  Portofolio
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  to="/contact"
                  className={style.navLinks}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
