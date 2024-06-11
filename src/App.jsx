import React from "react";
import './App.css';
import FirstContainer from "./containers/firstcontainer";
import SecondContainer from "./containers/secondcontainer";
import Navbar from "./containers/navbar";
import Projects from "./containers/projects";
import Aboutme from "./containers/aboutme";
import LastContainer from "./containers/lastcontainer";

function App() {
   return (
    <React.Fragment>
      <div id="home">
      <Navbar />
      </div>
      <div id="services">
        <FirstContainer />
      </div>
      <div id="portfolio">
        <Projects />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <SecondContainer />
      <div id="contactme">
        <LastContainer />
      </div>
      





     
      
     
      
    </React.Fragment>
  );
}

export default App;
