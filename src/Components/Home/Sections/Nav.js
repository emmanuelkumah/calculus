import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdOutlineFastfood, MdOutlineScience } from "react-icons/md";
import { GiLifeBar, GiMedicalPackAlt } from "react-icons/gi";
import classes from "./Nav.module.css";

function Nav({ isMenuClicked, setIsMenuClicked }) {
  const handleSideNavOpen = () => {
    setIsMenuClicked(false);
  };
  return (
    <div>
      <nav
        className={`${classes.sideNav} ${isMenuClicked && classes.sideNavOpen}`}
      >
        <AiOutlineCloseSquare
          className={classes["close__menu"]}
          onClick={handleSideNavOpen}
        />
        <ul>
          <li>
            <GiLifeBar className={classes.navIcon} />
            Daily Life
          </li>
          <li>
            <FaMoneyBillAlt className={classes.navIcon} />
            Finance
          </li>
          <li>
            <MdOutlineFastfood className={classes.navIcon} />
            Food
          </li>
          <li>
            <MdOutlineScience className={classes.navIcon} />
            Science
          </li>
          <li>
            <GiMedicalPackAlt className={classes.navIcon} />
            Health
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
