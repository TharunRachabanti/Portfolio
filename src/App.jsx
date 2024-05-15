import React from "react";
import './App.css'
import Firstcontainer from "./containers/firstcontainer";
import Secondcontainer from "./containers/secondcontainer";
import Navbar from "./containers/navbar";
import Projects from "./containers/projects";
import Aboutme from "./containers/aboutme";




function App() {
   return (
    <React.Fragment>
      <Navbar />
      <Firstcontainer />
    
      <Projects />
      <Aboutme />
      
    <Firstcontainer />
    <Secondcontainer />
    </React.Fragment>
  )
}

export default App
