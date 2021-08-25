import React from "react";
import Logo from "../components/Logo";

import style from "../static/css/ForgotPassword.module.css";
import { routes } from "./routes";

const ForgotPasswordPage = ({ history }) => {
  return (
    <section className={style.container}>
      <nav className={style.navBar}>
        <Logo />
        <ul className={style.navItems}>
          <li>
            <input
              type="text"
              placeholder="Email or phone"
              className={style.field}
            />
          </li>
          <li>
            <input
              type="password"
              placeholder="Password"
              className={style.field}
            />
          </li>
          <li>
            <button className={style.primaryButton}>Log In</button>
          </li>
          <li>
            <a className={style.forgotPasswordLink} href="#b">
              Forgotten Password?
            </a>
          </li>
        </ul>
      </nav>
      <div className={style.body}>
        <div className={style.card}>
          <div className={style.cardHeader}>
            <h3>Find Your Account</h3>
          </div>
          <hr className={style.hr} />
          <div className={style.cardBody}>
            <p>
              Please enter your email address or mobile number to search for
              your account.
            </p>
            <input type="text" placeholder="Mobile number" />
          </div>
          <hr className={style.hr} />
          <div className={style.cardFooter}>
            <input
              onClick={() => history.push(routes.welcomePage)}
              type="button"
              value="Cancel"
              className={style.cancelButton}
            />
            <input
              type="button"
              value="Search"
              className={style.searchButton}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
