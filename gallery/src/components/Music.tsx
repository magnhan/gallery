let isPlaying= false;

export function togglePlay(audio: HTMLAudioElement) {
    isPlaying ? audio.pause() : audio.play();

    audio.onplaying = function() {
      isPlaying = true;
    };
    audio.onpause = function() {
      isPlaying = false;
    }
};