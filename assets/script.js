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

function showOpening() {
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
  document.getElementById("romance").addEventListener("click", genre = "romance", console.log(genre), showQuiz1);
  document.getElementById("horror").addEventListener("click", genre = "horror", console.log(genre), showQuiz1);
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

function showQuiz2() {//what platforms do you have?
  document.getElementById("opening").setAttribute("style", "display:none");
  document.getElementById("quiz0").setAttribute("style", "display:none");
  document.getElementById("quiz1").setAttribute("style", "display:none");
  document.getElementById("quiz2").setAttribute("style", "display:block");
  document.getElementById("results").setAttribute("style", "display:none");
  dpc
  
}

function showResults() {
    opening.setAttribute("style", "display:none");
    quiz.setAttribute("style", "display:none");
    results.setAttribute("style", "display:block");
}

document.getElementById("begin").addEventListener("click", showQuiz0());


//genre
//movie or series
//what streaming platforms do you have?



showOpening();

