import React from "react";
import "./SVG4.css";
import "./../svg.css";
import {togglePlay} from "../../Music";

let audio = new Audio();
audio.src = require("../../../AudioClips/microphone.mp3");

export default function SVG4(props: any) {
  return (
    <div className="SVG SVG4">
      <svg className="SVG_picture" onClick={(e) => { togglePlay(audio)}}>
        <path
          id="microphone"
          d="M125.21,291s36.4-24.694,23.007-28.266-58.836-12.3-16.733-42.921c-2.154-7.4-3.7-16.4,72.16-93.172C202.889,110.06,212.332,89.495,239.2,90s33.627,41.241,19.871,52.344-20.13,11.057-28.237,10.468c-6.275,6.745-60.656,55.485-60.656,55.485-22.892,17.416-26.6,19.388-35.557,14.656-5.6,2.906-27.178,20.411-11.5,26.172s40.449,9.182,29.282,21.984S125.21,291,125.21,291Z"
        />
        <path
          id="fourthnote"
          d="M169.918,199.607s-15.264,2.436-13.812,13.635,14.768,10.288,19.855,5.114,4.316-5.966,4.316-5.966V151.881l-1.727-5.114v57.1S175.756,198.8,169.918,199.607Z"
        />
        <path
          id="eightnote"
          d="M170.178,198.778S154.6,201.3,156.083,212.9s15.07,10.653,20.262,5.295,4.405-6.178,4.405-6.178v-62.66l41.405-6.178v53.835s-8.2-9.082-17.619-1.765-4.891,18.745.881,19.416,18.342-.2,18.5-10.591,0-67.073,0-67.073l-44.929,7.06v59.131S176.136,197.945,170.178,198.778Z"
        />
      </svg>
    </div>
  );
}
