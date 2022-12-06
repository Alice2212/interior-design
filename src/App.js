
import React from "react";
import ContactUs from "./components/ContactUs"
import Portfolio from "./components/portfolio";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";



function App() {
  return (
    <div className="App">

      <ContactUs />
      <Portfolio />
  <Header />
  <Hero />
      <About />
      <Services />
   
    </div>
  );
}

export default App;

