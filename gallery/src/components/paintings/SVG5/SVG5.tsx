import React from "react";
import "./SVG5.css";
import "./../svg.css";
import {togglePlay} from "../../Music";

let audio = new Audio();
audio.src = require("../../../AudioClips/trombone.mp3");

export default function SVG5() {
  return (
    <div className="SVG SVG5">
      <svg className="SVG_picture" onClick={(e) => { togglePlay(audio)}}></svg>
      <p className="text"> Bilde 5</p>
    </div>
  );
}
