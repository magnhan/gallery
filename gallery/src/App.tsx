import React, { Component } from "react";
import "./App.css";
import "./index.css";
import "./svgPaintings.css";
import DisplayArt from "./components/DisplayArt";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./components/paintings/SVG1/SVG1.css";

export default function App() {
  return (
    <div className="grid-container">
      <Header />
      <Menu />
      <DisplayArt />
      <Footer />
    </div>
  );
}
