import React from "react";
import classes from "./Counter.module.css";
import { AiFillCalculator } from "react-icons/ai";
import { MdQueryStats } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";

function Counter() {
  return (
    <div className={classes["counter__container"]}>
      <section className={classes["counter__app"]}>
        <div className={classes.count}>
          <AiFillCalculator className={classes["counter__icon"]} />
          <h3>20</h3>
          <p>Calculator</p>
        </div>
        <div className={classes.count}>
          <MdQueryStats className={classes["counter__icon"]} />
          <h3>3000</h3>
          <p>Montly Usage</p>
        </div>
        <div className={classes.count}>
          <ImStatsDots className={classes["counter__icon"]} />
          <h3>43299</h3>
          <p>Calculation</p>
        </div>
      </section>
    </div>
  );
}

export default Counter;
