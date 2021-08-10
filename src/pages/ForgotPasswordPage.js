import React from "react";
import Logo from "../components/Logo";
import { routes } from "./routes";
import style from "../static/css/ForgotPassword.module.css";

const ForgotPasswordPage = ({history}) => {
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
            ></input>{" "}
          </li>
          <li>
            <input
              type="password"
              placeholder="Password"
              className={style.field}
            ></input>{" "}
          </li>
          <li>
            <button className={style.primaryButton}>Log In</button>
          </li>
          <li>
            <a href="#b" className={style.forgotPasswordLink}>
              Forgotten Account?
            </a>
          </li>
        </ul>
      </nav>
      <div className={style.body}>
        <div className={style.card}>
          <h3>Find your account</h3>
          <hr></hr>
          <p className={style.findText}>
            Please enter your email address or mobile number to search for your
            account
          </p>
          <hr />
          <input type="text" placeholder="mobile number" />
          <hr></hr>
          <div className={style.cardFooter}>
            <input
              type="button"
              value="Cancel"
              className={style.cancelbutton}
              onClick={() => history.push(routes.welcomePage)}
            />
            <input type="button" value="Search" className={style.search} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
