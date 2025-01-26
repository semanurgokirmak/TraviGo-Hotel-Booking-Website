import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid">
          <div className="box">
            <h2>Hakkımızda</h2>
            <p>
              1990 yılından beri özveriyle siz değerli müşterilerimize hizmet
              etmekten mutluluk duyuyoruz.
            </p>
            <br />
            <p>
              Yıllardır aynı kalitede hizmet sağlayarak çizgimizden hiç
              şaşmamamızın sebebi sizin geri dönüşlerinizin bize sağladığı
              motivasyondan kaynaklanmaktadır.
            </p>
            <div className="icon flex_space">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          <div className="box">
            <h2>NAVİGASYON</h2>
            <ul>
              <li>
                <Link to="/">Anasayfa</Link>
              </li>
              <li>
                <Link to="/about">Hakkımızda</Link>
              </li>
              <li>
                <Link to="/gallery">Galeri</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">İletişim</Link>
              </li>
            </ul>
          </div>

          <div className="box post">
            <h2>SON YAYINLANANLAR</h2>
            <ul>
              <li>
                <p>Okyanus sahillerinde deniz kum güneş...</p>
                <label className="fa fa-calendar-alt"></label>
                <span>10 Ocak 2025</span>
              </li>
              <li>
                <p>Sizin için en uygun oteli birlikte seçelim...</p>
                <label className="fa fa-calendar-alt"></label>
                <span>21 Ekim 2024</span>
              </li>
              <li>
                <p>Yaz tatilinin tadı tabii ki yine bizimle...</p>
                <label className="fa fa-calendar-alt"></label>
                <span>09 Temmuz 2024</span>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>HABER BÜLTENİ</h2>
            <p>
              Güncel bildirimlerimizi takip etmek için haber bültenimize abona
              olabilirsiniz
            </p>

            <input type="text" name="" id="" />
            <input type="text" className="primary-btn" value="ABONE OL" />
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>© 2025 Tüm Hakları Saklıdır.</p>
      </div>
    </>
  );
};

export default Footer;
