import React, { useState } from "react";
import "./Contact.css";

const ContactFrom = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [allValue, setAllValue] = useState([]);
  const formSubmit = (e) => {
    e.preventDefault();

    const newValue = { fname, lname, phone, email, subject, company, message };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setSubject("");
    setCompany("");
    setMessage("");
  };
  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>İletişim Formu</h2>
            <p>Aşağıdaki formu doldurun, size en kısa sürede geri döneceğiz.</p>

            <form onSubmit={formSubmit}>
              <div className="grid1">
                <div className="input">
                  <span>
                    Adınız <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <span>
                    Soyadınız <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <span>
                    Telefon <label>*</label>
                  </span>
                  <input
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>
                    E-mail <label>*</label>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input">
                  <span>Konu</span>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>Şirket Adı</span>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
              <div className="input inputlast">
                <span>
                  Lütfen mesajınızı yazınız <label>*</label>
                </span>
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="primary-btn">Gönder</button>
            </form>
          </div>

          <div className="side-content">
            <h3>Ofisimizi Ziyaret Edin</h3>
            <p>Kadıköy / İstanbul</p>
            <br />

            <h3>Bize mesaj gönderin</h3>
            <span>travigo@gmail.com</span>
            <br />
            <span>+90 515 151 15 15</span>
            <br />

            <div className="icon">
              <h3>Bizi Takip Edin</h3>

              <div className="flex_space">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="show-data">
        {allValue.map((cureentValue) => {
          const { fname, lname, phone, email, subject, company, message } =
            cureentValue;
          return (
            <>
              <div className="sign-box">
                <h1>Mesajınız Başarıyle İletildi</h1>
                <h3>
                  Adınız : <p>{fname}</p>
                </h3>
                <h3>
                  Soyadınız : <p>{lname}</p>
                </h3>
                <h3>
                  İletişim : <p>{phone}</p>
                </h3>
                <h3>
                  E-mail : <p>{email}</p>
                </h3>
                <h3>
                  Konu : <p>{subject}</p>
                </h3>
                <h3>
                  Şirket Adı : <p>{company}</p>
                </h3>
                <h3>
                  Mesajınız : <p>{message}</p>
                </h3>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ContactFrom;
