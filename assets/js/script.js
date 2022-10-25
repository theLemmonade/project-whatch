// const opening = document.getElementById("opening")
// const quiz0 = document.getElementById("quiz0")
// const quiz1 = document.getElementById("quiz1")
// const quiz2 = document.getElementById("quiz2")
// const results = document.getElementById("results")
// var genre = String
// var isMovie = Boolean
// var suggestion
// var streams = {
//     netflix : Boolean,
//     amazon : Boolean,
//     hulu : Boolean
// }

// function showOpening() {//opening page with start button
//   opening.setAttribute("style", "display:block");
//   quiz0.setAttribute("style", "display:none");
//   quiz1.setAttribute("style", "display:none");
//   quiz2.setAttribute("style", "display:none");
//   results.setAttribute("style", "display:none");
// }

// function showQuiz0() {//what genre do you like?
//   opening.setAttribute("style", "display:none");
//   quiz0.setAttribute("style", "display:block");
//   quiz1.setAttribute("style", "display:none");
//   quiz2.setAttribute("style", "display:none");
//   results.setAttribute("style", "display:none");
//   document.getElementById("action").addEventListener("click", genre = "Action", console.log(genre), showQuiz1);
//   document.getElementById("comedy").addEventListener("click", genre = "Mystery", console.log(genre), showQuiz1);
//   document.getElementById("scifi").addEventListener("click", genre = "Science Fiction", console.log(genre), showQuiz1);
//   document.getElementById("drama").addEventListener("click", genre = "Drama", console.log(genre), showQuiz1);
//   document.getElementById("mystery").addEventListener("click", genre = "Mystery", console.log(genre), showQuiz1);
// }

// function showQuiz1() {//movie or series?
//   opening.setAttribute("style", "display:none");
//   quiz0.setAttribute("style", "display:none");
//   quiz1.setAttribute("style", "display:block");
//   quiz2.setAttribute("style", "display:none");
//   results.setAttribute("style", "display:none");
//   document.getElementById("movie").addEventListener("click", isMovie = true, console.log(isMovie), showQuiz2);
//   document.getElementById("series").addEventListener("click", isMovie = false, console.log(isMovie), showQuiz2);
// }

// function showQuiz2() {//what decade are you into rn?
//   opening.setAttribute("style", "display:none");
//   quiz0.setAttribute("style", "display:none");
//   quiz1.setAttribute("style", "display:none");
//   quiz2.setAttribute("style", "display:block");
//   results.setAttribute("style", "display:none");
// }

// function showResults() {//quiz results
//   opening.setAttribute("style", "display:none");
//   quiz0.setAttribute("style", "display:none");
//   quiz1.setAttribute("style", "display:none");
//   quiz2.setAttribute("style", "display:none");
//   results.setAttribute("style", "display:block")
// }

// document.getElementById("begin").addEventListener("click", showQuiz0);
// showOpening();






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

// Movie or TV Show
function movieOrTVSelector() {
  if (/*user selects*/ 'Movie') {
    movieOrTVShow = 'movie'
  } else if (/*user selects*/ 'TV Series') {
    movieOrTVShow = 'tv'
  }
}

// Genre
function movieGenreSelector() {
  if (/*user selects*/ 'Action') {
    movieGenreCode = '28'
  } else if (/*user selects*/ 'Comedy') {
    movieGenreCode = '35'
  } else if (/*user selects*/ 'Science Fiction') {
    movieGenreCode = '878'
  } else if (/*user selects*/ 'Drama') {
    movieGenreCode = '18'
  } else if (/*user selects*/ 'Mystery') {
    movieGenreCode = '9648'
  }
}
function tvGenreSelector() {
  if (/*user selects*/ 'Action & Adventure') {
    tvGenreCode = '10759'
  } else if (/*user selects*/ 'Comedy') {
    tvGenreCode = '35'
  } else if (/*user selects*/ 'Sci-Fi & Fantasy') {
    tvGenreCode = '10765'
  } else if (/*user selects*/ 'Drama') {
    tvGenreCode = '18'
  } else if (/*user selects*/ 'Mystery') {
    tvGenreCode = '9648'
  }
}

// Decade
function movieDecadeSelector() {
  if (/*user selects*/ '1980\'s') {
    movieDecadeBounds = '&release_date.gte=1980-01-01&release_date.lte=1989-12-31'
  } else if (/*user selects*/ '1990\'s') {
    movieDecadeBounds = '&release_date.gte=1990-01-01&release_date.lte=1999-12-31'
  } else if (/*user selects*/ '2000\'s') {
    movieDecadeBounds = '&release_date.gte=2000-01-01&release_date.lte=2009-12-31'
  } else if (/*user selects*/ '2010\'s') {
    movieDecadeBounds = '&release_date.gte=2010-01-01&release_date.lte=2019-12-31'
  } else if (/*user selects*/ '2020\'s') {
    movieDecadeBounds = '&release_date.gte=2020-01-01&release_date.lte=2029-12-31'
  }
}
function tvDecadeSelector() {
  if (/*user selects*/ '1980\'s') {
    tvDecadeBounds = '&first_air_date.gte=1980-01-01&first_air_date.lte=1989-12-31'
  } else if (/*user selects*/ '1990\'s') {
    tvDecadeBounds = '&first_air_date.gte=1990-01-01&first_air_date.lte=1999-12-31'
  } else if (/*user selects*/ '2000\'s') {
    tvDecadeBounds = '&first_air_date.gte=2000-01-01&first_air_date.lte=2009-12-31'
  } else if (/*user selects*/ '2010\'s') {
    tvDecadeBounds = '&first_air_date.gte=2010-01-01&first_air_date.lte=2019-12-31'
  } else if (/*user selects*/ '2020\'s') {
    tvDecadeBounds = '&first_air_date.gte=2020-01-01&first_air_date.lte=2029-12-31'
  }
}

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
    })
}
