import React, { Component } from "react";
import "./App.css";
import "./index.css";
import DisplayArt from "./components/DisplayArt";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
      <div className="Header">Header</div>
      <div className="Menu">Menu</div>
      <DisplayArt/>
      <div className="Footer">Footer</div>
    </div>
    )
  }
}

export default App;
