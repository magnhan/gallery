import React, { Component } from "react";
import "./App.css";
import "./index.css";
import DisplayArt from "./components/DisplayArt";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <Menu />
        <DisplayArt />
        <Footer />
      </div>
    );
  }
}

export default App;
