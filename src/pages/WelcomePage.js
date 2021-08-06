import React from "react";
import style from "../static/css/WelcomePage.module.css";
import logo from "../static/img/logo.svg";

const WelcomePage = () => {
  return (
    <section className={style.container}>
      <div className={style.leftSection}>
        <div>
          <img src={logo} alt="Facebook Logo" className={style.logo}></img>
          <p className={style.welcomeText}>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
      </div>
      <div className={style.rightSection}>
        <div className={style.rightSectionContainer}>
          <form method="post" action="" className={style.form}>
            <input
              type="text"
              name="email"
              placeholder="Email, Username or phone"
              className={style.field}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={style.field}
            ></input>
            <button type="submit" name="Submit" className={style.primaryButton}>
              Login
            </button>
            <a href="#b" className={style.forgotPasswordLink}>
              Forgotten Password
            </a>
            <hr className={style.hr}></hr>
            <button className={style.secondaryButton}>
              Create New Account
            </button>
          </form>
          <div className = {style.createPageLink}>
          <a href = '#b'> Create a Page </a> for a celebrity, band or business.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
