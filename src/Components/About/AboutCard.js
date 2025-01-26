import React from "react";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>Hakkımızda</h4>
          <h1>
            Size<span> Daha İyi Hizmet</span> sağlamak için çalışıyoruz
          </h1>
          <p>
            Başarınızın bizim için ne kadar önemli olduğunu biliyoruz. Bu
            nedenle, sadece konforlu konaklama sunmakla kalmıyor, iş
            hedeflerinize ulaşmanız için özel çözümler de sağlıyoruz.
          </p>
          <p>
            İster bir şirket toplantısı, ister bir konferans ya da ekip
            etkinliği planlayın, modern olanaklarımız ve profesyonel
            hizmetlerimizle iş süreçlerinizi bir üst seviyeye taşıyoruz
          </p>
          <button className="secondary-btn">
            Daha Fazla <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="row image">
          <img src="/images/about-img-1.jpg" alt="" />
          <div className="control-btn">
            <button className="prev">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
