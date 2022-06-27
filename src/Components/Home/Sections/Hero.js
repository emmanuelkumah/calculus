import React, { useRef, useEffect } from "react";
import classes from "./Hero.module.css";
import heroImg from "../../../../src/images/hero.png";
import bulbIcon from "../../../images/bulbIcon.png";
import { gsap } from "gsap";

function Hero({ isMenuClicked }) {
  const heroTitleRef = useRef(null);

  useEffect(() => {
    gsap.from(heroTitleRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      delay: 2,
    });
  }, []);

  return (
    <div
      className={`${classes["hero__container"]} ${
        isMenuClicked && classes["hero__shift"]
      }`}
    >
      <section className={classes["hero__col"]}>
        <div className={classes["hero__desc"]}>
          <h2 ref={heroTitleRef}>We give you the super power</h2>
          <p>
            Solve everyday problems from finance, sports and health with ease{" "}
          </p>
          <span className={classes["hero__subDesc"]}>
            It will take you only few seconds
          </span>
          <div>
            <button className={classes["hero__btn"]}>Try it now</button>
          </div>
        </div>
      </section>
      <section className={classes["hero__col"]}>
        <div className={classes["hero__icons"]}>
          <img
            src={bulbIcon}
            alt={bulbIcon}
            className={classes["hero__bulbIcon1"]}
          />
          <img
            src={bulbIcon}
            alt={bulbIcon}
            className={classes["hero__bulbIcon2"]}
          />
          <img
            src={bulbIcon}
            alt={bulbIcon}
            className={classes["hero__bulbIcon3"]}
          />
        </div>
        <img src={heroImg} alt="calcImg" className={classes["hero__img"]} />
      </section>
    </div>
  );
}

export default Hero;
