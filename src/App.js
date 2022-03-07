import React from "react";

import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Timeline from "./components/Timeline/Timeline";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Contacts />
      <About />
      <Timeline />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
}

export default App;
