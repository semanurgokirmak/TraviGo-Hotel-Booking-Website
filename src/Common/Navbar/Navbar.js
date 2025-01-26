import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Galeri
              </Link>
            </li>
            <li>
              <Link to="/destinations" onClick={closeMobileMenu}>
                Rotalar
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={closeMobileMenu}>
                Değerlendirmeler
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                İletişim
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i class="far fa-chevron-right"></i>Giriş Yap
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i class="far fa-chevron-right"></i>Üye Ol
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Fiyat Teklifi Al</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex_space">
          <div className="logo">
            <img src="images/logo.png" alt="" />
          </div>

          <div className="contact flex_space ">
            <div className="box flex_space">
              <div className="icons">
                <i class="fal fa-clock"></i>
              </div>
              <div className="text">
                <h4>Çalışma Saatleri</h4>
                <Link to="/contact">Her Gün: 9.00 - 18.00 </Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i class="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>İletişim</h4>
                <Link to="/contact">+90 515 151 15 15</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i class="far fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Adresimiz</h4>
                <Link to="/contact">travigo@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
