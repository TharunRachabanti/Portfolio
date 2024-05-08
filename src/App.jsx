import React from "react";
import './App.css'
import Firstcontainer from "./containers/firstcontainer";
import Secondcontainer from "./containers/secondcontainer";
import Navbar from "./containers/navbar";



function App() {
   return (
    <React.Fragment>
      <Navbar />
    <Firstcontainer />
    <Secondcontainer />
    </React.Fragment>
  )
}

export default App
