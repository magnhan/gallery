import React from "react";
import "./SVG3.css";
import "./../svg.css";
import {togglePlay} from "../../Music";

let audio = new Audio();
audio.src = require("../../../AudioClips/drums.mp3");

export default function SVG3(props: any) {
  return (
    <div className="SVG SVG3">
      <svg className="SVG_picture" onClick={(e) => { togglePlay(audio)}}>
        <path 
          id="drum-base"
          d="M223.069,284L222,451.935S239.348,499.043,459.4,499,700,448.726,700,448.726V286.139s-44.27,48.981-240.6,48.135S223.069,284,223.069,284Z"
        />
        <path
          id="drum-top-bottom"
          d="M225,418.459s-11.366,7.3-10.575,27.476,0,29.59,0,29.59,16.177,62.859,238.99,59.18S702.288,488.23,705.1,479.752s2.57-40.5,0-48.612-7.4-11.624-7.4-11.624l-1.058,26.419S672.989,498.146,448.128,495.6,225,449.106,225,449.106V418.459ZM705.1,273.68s-6.3,61.77-229.473,61.293-260.1-47.2-261.2-69.747-10.9-58.135,61.334-73.975,148.583-24.908,215.726-22.192S648.632,187.8,669.141,198.648,718.743,217.773,705.1,273.68Z"
        />
        <path
          id="stick-1"
          d="M276.729,305.247s-6.964,10.75,27.526,10.994,216.752-4.4,216.752-4.4,23.94,20.839,44.546-4.49c0.959-12.134-21.282-28.028-45.759-7.851-27.139-1.7-217.371-6.494-228.4-4.344S278.172,299.854,276.729,305.247Z"
        />
        <path 
          id="stick-2"
          d="M276.729,305.247s-6.964,10.75,27.526,10.994,216.752-4.4,216.752-4.4,23.94,20.839,44.546-4.49c0.959-12.134-21.282-28.028-45.759-7.851-27.139-1.7-217.371-6.494-228.4-4.344S278.172,299.854,276.729,305.247Z"
        />
      </svg>
    </div>
  );
}
