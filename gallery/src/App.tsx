import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Transition from "./components/Transition";

class App extends Component {
  render() {
    return <div className="App"></div>;
    <Switch>
      <Route exact path="components/Transition" component={Transition}></Route>
    </Switch>;
  }
}

export default App;
