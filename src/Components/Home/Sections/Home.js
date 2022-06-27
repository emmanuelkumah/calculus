import React from "react";
import Hero from "./Hero";

function Home({ children, isMenuClicked }) {
  return (
    <div>
      <div>{children}</div>

      <Hero isMenuClicked={isMenuClicked} />
    </div>
  );
}

export default Home;
