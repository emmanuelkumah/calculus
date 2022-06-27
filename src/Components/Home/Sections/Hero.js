import React from "react";
import classes from "./Hero.module.css";

function Hero({ isMenuClicked }) {
  return (
    <div
      className={`${classes["hero__container"]} ${
        isMenuClicked && classes["hero__shift"]
      }`}
    >
      <section className={classes["hero__col"]}>
        <h2>Hero Section</h2>
      </section>
      <section className={classes["hero__col"]}>
        <h2>Section 3</h2>
      </section>
    </div>
  );
}

export default Hero;
