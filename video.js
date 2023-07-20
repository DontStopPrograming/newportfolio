const video = document.querySelector('.background-video');
let isVideoPlaying = false;
let opacity = 0.2;

function playVideo() {
  video.play();
  isVideoPlaying = true;
}

function pauseVideo() {
  video.pause();
  isVideoPlaying = false;
}

function updateOpacity() {
  video.style.opacity = opacity;
}

function toggleVideo() {
  if (isVideoPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
}

function cycleOpacity() {
  if (opacity === 0.2) {
    opacity = 0.8;
  } else {
    opacity = 0.2;
  }
  updateOpacity();
}

// Reproducir el video cada 10 segundos
setInterval(() => {
  toggleVideo();
  cycleOpacity();
}, 20000);
