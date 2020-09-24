import React, { Component } from "react";

class Music extends Component {
  render() {
    var isPlaying = false;
    var audio_1 = new Audio();
    var audio_2 = new Audio();
    var audio_3 = new Audio();
    audio_1.src = require("./AudioClips/trumpet.mp3");
    audio_2.src = require("./AudioClips/guitar.mp3");
    audio_3.src = require("./AudioClips/mikrofon.mp3");

    function togglePlay(audio: HTMLAudioElement) {
      isPlaying ? audio.pause() : audio.play();

      audio.onplaying = function() {
        isPlaying = true;
      };
      audio.onpause = function() {
        isPlaying = false;
      };
    }

    return (
        <div>
          <button onClick={(e) => { togglePlay(audio_1) }}>Play music1</button>
          <button onClick={(e) => { togglePlay(audio_2) }}>Play music2</button>
          <button onClick={(e) => { togglePlay(audio_3) }}>Play music3</button>
        </div>
    )
  }
}

export default Music;

/* <audio id="audioMusic">
<source src={require("./sang.mp3")} type="audio/mpeg"/>
</audio> */