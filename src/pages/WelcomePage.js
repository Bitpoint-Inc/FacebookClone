import React from "react";

import style from "../static/css/Welcome.module.css";
import logo from "../static/img/logo.svg";
import { routes } from "./routes";

const WelcomePage = ({ history }) => {
  return (
    <section className={style.container}>
      <div className={style.leftSection}>
        <div>
          <img src={logo} className={style.logo} alt="facebook logo" />
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
              placeholder="Email address or phone number"
              className={style.field}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={style.field}
            />
            <button type="submit" name="submit" className={style.primaryButton}>
              Log In
            </button>
            <a
              href="#b"
              onClick={() => history.push(routes.forgotPasswordPage)}
              className={style.forgotPasswordLink}
            >
              Forgotten password?
            </a>
            <hr className={style.hr} />
            <button className={style.secondaryButton}>
              Create New Account
            </button>
          </form>
          <div className={style.createPageLink}>
            <a href="#b">Create a Page</a> for a celebrity, band or business.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
