import React from "react";
import "./About.css";
import AboutCard from "./AboutCard";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Bizi <span>Özel Kılan </span> Ne?
            </h1>
            <p>
              Bizi özel kılan, misafirlerimize sağladığımız eşsiz deneyim ve
              detaylara verdiğimiz önemdir. Konforlu ve şık tasarımlı
              alanlarımız, kişiselleştirilmiş hizmet anlayışımız ve unutulmaz
              anılar yaratma tutkumuzla fark yaratıyoruz.
            </p>
            <p>
              Hem iş hem de tatil amaçlı seyahatlerinizde, beklentilerinizin
              ötesine geçerek size kendinizi özel hissettirecek bir deneyim
              sunuyoruz
            </p>
            <button className="secondary-btn">
              Daha Fazla <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="row image">
            <img src="/images/feature-img-1.jpg" alt="" />
            <div className="control-btn">
              <button className="prev">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
