const opening = document.getElementById("opening")
const quiz0 = document.getElementById("quiz0")
const quiz1 = document.getElementById("quiz1")
const quiz2 = document.getElementById("quiz2")
const results = document.getElementById("results")
var genre = String
var isMovie = Boolean
var suggestion
var streams = {
    netflix : Boolean,
    amazon : Boolean,
    hulu : Boolean
}

function showOpening() {//opening page with start button
  opening.setAttribute("style", "display:block");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:none");
}

function showQuiz0() {//what genre do you like?
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:block");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:none");
  document.getElementById("action").addEventListener("click", genre = "Action", console.log(genre), showQuiz1);
  document.getElementById("comedy").addEventListener("click", genre = "Mystery", console.log(genre), showQuiz1);
  document.getElementById("scifi").addEventListener("click", genre = "Science Fiction", console.log(genre), showQuiz1);
  document.getElementById("drama").addEventListener("click", genre = "Drama", console.log(genre), showQuiz1);
  document.getElementById("mystery").addEventListener("click", genre = "Mystery", console.log(genre), showQuiz1);
}

function showQuiz1() {//movie or series?
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:block");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:none");
  document.getElementById("movie").addEventListener("click", isMovie = true, console.log(isMovie), showQuiz2);
  document.getElementById("series").addEventListener("click", isMovie = false, console.log(isMovie), showQuiz2);
}

function showQuiz2() {//what decade are you into rn?
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:block");
  results.setAttribute("style", "display:none");
}

function showResults() {//quiz results
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:block")
}

document.getElementById("begin").addEventListener("click", showQuiz0);
showOpening();






// TMDb API stuff
// Important
var APIKey = '490056a86245bab731a516b282429177';

// Testing
fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=490056a86245bab731a516b282429177&language=en-US')
.then(function (response) {
    console.log("response", response);
    return response.json()
})
.then(function (data) {
    console.log("data", data);
})
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=490056a86245bab731a516b282429177&language=en-US')
.then(function (response) {
    console.log("response", response);
    return response.json()
})
.then(function (data) {
    console.log("data", data);
})

// Testing/Notes
var genreListMovies = ['Action', 'Comedy', 'Science Fiction', 'Drama', 'Mystery'];
var movieGenresByCode = ['28', '35', '878', '18', '9648'];
var genreListTV = ['Action & Adventure', 'Comedy', 'Sci-Fi & Fantasy', 'Drama', 'Mystery'];
var tvGenresByCode = ['10759', '35', '10765', '18', '9648'];
var noAdultContent = '&include_adult=false';
var movieOrTV = ['movie', 'tv'];
var dateRange = ['1980-1989', '1990-1999', '2000-2009', '2010-2019', '2020-present'];
var dateLowerBound = ['1980-01-01', '1990-01-01', '2000-01-01', '2010-01-01', '2020-01-01'];
var dateUpperBound = ['1989-12-31', '1999-12-31', '2009-12-31', '2019-12-31', '2029-12-31'];

// Testing Search - probobly not going to use it
fetch('https://api.themoviedb.org/3/search/multi?api_key=' + APIKey + '&language=en-US&query=' + 'Horror' + '&page=1' + noAdultContent)
.then(function (response) {
    console.log("response", response);
    return response.json()
})
.then(function (data) {
    console.log("data", data);
})

// Testing
// Generate Suggestions
// Not sure if noAdultContent is working
// Test with random variables
// Date range not working
fetch('https://api.themoviedb.org/3/discover/' + movieOrTV[0] + '?api_key=' + APIKey + '&release_date.gte=' + dateLowerBound[4] + '&release_date.lte=' + dateUpperBound[4] + '&with_genres=' + movieGenresByCode[2] + noAdultContent)
.then(function (response) {
    console.log("response", response);
    return response.json()
})
.then(function (data) {
    console.log("data", data);
})

// Note: get movie by decade



// Actually useful stuff

// Variables
var movieOrTVShow; //I know it's similar to movieOrTV; one of them is temporary, so bear with me
var movieGenreCode;
var tvGenreCode;
var movieDecadeLowerBound;
var movieDecadeUpperBound;
var tvDecadeLowerBound;
var tvDecadeUpperBound;

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
  }
  // repeat for remaining genres
}
function tvGenreSelector() {
  if (/*user selects*/ 'Action & Adventure') {
    tvGenreCode = '10759'
  }
  // repeat for remaining genres
}

// Decade
function movieDecadeSelector() {
  if (/*user selects*/ '1980\'s') {
    movieDecadeLowerBound = 'TBD' //Have to figure this part of the call out
    movieDecadeUpperBound = 'TBD' //Have to figure this part of the call out
  }
  // repeat for remaining decades
}
function tvDecadeSelector() {
  if (/*user selects*/ '1980\'s') {
    tvDecadeLowerBound = 'TBD' //Have to figure this part of the call out
    tvDecadeUpperBound = 'TBD' //Have to figure this part of the call out
  }
  // repeat for remaining decades
}

