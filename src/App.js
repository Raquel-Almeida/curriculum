import React from "react";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Portfolio/>
      <Contacts/>
    </React.Fragment>
  );
}

export default App;
