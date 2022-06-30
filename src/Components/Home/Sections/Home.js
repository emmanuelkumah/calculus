import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Main from "./Main";

function Home({ children, isMenuClicked }) {
  return (
    <div>
      <div>{children}</div>

      <Hero isMenuClicked={isMenuClicked} />
      <Main isMenuClicked={isMenuClicked} />
      <Footer isMenuClicked={isMenuClicked} />
    </div>
  );
}

export default Home;
