import React from "react";
import classes from "./Footer.module.css";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

function Footer({ isMenuClicked }) {
  return (
    <>
      <footer
        className={`${classes["footer__container"]} ${
          isMenuClicked && classes["footer__shift"]
        }`}
      >
        <section className={classes["footer__section"]}>
          <h4>Calculus</h4>
          <p>All rights reserved</p>
        </section>
        <div className={classes["footer__icons"]}>
          <FiFacebook />
          <FiGithub />
          <FiLinkedin />
        </div>
      </footer>
    </>
  );
}

export default Footer;
