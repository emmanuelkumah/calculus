import React from "react";
import Hero from "./Hero";
import Main from "./Main";

function Home({ children, isMenuClicked }) {
  return (
    <div>
      <div>{children}</div>

      <Hero isMenuClicked={isMenuClicked} />
      <Main />
    </div>
  );
}

export default Home;
