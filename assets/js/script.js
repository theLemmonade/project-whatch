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
  document.getElementById("drama").addEventListener("click", genre = "Drama", console.log(genre), showQuiz1);
  document.getElementById("mystery").addEventListener("click", genre = "Mystery", console.log(genre), showQuiz1);
  document.getElementById("comedy").addEventListener("click", genre = "comedy", console.log(genre), showQuiz1);
  document.getElementById("action").addEventListener("click", genre = "action", console.log(genre), showQuiz1);
  document.getElementById("international").addEventListener("click", genre = "international", console.log(genre), showQuiz1);
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
var APIKey = '490056a86245bab731a516b282429177';
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

var genreListMovies = ['Action', 'Comedy', 'Science Fiction', 'Drama', 'Mystery'];
var movieGenresByCode = ['28', '35', '878', '18', '9648'];
var genreListTV = ['Action & Adventure', 'Comedy', 'Sci-Fi & Fantasy', 'Drama', 'Mystery'];
var tvGenresByCode = ['10759', '35', '10765', '18', '9648'];
var noAdultContent = '&include_adult=false';
var movieOrTV = ['movie', 'tv']

// Search
fetch('https://api.themoviedb.org/3/search/multi?api_key=' + APIKey + '&language=en-US&query=' + 'Horror' + '&page=1' + noAdultContent)
.then(function (response) {
    console.log("response", response);
    return response.json()
})
.then(function (data) {
    console.log("data", data);
})

// Generate Suggestions
// Not sure if noAdultContent is working
// Test with random variables
fetch('https://api.themoviedb.org/3/discover/' + movieOrTV[1] + '?api_key=' + APIKey + '&with_genres=' + tvGenresByCode[2] + noAdultContent)
.then(function (response) {
    console.log("response", response);
    return response.json()
})
.then(function (data) {
    console.log("data", data);
})