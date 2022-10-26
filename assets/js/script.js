// Constants
// Doc Selectors
const opening = document.getElementById("opening")
const quiz0 = document.getElementById("quiz0")
const quiz1 = document.getElementById("quiz1")
const quiz2 = document.getElementById("quiz2")
const results = document.getElementById("results")
const poster = document.getElementById("poster")
// Variables
// Variables for Selectors
var movieOrTVShow; //I know it's similar to movieOrTV; one of them is temporary, so bear with me
var movieGenreCode;
var tvGenreCode;
var movieDecadeBounds;
var tvDecadeBounds;
// API Key and URL Variables
var APIKey = '490056a86245bab731a516b282429177';
var movieURL;
var tvURL;
// Results Variables
var nameData;
var descriptionData;
var posterSrc;
var genre = String
var isMovie = Boolean
var decade = Number

//quiz user

function showOpening() {//opening page with start button
  opening.setAttribute("style", "display:block");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:none");
}

function showQuiz0() {//movie or series?
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:block");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:none");
  document.getElementById("movie").addEventListener("click", answerQuiz0);
  document.getElementById("series").addEventListener("click", answerQuiz0);
}

function answerQuiz0() {//define isMovie
  var x = this.getAttribute("id")
  if (x === "movie") {
    isMovie = true;
  } else {
    isMovie = false;
  };
  console.log("user selected movie = " + isMovie);
  if (isMovie = true) {
    movieOrTVShow = "movie"
  } else {
    movieOrTVShow = "tv"
  }
  showQuiz1();
};

