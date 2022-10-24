var genre = String
var isMovie = Boolean
var suggestion
var streams = {
    netflix : Boolean,
    amazon : Boolean,
    hulu : Boolean
}

function showOpening() {
  document.getElementById("opening").setAttribute("style", "display:block");
  document.getElementById("quiz0").setAttribute("style", "display:none");
  document.getElementById("quiz1").setAttribute("style", "display:none");
  document.getElementById("quiz2").setAttribute("style", "display:none");
  document.getElementById("results").setAttribute("style", "display:none");
}

function showQuiz0() {//what genre do you like?
    document.getElementById("opening").setAttribute("style", "display:none");
    document.getElementById("quiz0").setAttribute("style", "display:block");
    document.getElementById("quiz1").setAttribute("style", "display:none");
    document.getElementById("quiz2").setAttribute("style", "display:none");
    document.getElementById("results").setAttribute("style", "display:none");
    document.getElementById("romance").addEventListener("click", genre = "romance", console.log(genre), showQuiz1);
    document.getElementById("horror").addEventListener("click", genre = "horror", console.log(genre), showQuiz1);
    document.getElementById("comedy").addEventListener("click", genre = "comedy", console.log(genre), showQuiz1);
    document.getElementById("action").addEventListener("click", genre = "action", console.log(genre), showQuiz1);
    document.getElementById("international").addEventListener("click", genre = "international", console.log(genre), showQuiz1);
}

function showQuiz1() {//movie or series?
  document.getElementById("opening").setAttribute("style", "display:none");
  document.getElementById("quiz0").setAttribute("style", "display:none");
  document.getElementById("quiz1").setAttribute("style", "display:block");
  document.getElementById("quiz2").setAttribute("style", "display:none");
  document.getElementById("results").setAttribute("style", "display:none");
  document.getElementById("movie").addEventListener("click", genre = "action", console.log(genre), showQuiz1);
  document.getElementById("series").addEventListener("click", genre = "international", console.log(genre), showQuiz1);
}

function showQuiz2() {
  document.getElementById("opening").setAttribute("style", "display:none");
  document.getElementById("quiz0").setAttribute("style", "display:none");
  document.getElementById("quiz1").setAttribute("style", "display:none");
  document.getElementById("quiz2").setAttribute("style", "display:block");
  document.getElementById("results").setAttribute("style", "display:none");
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

