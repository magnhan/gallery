import React from "react";
import SVG1 from "./paintings/SVG1/SVG1";
import SVG2 from "./paintings/SVG2/SVG2";
import SVG3 from "./paintings/SVG3/SVG3";
import SVG4 from "./paintings/SVG4/SVG4";
import SVG5 from "./paintings/SVG5/SVG5";
import SVG6 from "./paintings/SVG6/SVG6";
import "./display-art.css";

export default function DisplayArt() {
  return (
    <div className="DisplayArt">
      <SVG1 />
      <SVG2 />
      <SVG3 />
      <SVG4 />
      <SVG5 />
      <SVG6 />
    </div>
  );
}
