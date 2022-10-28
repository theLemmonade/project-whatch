// Variables
// DOM Element References
const opening = document.getElementById("opening");
const quiz0 = document.getElementById("quiz0");
const quiz1 = document.getElementById("quiz1");
const quiz2 = document.getElementById("quiz2");
const results = document.getElementById("results");
const poster = document.getElementById("poster");
// Quiz Selectors
var genre = String;
var isMovie = Boolean;
var decade = Number;
var movieOrTVShow;
var movieGenreCode;
var tvGenreCode;
var movieDecadeBounds;
var tvDecadeBounds;
var noAdultContent = '&include_adult=false';
// API Key
var APIKey = '490056a86245bab731a516b282429177';
// URLs
var movieURL;
var tvURL;
// Data Results
var nameData;
var descriptionData;
var posterSrc;
var showID;
var trailerKey;
// YouTube API Required Variable
var player;

// Functions
// Display only the opening page
function showOpening() {
  opening.setAttribute("style", "display:block");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:none");
}

// Question 1: Do you want to watch a movie or a tv show?
function showQuiz0() {
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:block");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:none");
  document.getElementById("movie").addEventListener("click", answerQuiz0);
  document.getElementById("series").addEventListener("click", answerQuiz0);
}

// Determine question 1 results
function answerQuiz0() {
  var x = this.getAttribute("id");
  // Check if movie or tv show was selected
  if (x === "movie") {
    isMovie = true;
  } else {
    isMovie = false;
  };
  // Set movieOrTVShow selector value
  if (isMovie === true) {
    movieOrTVShow = "movie";
  } else {
    movieOrTVShow = "tv";
  };
  // Call question 2
  showQuiz1();
};

// Question 2: What genre do you want to watch?
function showQuiz1() {
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:block");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:none");
  document.getElementById("action").addEventListener("click", answerQuiz1);
  document.getElementById("comedy").addEventListener("click", answerQuiz1);
  document.getElementById("scifi").addEventListener("click", answerQuiz1);
  document.getElementById("drama").addEventListener("click", answerQuiz1);
  document.getElementById("mystery").addEventListener("click", answerQuiz1);
}

// Determine question 2 results
function answerQuiz1() {
  genre = this.getAttribute("id");
  // Set genre code selector if user selected movie in question 1
  if (isMovie === true) {
    if (genre === 'action') {
      movieGenreCode = '28';
    } else if (genre === 'comedy') {
      movieGenreCode = '35';
    } else if (genre === 'scifi') {
      movieGenreCode = '878';
    } else if (genre === 'drama') {
      movieGenreCode = '18';
    } else if (genre === 'mystery') {
      movieGenreCode = '9648';
    }
  // Set genre code selector if user selected tv show in question 1
  } else if (isMovie === false) {
    if (genre === 'action') {
      tvGenreCode = '10759';
    } else if (genre === 'comedy') {
      tvGenreCode = '35';
    } else if (genre === 'scifi') {
      tvGenreCode = '10765';
    } else if (genre === 'drama') {
      tvGenreCode = '18';
    } else if (genre === 'mystery') {
      tvGenreCode = '9648';
    }
  }
  // Call question 3
  showQuiz2();
};

// Question 3: What decade do you want to watch something from?
function showQuiz2() {
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:block");
  results.setAttribute("style", "display:none");
  document.getElementById("80").addEventListener("click", answerQuiz2);
  document.getElementById("90").addEventListener("click", answerQuiz2);
  document.getElementById("00").addEventListener("click", answerQuiz2);
  document.getElementById("10").addEventListener("click", answerQuiz2);
  document.getElementById("20").addEventListener("click", answerQuiz2);
}

