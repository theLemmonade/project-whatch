<<<<<<< HEAD
const opening = document.getElementById("opening")
const quiz0 = document.getElementById("quiz0")
const quiz1 = document.getElementById("quiz1")
const quiz2 = document.getElementById("quiz2")
const results = document.getElementById("results")
=======
>>>>>>> 50d3bddb48c17762effad51c5d9d2a60a9cbdd7f
var genre = String
var isMovie = Boolean
var suggestion
var streams = {
    netflix : Boolean,
    amazon : Boolean,
    hulu : Boolean
}

function showOpening() {
<<<<<<< HEAD
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

function showQuiz2() {//what platforms do you have?
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:block");
  results.setAttribute("style", "display:none");
  document.getElementById("netflix").addEventListener("click", streams.netflix = true);
  document.getElementById("amazon").addEventListener("click", streams.amazon = true);
  document.getElementById("hulu").addEventListener("click", streams.hulu = true);
  function submitQuiz2() {
    if (streams.netflix && streams.amazon && streams.hulu == false) {
      document.getElementById("warning").textContent("Please select atleast one streaming platform.")
    } else {
      showResults
    }
  }
  document.getElementById("submitQuiz2").addEventListener("click", submitQuiz2);
}

function showResults() {
  opening.setAttribute("style", "display:none");
  quiz0.setAttribute("style", "display:none");
  quiz1.setAttribute("style", "display:none");
  quiz2.setAttribute("style", "display:none");
  results.setAttribute("style", "display:block")
}

document.getElementById("begin").addEventListener("click", showQuiz0);
showOpening();

=======
    opening.setAttribute("style", "display:block");
    quiz.setAttribute("style", "display:none");
    results.setAttribute("style", "display:none");
}

function showQuiz() {
    opening.setAttribute("style", "display:none");
    quiz.setAttribute("style", "display:block");
    results.setAttribute("style", "display:none");
}

function showResults() {
    opening.setAttribute("style", "display:none");
    quiz.setAttribute("style", "display:none");
    results.setAttribute("style", "display:block");
}



//genre
//movie or series
//what streaming platforms do you have?

//determines quiz progress and end point
function runQuiz() {
  if (current === 0) {
    console.log("Begin quiz with " + seconds + " seconds left.");
    opening.setAttribute("style", "display:none");
    quiz.setAttribute("style", "display:block");
    submission.setAttribute("style", "display:none");
    scoreboard.setAttribute("style", "display:none");
    runTimer();
    drawQuiz();
  } else if (current === pool.length) {
    win = true;
    opening.setAttribute("style", "display:none");
    questionnaire.setAttribute("style", "display:none");
    results.setAttribute("style", "display:block");
    scoreboard.setAttribute("style", "display:none");
  } else {
    drawQuiz();
  };
};

//draws the current question and answers from question pool
function drawQuiz() {
  console.log("Cycling question, current place is " + current + " out of " + pool.length + " question(s).")
  var currentQ = pool[current].question;
  var currentA = pool[current].answers;
  title.textContent = currentQ;
  button0.textContent = currentA[0];
  button1.textContent = currentA[1];
  button2.textContent = currentA[2];
  button3.textContent = currentA[3];
};

//decriment time for incorrect answer choice, cycle question
function gradeQuiz() {
  var choice = this.getAttribute("id");
  console.log("User selected " + choice +", checking answer.");
  correct = pool[current].correct;
  if (choice == correct) {
    console.log("Answer correct, cycling question.");
    feedback.textContent = "Correct!"
    current++;
  } else {
    console.log("Answer incorrect, decrimenting 10 seconds, cycling question.");
    feedback.textContent = "Incorrect, decrementing 10 seconds."
    seconds -= 10;
    current++;
  };
  runQuiz();
};

//end game and log score
function endQuiz() {
  if (win === false) {
    console.log("Game over!");
    score = 0;
    clearInterval(timerInterval);
  } else {
    console.log("User won! The score is " + seconds + ".");
    score = seconds;
    clearInterval(timerInterval);
  };
  document.getElementById("score").textContent = score
  opening.setAttribute("style", "display:none");
  quiz.setAttribute("style", "display:none");
  submission.setAttribute("style", "display:block");
  scoreboard.setAttribute("style", "display:none");
};

//append score to object in local storage
function submitScore() {
  if (initial.value === "") {
    initial.setAttribute("placeholder", "Enter your initials");
  } else {
    username = initial.value.trim();
    usernameScore = {
      username : username,
      score : score
    };
    var existing = localStorage.getItem('scores');
    existing = existing ? JSON.parse(existing) : {};
    existing[username] = score;
    localStorage.setItem('scores', JSON.stringify(existing));
    console.log("Submitting initials " + username + " and score " + score + " to the scoreboard.");
    opening.setAttribute("style", "display:none");
    quiz.setAttribute("style", "display:none");
    submission.setAttribute("style", "display:none");
    scoreboard.setAttribute("style", "display:block");
    drawScore();
  };
};

//pull scoreboard from local storage, sort by seconds remaining descending, append to .html
function drawScore() {
  var scores = JSON.parse(localStorage.getItem("scores"));
  if (scores !== null) {
    var entries = Object.entries(scores);
    var scoresSorted = entries.sort((b, a) => a[1] - b[1]);
    console.log("Current scoreboard:");
    console.log(scoresSorted);
    board.textContent = ""
    var toAdd = document.createDocumentFragment();
    for(var i = 0; i < scoresSorted.length; i++){
      var newDiv = document.createElement('div')
      newDiv.className = 'boardItem';
      newDiv.textContent = scoresSorted[i][0] + " scored " + scoresSorted[i][1];
      toAdd.appendChild(newDiv);
    };
    board.appendChild(toAdd);
  } else {
    board.textContent = "Scoreboard empty, get quizzing!";
    return;
  };
};

//view highscores at any time
function showScore() {
  opening.setAttribute("style", "display:none");
  quiz.setAttribute("style", "display:none");
  submission.setAttribute("style", "display:none");
  scoreboard.setAttribute("style", "display:block");
  clearInterval(timerInterval);
}

//erase local memory
function clearScore() {
  localStorage.clear();
  drawScore();
};

//reset quiz to initial state
function stage() {
  console.log("Staging.")
  opening.setAttribute("style", "display:block");
  quiz.setAttribute("style", "display:none");
  submission.setAttribute("style", "display:none");
  scoreboard.setAttribute("style", "display:none");
  feedback.textContent = ""
  initial.setAttribute("placeholder", "");
  username = "";
  score = 0;
  current = 0;
  seconds = 60;
  win = false;
  timer.textContent = 60;
};

//navigate
start.addEventListener("click", runQuiz);
button0.addEventListener("click", gradeQuiz);
button1.addEventListener("click", gradeQuiz);
button2.addEventListener("click", gradeQuiz);
button3.addEventListener("click", gradeQuiz);
show.addEventListener("click", showScore)
submit.addEventListener("click", submitScore);
submit.addEventListener("click", drawScore);
clear.addEventListener("click", clearScore);
back.addEventListener("click", stage)

//initialize
stage();
drawScore();
>>>>>>> 50d3bddb48c17762effad51c5d9d2a60a9cbdd7f
