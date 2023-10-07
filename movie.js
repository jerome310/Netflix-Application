// Volume Button Feature
const muteBtn = document.querySelector(".mute");
const playBtn = document.querySelector(".play");
const video = document.querySelector("#video source").src;

muteBtn.addEventListener("click", () => {
  playBtn.style.display = "block";
  muteBtn.style.display = "none";
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
