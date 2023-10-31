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
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const movieFlexContainer = document.querySelector(".movie-flex-container");

const getMovies = () => {
  fetch(API_URL)
    //console.log(API_URL)
    .then((res) =>
      res.json().then((data) => {
        console.log(data.results);
        showMovies(data.results);
      })
    );
};

const showMovies = (data) => {
  movieFlexContainer.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, vote_average, release_date } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie-container");
    movieEl.innerHTML = `<img style="width: 200px;" src="${
      IMG_URL + poster_path
    }" alt="${title}">
        <div style="display: flex; flex-direction: column;" class="movie-description">
            <p style="padding-top: 45px; display: flex; flex-wrap: wrap;" class="movie-name">${title}</p>
            <div class="imdb-info-container">
                <div class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span>${vote_average}</span>
                </div>
                <div class="movie-year">
                    <span>${release_date}</span>
                </div>
            </div>
        </div>`;
    movieEl.style.display = "flex";
    movieEl.style.flexDirection = "column";
    // WORK ON THIS FEATURE FOR THE MOVIE TITLES
    const dynamicP = document.querySelector('.movie-container p');
    if (dynamicP) {
      // 1) I want to target the length of the characters for each title movie
      // 2) Remove the extra text after the targetted length and replace it with 3 dots
    }
    movieFlexContainer.appendChild(movieEl);
  });
};

getMovies();


// Search Button
const btnSearch = document.querySelector(".btn-search");
const inputSearch = document.querySelector(".input-search");

btnSearch.addEventListener('click', () => {
   inputSearch.style.width = '300px';
   inputSearch.style.borderRadius = '0px';
   inputSearch.style.backgroundColor = "transparent";
   inputSearch.style.borderBottom = "1px solid rgba(255, 255, 255, .5)";
   input.style.transition = "all 500ms cubic-bezier(0, 0.110, 0.35, 2)";
})