import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./NavBrand.module.css";

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
      <h1>Calculus</h1>
    </div>
  );
}

export default NavBrand;
