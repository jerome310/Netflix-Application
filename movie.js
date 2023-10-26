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
const API_KEY = "api_key=0886ec0cdb036b7f0a823254454c484b";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = BASE_URL + "discover/movie?sort_by=popularity.desc&" + API_KEY;

const getMovies = (url) => {
 fetch(url)
 .then(res => res.json()
 .then(data => {
  console.log(data)
 }))  
}

getMovies(API_URL);
