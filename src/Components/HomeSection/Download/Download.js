import React from "react";
import "./download.css";

const Download = () => {
  return (
    <>
      <section className="download top">
        <div className="container flex_space">
          <div className="row">
            <h3>Mobil Uygulamamız Hizmetinizde!</h3>
            <h1>Fırsatları Takip Edebilmek İçin Hemen Uygulamamızı İndirin</h1>
            <ul>
              <li>&#10003; Çevrenizdeki en uygun otellerin bulun</li>
              <li>&#10003; Anında onay alın</li>
              <li>
                &#10003; İstediğiniz zaman, istediğiniz yerde değişiklik yapın
              </li>
              <li>&#10003; 40'tan fazla dilde 7/24 müşteri hizmetleri</li>
              <li>&#10003; Rezervasyon veya kredi kartı ücreti yok</li>
              <li>&#10003; Kendi yorumlarınızı ve fotoğraflarınızı ekleyin</li>
            </ul>
            <div className="img flex">
              <img src="/images/appstore-button.png" alt="" />
              <img src="/images/google-play-button.png" alt="" />
            </div>
          </div>
          <div className="row row2">
            <img src="/images/app-image-1.png" alt="" className="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
