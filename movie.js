// Volume Button Feature
const muteBtn = document.querySelector(".mute");
const playBtn = document.querySelector(".play");
//const video = document.querySelector("#video source").src;
const video = document.querySelector("#video");

// This function muted the video audio add a mute attribute
function toggleMuted() {
  video.muted = !video.muted;
}

// Testing if this remove the mute attribute to give the mute button functionality
// function toggleunMuted() {
//   video.removeAttribute('mute')
// }

// NEED TO FIGURE OUT WHY I'm getting a deplay on the button to play audio and mute audio

// Play & Mute Button Feature
muteBtn.addEventListener("click", () => {
  playBtn.style.display = "block";
  muteBtn.style.display = "none";
  toggleMuted();
});

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  muteBtn.style.display = "block";
});

// Movies
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

console.log(APIURL);

let movieImages = () => {
  fetch(APIURL)
    .then((data) => data.json())
    .then((item) => {
      // text.textContent = item.slip.advice;
      console.log(item.page.results);
    });
};
