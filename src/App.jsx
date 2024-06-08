import React from "react";
import './App.css'
import Firstcontainer from "./containers/firstcontainer";
import Secondcontainer from "./containers/secondcontainer";
import Navbar from "./containers/navbar";
import Projects from "./containers/projects";
import Aboutme from "./containers/aboutme";
import LastContainer from "./containers/lastcontainer";
 



function App() {
   return (
    <React.Fragment>
      <Navbar />
      <Firstcontainer />
    
      <Projects />
      <Aboutme />
      
    
    <Secondcontainer />
    <LastContainer/>
    </React.Fragment>
  )
}

export default App
