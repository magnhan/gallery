import React from "react";
import "./SVG6.css";
import "./../svg.css";
import { togglePlay } from "../../Music";

let audio = new Audio();
audio.src = require("../../AudioClips/maracas.mp3");

export default function SVG6() {
  return (
    <div>
      <svg
        className="SVG_picture"
        viewBox=" -40 -40 300 310"
        onClick={(e) => {
          togglePlay(audio);
        }}
      >
        <path
          id="marakas_left"
          d="M73.015,266.02s-50.359,70.942-39.533,93.673,38.126-12.649,48.181-32.046,60.549-119.442,72.889-129.417,76.05-56.863,85.242-77.651,30.361-89.357-12.354-108.464-91.695,31.178-101.3,73.953-1.777,91.065-24.708,130.65S73.015,266.02,73.015,266.02Z"
        />
        <path
          id="marakas_right"
          d="M73.015,266.02s-50.359,70.942-39.533,93.673,38.126-12.649,48.181-32.046,60.549-119.442,72.889-129.417,76.05-56.863,85.242-77.651,30.361-89.357-12.354-108.464-91.695,31.178-101.3,73.953-1.777,91.065-24.708,130.65S73.015,266.02,73.015,266.02Z"
        />
      </svg>
    </div>
  );
}
