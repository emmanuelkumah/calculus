import { useState } from "react";
import Home from "./Components/Home/Sections/Home";
import classes from "./App.module.css";
import NavBrand from "./Components/Home/Sections/NavBrand";
import Nav from "./Components/Home/Sections/Nav";

function App() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      <div className={classes["hero__container"]}>
        <NavBrand setIsMenuClicked={setIsMenuClicked} />
        <Home isMenuClicked={isMenuClicked}>
          <Nav
            isMenuClicked={isMenuClicked}
            setIsMenuClicked={setIsMenuClicked}
          />
        </Home>
      </div>
    </>
  );
}

export default App;