// Determine question 3 results
function answerQuiz2() {
  decade = this.getAttribute("id");
  // Set decade bounds selector if user selected movie in question 1
  if (isMovie === true) {
    if (decade === '80') {
      movieDecadeBounds = '&release_date.gte=1980-01-01&release_date.lte=1989-12-31';
    } else if (decade === '90') {
      movieDecadeBounds = '&release_date.gte=1990-01-01&release_date.lte=1999-12-31';
    } else if (decade === '00') {
      movieDecadeBounds = '&release_date.gte=2000-01-01&release_date.lte=2009-12-31';
    } else if (decade === '10') {
      movieDecadeBounds = '&release_date.gte=2010-01-01&release_date.lte=2019-12-31';
    } else if (decade === '20') {
      movieDecadeBounds = '&release_date.gte=2020-01-01&release_date.lte=2029-12-31';
    }
  // Set decade bounds selector if user selected tv show in question 1
  } else if (isMovie === false) {
    if (decade === '80') {
      tvDecadeBounds = '&first_air_date.gte=1980-01-01&first_air_date.lte=1989-12-31';
    } else if (decade === '90') {
      tvDecadeBounds = '&first_air_date.gte=1990-01-01&first_air_date.lte=1999-12-31';
    } else if (decade === '00') {
      tvDecadeBounds = '&first_air_date.gte=2000-01-01&first_air_date.lte=2009-12-31';
    } else if (decade === '10') {
      tvDecadeBounds = '&first_air_date.gte=2010-01-01&first_air_date.lte=2019-12-31';
    } else if (decade === '20') {
      tvDecadeBounds = '&first_air_date.gte=2020-01-01&first_air_date.lte=2029-12-31';
    }
  }
  // Call results
  showResults();
};

function drawPoster() {
  if (posterSrc != null){
    var posterImg = document.createElement("img");
    posterImg.setAttribute("src", "https://www.themoviedb.org/t/p/original" + posterSrc);
    posterImg.setAttribute("id", "posterEl");
    console.log(posterImg);
    poster.appendChild(posterImg);
  } else {
    var posterImg = document.createElement("img");
    posterImg.setAttribute("src", "https://critics.io/img/movies/poster-placeholder.png");
    poster.appendChild(posterImg);
  };
  // Call next function
  fetchTrailerID();
};

// TMDb API stuff
// Form the URL
function formMovieURL() {
  movieURL = 'https://api.themoviedb.org/3/discover/' + movieOrTVShow + '?api_key=' + APIKey + movieDecadeBounds + '&with_genres=' + movieGenreCode + noAdultContent;
}
function formTVURL() {
  tvURL = 'https://api.themoviedb.org/3/discover/' + movieOrTVShow + '?api_key=' + APIKey + tvDecadeBounds + '&with_genres=' + tvGenreCode;
}

// Fetch request for movie data
function fetchMovieResults() {
  
  fetch(movieURL)
    .then(function (response) {
      console.log("response", response);
      return response.json()
    })
    .then(function (data) {
      console.log("data", data);
      // Random Result from the 20 results
      var randomResult = Math.floor(Math.random() * 20);
      nameData = data.results[randomResult].title;
      descriptionData = data.results[randomResult].overview;
      posterSrc = data.results[randomResult].poster_path;
      showID = data.results[randomResult].id;
      console.log(nameData);
      console.log(descriptionData);
      console.log(posterSrc);
      console.log(showID);
    })
    .then(drawPoster)
}
// Fetch request for tv show data
function fetchTVResults() {
  fetch(tvURL)
    .then(function (response) {
      console.log("response", response);
      return response.json()
    })
    .then(function (data) {
      console.log("data", data);
      // Random Result from the 20 results
      var randomResult = Math.floor(Math.random() * 20);
      nameData = data.results[randomResult].name;
      descriptionData = data.results[randomResult].overview;
      posterSrc = data.results[randomResult].poster_path;
      showID = data.results[randomResult].id;
      console.log(nameData);
      console.log(descriptionData);
      console.log(posterSrc);
      console.log(showID);
    })
    .then(drawPoster)
}

// Get the youtube id
function fetchTrailerID() {
  var showIdURL = 'https://api.themoviedb.org/3/' + movieOrTVShow + '/' + showID + '/videos?api_key=' + APIKey + '&language=en-US';
  console.log(showIdURL);
  fetch(showIdURL)
    .then(function (response) {
      console.log("response", response);
      return response.json()
    })
    .then(function (data) {
      console.log("data", data);
      for (var i = 0; i < data.results.length; i++) {
        if(data.results[i].type.includes("Trailer")) {
          console.log("there's a trailer");
          trailerKey = data.results[i].key;
          console.log(trailerKey);
        } else {
          console.log("no trailer for you");
        }
      }

    })
    .then(youtubeTrailer)
    .then(onYouTubePlayerAPIReady)
}





function youtubeTrailer() {
    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.

  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: trailerKey
    });
  }





// quiz results
function showResults() {
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:block");
  if (isMovie === true) {
    formMovieURL();
    fetchMovieResults();
  } else {
    formTVURL();
    fetchTVResults();
  }
  console.log(tvURL);
  console.log(movieURL);
}



document.getElementById("begin").addEventListener("click", showQuiz0);
showOpening();