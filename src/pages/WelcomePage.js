import React, { useState } from "react";

import Modal from "../components/Modal";
import style from "../static/css/WelcomePage.module.css";
import logo from "../static/img/logo.svg";
import questionMark from "../static/img/q.svg";
import { routes } from "./routes";
import utils from "../utils/date";

const WelcomePage = ({ history }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
              placeholder="Email address or phone number"
              className={style.field}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              field
              field
              className={style.field}
            ></input>
            <button type="submit" name="Submit" className={style.primaryButton}>
              Login
            </button>
            <a
              href="#b"
              onClick={() => history.push(routes.forgotPasswordPage)}
              className={style.forgotPasswordLink}
            >
              Forgotten Password
            </a>
            <hr className={style.hr}></hr>
            <input
              value=" Create New Account"
              type="button"
              className={style.secondaryButton}
              onClick={() => setModalVisible(true)}
            />
          </form>
          <div className={style.createPageLink}>
            <a href="#b"> Create a Page </a> for a celebrity, band or business.
          </div>
        </div>
      </div>
      {/* Modal Starts here */}
      <Modal
        title="Sign Up"
        subtitle="It's quick and easy."
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <div className={style.modalContainer}>
          <div className={style.person}>
            <input
              type="text"
              placeholder="First name"
              className={style.modalField}
            />
            <input
              type="text"
              placeholder="Surname"
              className={style.modalField}
            />
          </div>
          <input
            type="text"
            placeholder="Surname"
            className={style.credsField}
          />
          <input
            type="text"
            placeholder="Surname"
            className={style.credsField}
          />

          <div className={style.bioData}>
            <label>
              Date of birth
              <img src={questionMark} className={style.questionMark} />
            </label>
            <div className={style.dob}>
              <select className={style.selectField}>
                <option selected disabled>
                  Day
                </option>
                {utils.getSequence(1, 31).map((day) => (
                  <option>{day}</option>
                ))}
              </select>
              <select className={style.selectField}>
                <option selected disabled>
                  Month
                </option>
                {utils.getMonths().map((month) => (
                  <option value={month}>{month}</option>
                ))}
              </select>
              <select className={style.selectField}>
                <option selected disabled>
                  Year
                </option>
                {utils
                  .getSequence(1905, 2021)
                  .reverse()
                  .map((year) => (
                    <option value={year}>{year}</option>
                  ))}
              </select>
            </div>
            <label>
              Gender
              <img src={questionMark} className={style.questionMark} />
            </label>
            <div className={style.dob}>
              <button className={style.genderButton}>
                <label>Female</label>
                <input type="radio" name="gender" value="Female" />
              </button>
              <button className={style.genderButton}>
                <label>Male</label>
                <input type="radio" name="gender" value="Male" />
              </button>
              <button className={style.genderButton}>
                <label>Custom</label>
                <input type="radio" name="gender" value="Custom" />
              </button>
            </div>
            <p className={style.terms}>
              By clicking Sign Up, you agree to our <a href="#f">Terms</a>, <a href="#d">Date Policy</a> and
              <a href="#c"> Cookie Policy</a>. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
            <button className={style.signUpButton}>
              Sign Up
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default WelcomePage;
