import React, { Component } from "react";
import "./App.css";
import "./index.css";
import "./svgPaintings.css";
import DisplayArt from "./components/DisplayArt";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./components/paintings/SVG1/SVG1.css";
import "./components/paintings/SVG2/SVG2.css";
import "./components/paintings/SVG3/SVG3.css";
import "./components/paintings/SVG4/SVG4.css";
import "./components/paintings/SVG5/SVG5.css";
import "./components/paintings/SVG6/SVG6.css";

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
