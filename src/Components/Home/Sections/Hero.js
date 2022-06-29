import React, { useRef, useEffect } from "react";
import classes from "./Hero.module.css";
import heroImg from "../../../../src/images/hero.png";
import { FcIdea } from "react-icons/fc";
import { gsap } from "gsap";

function Hero({ isMenuClicked }) {
  const heroTitleRef = useRef(null);
  const subHeadingRef = useRef(null);
  const subTitleRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [
        heroTitleRef.current,
        subHeadingRef.current,
        subTitleRef.current,
        btnRef.current,
      ],
      { opacity: 0, y: -20 },
      { opacity: 1, duration: 1, y: 20, stagger: 2.5, delay: 1 }
    );
    gsap.fromTo(
      imgRef.current,
      {
        x: -100,
      },
      {
        duration: 1,
        x: 100,
        stagger: 1,
        delay: 10,
      }
    );
    gsap.fromTo(
      icon1Ref.current,
      { y: 18, opacity: 0 },
      { duration: 1, y: -18, repeat: -1, yoyo: true, opacity: 1, delay: 12 }
    );
    gsap.fromTo(
      icon2Ref.current,
      { y: -18, opacity: 0 },
      { duration: 1, y: 18, repeat: -1, yoyo: true, opacity: 1, delay: 12 }
    );
  }, []);

  const handleMouseEnter = () => {
    btnRef.current.style.backgroundColor = "#FFCB77";

    gsap.fromTo(
      btnRef.current,
      { y: 20 },
      { duration: 1, y: -20, repeat: -1, yoyo: true }
    );
  };

  return (
    <div
      className={`${classes["hero__container"]} ${
        isMenuClicked && classes["hero__shift"]
      }`}
    >
      <section className={classes["hero__col"]}>
        <div className={classes["hero__desc"]}>
          <h2 ref={heroTitleRef} className={classes["hero__title"]}>
            We give you the super power
          </h2>
          <p ref={subHeadingRef}>
            Solve everyday problems from finance, sports and health with ease{" "}
          </p>
          <p ref={subTitleRef} className={classes["hero__subDesc"]}>
            It will take you only few seconds
          </p>
          <div>
            <button
              ref={btnRef}
              className={classes["hero__btn"]}
              onMouseEnter={handleMouseEnter}
            >
              Try it now
            </button>
          </div>
        </div>
      </section>
      <section className={classes["hero__col"]}>
        <div className={classes["hero__icons"]}>
          <div ref={icon1Ref}>
            <FcIdea />
          </div>
          <div ref={icon2Ref}>
            <FcIdea />
          </div>
        </div>
        <img
          ref={imgRef}
          src={heroImg}
          alt="calcImg"
          className={classes["hero__img"]}
        />
      </section>
    </div>
  );
}

export default Hero;
