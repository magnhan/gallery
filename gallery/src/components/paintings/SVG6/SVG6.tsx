import React from "react";
import "./SVG6.css";
import "./../svg.css";
import {togglePlay} from "../../Music";

let audio = new Audio();
audio.src = require("../../../AudioClips/microphone.mp3");

export default function SVG6() {
  return (
    <div className="SVG SVG6">
      <svg className="SVG_picture" onClick={(e) => { togglePlay(audio)}}></svg>
      <p className="text"> Bilde 6</p>
    </div>
  );
}
