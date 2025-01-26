import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import "./design.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [recValue, setRecValue] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newValue = { email: email, password: password };

    setRecValue([...recValue, newValue]);
    console.log(newValue);

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <HeadTitle />
      <section className="forms top">
        <div className="container">
          <div className="sign-box">
            <p>
              Hesabınıza giriş yapmak ve web sitemizin avantajlarından
              yararlanmak için e-posta adresinizi ve şifrenizi aşağıya girin.
            </p>
            <form action="" onSubmit={submitForm}>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
              />

              <div className="flex_space">
                <div className="flex">
                  <input type="checkbox" />
                  <label>Beni Hatırla</label>
                </div>
                <div className="flex">
                  <span>Şifremi Unuttum</span>
                </div>
              </div>

              <button type="submit" className="primary-btn">
                Giriş Yap
              </button>
              <p>
                Hesabınız Yok Mu? <Link to="/register">Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="show-data">
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className="sign-box">
                <h1>Giriş Başarılı!</h1>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Login;
