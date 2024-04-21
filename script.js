// Newjeans quiz

// HTML variables
let memberEl = document.getElementById("answer");
let debutSongEl = document.getElementById("answer2");
let guessMemberEl = document.getElementById("answer3");
let getUpAlbum = document.getElementById("answer4");
let finalScoreSpan = document.getElementById("finalScore");
let message = document.getElementById("quizFeedback");

// Score count variable
let finalScore = 0;

// Event listener
document.getElementById("btn").addEventListener("click", markQuizBtn);

function markQuizBtn() {
  // check question 1
  let nwjs1 = document.getElementById("question1").value;
  let nwjs2 = document.getElementById("question2").value.toLowerCase();
  let nwjs3 = document.getElementById("question3").value.toLowerCase();
  let nwjs4 = document.getElementById("question4").value.toLowerCase();

  if (nwjs1 == 5) {
    memberEl.innerHTML = "correct";
    document.getElementById("answer").style.color = "green";
    document.getElementById("question1").style.border = "2px solid green";
    finalScore++;
    finalScoreSpan.innerHTML = finalScore;
  } else {
    memberEl.innerHTML = "incorrect";
    document.getElementById("answer").style.color = "red";
    document.getElementById("question1").style.border = "2px solid red";
  }

  // check question 2

  if (nwjs2 === "attention") {
    debutSongEl.innerHTML = "correct";
    document.getElementById("answer2").style.color = "green";
    document.getElementById("question2").style.border = "2px solid green";
    finalScore++;
    finalScoreSpan.innerHTML = finalScore;
  } else {
    debutSongEl.innerHTML = "incorrect";
    document.getElementById("answer2").style.color = "red";
    document.getElementById("question2").style.border = "2px solid red";
  }

  // check question 3

  if (
    nwjs3 === "haerin" ||
    nwjs3 === "kang haerin" ||
    nwjs3 === "vanessa kang"
  ) {
    guessMemberEl.innerHTML = "correct";
    document.getElementById("answer3").style.color = "green";
    document.getElementById("question3").style.border = "2px solid green";
    finalScore++;
    finalScoreSpan.innerHTML = finalScore;
  } else {
    guessMemberEl.innerHTML = "incorrect";
    document.getElementById("answer3").style.color = "red";
    document.getElementById("question3").style.border = "2px solid red";
  }

  // check question 4
  if (
    nwjs4 === "new jeans" ||
    nwjs4 === "super shy" ||
    nwjs4 === "eta" ||
    nwjs4 === "cool with you" ||
    nwjs4 === "get up" ||
    nwjs4 === "asap"
  ) {
    getUpAlbum.innerHTML = "correct";
    document.getElementById("answer4").style.color = "green";
    document.getElementById("question4").style.border = "2px solid green";
    finalScore++;
    finalScoreSpan.innerHTML = finalScore;
  } else {
    getUpAlbum.innerHTML = "incorrect";
    document.getElementById("answer4").style.color = "red";
    document.getElementById("question4").style.border = "2px solid red";
  }

  // calculate percentage
  let percentage = (finalScoreSpan.innerHTML / 4) * 100;
  document.getElementById("finalPercentage").innerHTML =
    "(" + percentage + "%" + ")";

  // quiz feedback message
  if (finalScoreSpan.innerHTML == 4) {
    message.innerHTML = "good job!";
  } else if (finalScoreSpan.innerHTML == 3) {
    message.innerHTML = "you did okay";
  } else if (finalScoreSpan.innerHTML == 2) {
    message.innerHTML = "refresh the page and try again";
  } else if (finalScoreSpan.innerHTML == 1) {
    message.innerHTML =
      "go back to doing your research and then redo this quiz. this was disappointing";
  } else {
    message.innerHTML = "do you even know newjeans?";
  }
}
