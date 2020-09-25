import React from "react";
import "./App.css";
import "./index.css";
import { Route, HashRouter } from "react-router-dom";
import DisplayArt from "./components/DisplayArt";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Theme1 from "./components/Theme1";
import Theme2 from "./components/Theme2";
import Theme3 from "./components/Theme3";

export default function App() {
  return (
    <HashRouter>
      <div className="grid-container">
        <Header />
        <Menu />
        <div className="contentDiplayed">
          <Route exact path="/" component={DisplayArt} />
          <Route path="/Theme1" component={Theme1} />
          <Route path="/Theme2" component={Theme2} />
          <Route path="/Theme3" component={Theme3} />
        </div>
        <Footer />|
      </div>
    </HashRouter>
  );
}
