import React, { Component } from "react";
import "./App.css";
import "./index.css";
import DisplayArt from "./components/DisplayArt";



class App extends Component {


  
  // let random_index: number = Math.floor(Math.random() * (this.state.poetryDB.length - 1));

  render() {
    return (
      <div className="App">
        <div className="Welcome-page">
        </div>

        <div className="grid-container">
          <div className="Header">Header</div>
          <div className="Menu">Menu</div>
          <DisplayArt/>
          <div className="Footer">Footer</div>
        </div>
      </div>
    )
  }
}

export default App;
