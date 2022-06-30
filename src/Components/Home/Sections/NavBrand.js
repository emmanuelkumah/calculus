import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./NavBrand.module.css";
import { AiOutlineCalculator } from "react-icons/ai";

function NavBrand({ setIsMenuClicked }) {
  const handleMenuClicked = () => {
    setIsMenuClicked(true);
  };
  return (
    <div className={classes["nav__brand"]}>
      <AiOutlineMenu
        className={classes["menu__icon"]}
        onClick={handleMenuClicked}
      />
      <h1>
        <AiOutlineCalculator className={classes["nav__logo"]} />
        Calculus
      </h1>
    </div>
  );
}

export default NavBrand;
