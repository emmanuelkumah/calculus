import React from "react";
import classes from "./Counter.module.css";
import { AiFillCalculator } from "react-icons/ai";
import { MdQueryStats } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import CountUp from "react-countup";

function Counter({ isMenuClicked }) {
  return (
    <div
      className={`${classes["counter__container"]} ${
        isMenuClicked && classes["counter__shift"]
      }`}
    >
      <section className={classes["counter__app"]}>
        <div className={classes.count}>
          <AiFillCalculator className={classes["counter__icon"]} />
          <h3>
            <CountUp start={0} end={20} duration={5} />
          </h3>
          <p>Calculator</p>
        </div>
        <div className={classes.count}>
          <MdQueryStats className={classes["counter__icon"]} />
          <h3>
            <CountUp start={0} end={2320} duration={5} />
          </h3>
          <p>Monthly Usage</p>
        </div>
        <div className={classes.count}>
          <ImStatsDots className={classes["counter__icon"]} />
          <h3>
            <CountUp start={500} end={3234} duration={5} />
          </h3>
          <p>Calculation</p>
        </div>
      </section>
    </div>
  );
}

export default Counter;
