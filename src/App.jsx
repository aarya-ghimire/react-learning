import React from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Destinations from "./Destinations.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Destinations />
      <About />
      <Footer />
    </div>
  );
};

export default App;
