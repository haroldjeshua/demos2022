import "./style.css";

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  if (video) {
    video.playbackRate = 2;
  }
});
