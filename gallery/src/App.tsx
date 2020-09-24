import React, { Component } from "react";
import "./App.css";
import "./index.css";
import DisplayArt from "./components/DisplayArt";

export default function App() {
  return (
    <div className="grid-container">
      <Header />
      <Menu />
      <DisplayArt />
      <Footer />|
    </div>
  );
}
