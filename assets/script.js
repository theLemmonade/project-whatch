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