function showQuiz1() {//what genre do you like?
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

function answerQuiz1() {//define genre, set movieGenreCode or tvGenreCode
  genre = this.getAttribute("id");
  console.log("user selects genre " + genre);
  if (isMovie = true) {
    if (genre === 'action') {
    movieGenreCode = '28'
  } else if (genre === 'comedy') {
    movieGenreCode = '35'
  } else if (genre === 'scifi') {
    movieGenreCode = '878'
  } else if (genre === 'drama') {
    movieGenreCode = '18'
  } else if (genre === 'mystery') {
    movieGenreCode = '9648'
  }
} else if (isMovie = false) {
  if (genre === 'action') {
    tvGenreCode = '10759'
  } else if (genre === 'comedy') {
    tvGenreCode = '35'
  } else if (genre === 'scifi') {
    tvGenreCode = '10765'
  } else if (genre === 'drama') {
    tvGenreCode = '18'
  } else if (genre === 'mystery') {
    tvGenreCode = '9648'
  }
}
showQuiz2();
};

function showQuiz2() {//what decade are you into rn?
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

function answerQuiz2() {//define genre
  decade = this.getAttribute("id");
  console.log("user selects decade " + decade);
  if (isMovie = true) {
    if (decade === '80') {
    movieDecadeBounds = '&release_date.gte=1980-01-01&release_date.lte=1989-12-31'
  } else if (decade === '90') {
    movieDecadeBounds = '&release_date.gte=1990-01-01&release_date.lte=1999-12-31'
  } else if (decade === '00') {
    movieDecadeBounds = '&release_date.gte=2000-01-01&release_date.lte=2009-12-31'
  } else if (decade === '10') {
    movieDecadeBounds = '&release_date.gte=2010-01-01&release_date.lte=2019-12-31'
  } else if (decade === '20') {
    movieDecadeBounds = '&release_date.gte=2020-01-01&release_date.lte=2029-12-31'
  }
} else if (isMovie = false) {
  if (decade === '80') {
    tvDecadeBounds = '&first_air_date.gte=1980-01-01&first_air_date.lte=1989-12-31'
  } else if (decade === '90') {
    tvDecadeBounds = '&first_air_date.gte=1990-01-01&first_air_date.lte=1999-12-31'
  } else if (decade === '00') {
    tvDecadeBounds = '&first_air_date.gte=2000-01-01&first_air_date.lte=2009-12-31'
  } else if (decade === '10') {
    tvDecadeBounds = '&first_air_date.gte=2010-01-01&first_air_date.lte=2019-12-31'
  } else if (decade === '20') {
    tvDecadeBounds = '&first_air_date.gte=2020-01-01&first_air_date.lte=2029-12-31'
  }
}
showResults();
};

function drawPoster(){
  var posterImg = document.createElement("img");
  posterImg.setAttribute("src", "https://www.themoviedb.org/t/p/original" + posterSrc);
  console.log(posterImg);
  poster.appendChild(posterImg)
  }
  

function showResults() {//quiz results
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:block");
  drawPoster();
}

document.getElementById("begin").addEventListener("click", showQuiz0);
showOpening();

// TMDb API stuff

// Testing/Notes
// var genreListMovies = ['Action', 'Comedy', 'Science Fiction', 'Drama', 'Mystery'];
// var movieGenresByCode = ['28', '35', '878', '18', '9648'];
// var genreListTV = ['Action & Adventure', 'Comedy', 'Sci-Fi & Fantasy', 'Drama', 'Mystery'];
// var tvGenresByCode = ['10759', '35', '10765', '18', '9648'];
// var noAdultContent = '&include_adult=false';
// var movieOrTV = ['movie', 'tv'];
// var dateRange = ['1980-1989', '1990-1999', '2000-2009', '2010-2019', '2020-present'];
// var dateLowerBound = ['1980-01-01', '1990-01-01', '2000-01-01', '2010-01-01', '2020-01-01'];
// var dateUpperBound = ['1989-12-31', '1999-12-31', '2009-12-31', '2019-12-31', '2029-12-31'];

// Actual Stuff

// Variables
// Variables for Selectors
var movieOrTVShow; //I know it's similar to movieOrTV; one of them is temporary, so bear with me
var movieGenreCode;
var tvGenreCode;
var movieDecadeBounds;
var tvDecadeBounds;
// API Key and URL Variables
var APIKey = '490056a86245bab731a516b282429177';
var movieURL;
var tvURL;
// Results Variables
var nameData;
var descriptionData;
var posterSrc;


// Form the URL
function formMovieURL() {
  movieURL = 'https://api.themoviedb.org/3/discover/' + movieOrTVShow + '?api_key=' + APIKey + movieDecadeBounds + '&with_genres=' + movieGenreCode + noAdultContent
}
function formTVURL() {
  tvURL = 'https://api.themoviedb.org/3/discover/' + movieOrTVShow + '?api_key=' + APIKey + tvDecadeBounds + '&with_genres=' + tvGenreCode
}

// Fetch Request
function fetchMovieResults() {
  fetch(movieURL)
    .then(function (response) {
      console.log("response", response);
      return response.json()
    })
    .then(function (data) {
      console.log("data", data);
      for (let i = 0; i < data.length; i++) {
        nameData = data.results[i].original_name
        descriptionData = data.results[i].overview
        posterSrc = data.results[i].poster_path
      }
      console.log(nameData);
      console.log(descriptionData);
      console.log(posterSrc);
    })
}
function fetchTVResults() {
  fetch(tvURL)
    .then(function (response) {
      console.log("response", response);
      return response.json()
    })
    .then(function (data) {
      console.log("data", data);
      // Useful if we wwant to display multiple results
      // for (var i = 0; i < 5; i++) {
      //   nameData = data.results[i].name
      //   descriptionData = data.results[i].overview
      //   posterSrc = data.results[i].poster_path
      //   console.log(nameData);
      //   console.log(descriptionData);
      //   console.log(posterSrc);
      //   console.log('test')
      // }
      // Random Result from the 20 results
      var randomResult = Math.floor(Math.random() * 20)
      nameData = data.results[randomResult].name
      descriptionData = data.results[randomResult].overview
      posterSrc = data.results[randomResult].poster_path
      console.log(nameData);
      console.log(descriptionData);
      console.log(posterSrc);
    })
}

// Test Run
tvURL = 'https://api.themoviedb.org/3/discover/' + 'tv' + '?api_key=' + APIKey + '&first_air_date.gte=1990-01-01&first_air_date.lte=1999-12-31' + '&with_genres=' + '9648'
fetchTVResults();
