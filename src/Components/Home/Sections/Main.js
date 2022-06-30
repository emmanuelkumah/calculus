import React, { useRef, useEffect } from "react";
import bannerImg from "../../../images/human1.png";
import classes from "./Main.module.css";
import { MdSportsBaseball, MdOutlineFastfood, MdMoney } from "react-icons/md";
import { GiPillDrop } from "react-icons/gi";
import Counter from "./Counter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Main({ isMenuClicked }) {
  const detailsRef = useRef(null);
  const counterRef = useRef(null);
  const foodRef = useRef(null);
  const moneyRef = useRef(null);
  const healthRef = useRef(null);
  const sportsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      detailsRef.current,
      { autoAlpha: 0 },
      {
        duration: 2,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          id: "details",
          trigger: detailsRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      [healthRef.current, foodRef.current, sportsRef.current, moneyRef.current],
      { y: 0 },
      { duration: 5, y: -20, ease: "bounce" }
    );
    gsap.fromTo(
      counterRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "bounce",
        scrollTrigger: {
          id: "details",
          trigger: counterRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div>
      <main>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={classes["main__svg"]}
        >
          <path
            fill="#721121"
            fill-opacity="1"
            d="M0,160L48,165.3C96,171,192,181,288,181.3C384,181,480,171,576,186.7C672,203,768,245,864,250.7C960,256,1056,224,1152,192C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <section
          className={`${classes["main__sec"]} ${
            isMenuClicked && classes["main__shift"]
          }`}
          ref={detailsRef}
        >
          <div className={classes["main__row"]}>
            <div className={classes["main__col"]}>
              <div className={classes["main__caption"]}>
                <img src={bannerImg} alt="banner" />
                <h2>Developed to help you do the maths, quickly!</h2>
                <p>
                  Calculus sole focus is to provide fast, comprehensive,
                  convenient, free online calculators in a plethora of areas.
                </p>
              </div>
            </div>
            <div className={classes["main__col"]}>
              <section className={classes["main__content_row"]}>
                <div className={classes["main__content_col"]}>
                  <article>
                    <h2 ref={sportsRef}>
                      <MdSportsBaseball
                        className={classes["main__content_icon"]}
                      />
                      Sports Calculator
                    </h2>
                    <p>
                      With our sports calculators, we will help you a become
                      better and more aware athlete. Check it out and make sure
                      to look out for new tools that we keep posting here!
                    </p>
                  </article>
                  <article>
                    <h2 ref={healthRef}>
                      {" "}
                      <GiPillDrop className={classes["main__content_icon"]} />
                      Health Calculator
                    </h2>
                    <p>
                      Whether you are a doctor, a medical student or a patient,
                      you will find answers to your medical questions here, as
                      well as receive a lot of scientifically proven
                      information.
                    </p>
                  </article>
                </div>
                <div className={classes["main__content_col"]}>
                  <article>
                    <h2 ref={foodRef}>
                      <MdOutlineFastfood
                        className={classes["main__content_icon"]}
                      />
                      Food Calculator
                    </h2>
                    <p>
                      Awesome calculators for food lovers, party organizers or
                      calorie counting addicts, what perfectly reflects the
                      complexity of feelings we have for the subject.
                    </p>
                  </article>
                  <article>
                    <h2 ref={moneyRef}>
                      <MdMoney className={classes["main__content_icon"]} />
                      Finance Calculator
                    </h2>
                    <p>
                      Determine the monthly payment on a loan, interest rate
                      etc, you will find answers to your finance questions here,
                      as well as receive a lot of scientifically proven
                      information.
                    </p>
                  </article>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section ref={counterRef}>
          <Counter isMenuClicked={isMenuClicked} />
        </section>
      </main>
    </div>
  );
}

export default Main;
