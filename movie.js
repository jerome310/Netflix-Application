// Volume Button Feature
const muteBtn = document.querySelector(".mute");
const playBtn = document.querySelector(".play");
const video = document.querySelector("#video");

// This function mute's the video audio
function toggleMuted() {
  video.muted = video;
}

// This function unmute's the video audio
function toggleunMuted() {
  video.muted = !video;
}

// Play & Mute Button Feature
muteBtn.addEventListener("click", () => {
  playBtn.style.display = "block";
  muteBtn.style.display = "none";
  toggleunMuted();
});

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  muteBtn.style.display = "block";
  toggleMuted();
});

// Desktop Audio Button
const playButton = document.querySelector(".play-button");
const muteButton = document.querySelector(".mute-button");
const muteAudio = document.querySelector(".mute-audio-img");
const playAudio = document.querySelector(".play-audio-img");
const desktopVideo = document.querySelector("#video");

// This function mute's the video audio
function toggleMuted() {
  desktopVideo.muted = desktopVideo;
}

// This function unmute's the video audio
function toggleunMuted() {
  desktopVideo.muted = !desktopVideo;
}

muteButton.addEventListener("click", () => {
  muteButton.style.display = "none";
  playButton.style.display = "flex";
  toggleunMuted();
});

playButton.addEventListener("click", () => {
  muteButton.style.display = "flex";
  playButton.style.display = "none";
  toggleMuted();
});



// Movie List

