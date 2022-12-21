import React from "react";

// import ContactUs from "./components/ContactUs";
// import Portfolio from "./components/portfolio";
import LandingPage from "./components/LandingPage";

// import MinimalistRoom from "./components/MinimalistRoom";
import OurTeams from "./components/OurTeams";
import ContactUs from "./components/ContactUs"
import Portfolio from "./components/portfolio";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";


import About from "./components/About";
import Services from "./components/Services";

function App() {
	return (
		<div className="App">
			{/* <ContactUs /> */}
			{/* <Portfolio /> */}

			<LandingPage />
		</div>
	);


  <Header />
      <ContactUs />
      <Portfolio />
  <Hero />

      <About />
      <Services />
      {/* <MinimalistRoom /> */}
      <OurTeams />
    </div>
  );

}

export default App;

