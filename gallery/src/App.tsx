import React, { Component } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import DisplayArt from "./components/DisplayArt";
import Footer from "./components/Footer";

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
