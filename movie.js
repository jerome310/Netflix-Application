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
console.log(playButton)
const muteAudio = document.querySelector(".mute-audio-img");
const playAudio = document.querySelector(".play-audio-img");
//const muteButton = document.querySelector(".mute-button");
const desktopVideo = document.querySelector("#video");

// This function mute's the video audio
function toggleMuted() {
  desktopVideo.muted = desktopVideo;
}

// This function unmute's the video audio
function toggleunMuted() {
  desktopVideo.muted = !desktopVideo;
}

// Play & Mute Button Feature
// muteBtn.addEventListener("click", () => {
//   playBtn.style.display = "block";
//   muteBtn.style.display = "none";
//   toggleunMuted();
// });

playButton.addEventListener("click", () => {
  if (muteAudio.style.display = 'block') {
    muteAudio.style.display = "none";
    playAudio.style.display = "block";
    toggleunMuted();
  } else {
    
  }
  // if (playAudio.style.display = "none") {
  //   playAudio.style.display = "block";
  //   toggleMuted();
  // }
  //playButton.style.display = "none";
  //muteBtn.style.display = "block";
});

// Movies
// const url = "https://imdb8.p.rapidapi.com/auto-complete?q=anime";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "a7457775a3msh339280f2861ee9ep1fc898jsnc3aa1dec1d36",
//     "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
