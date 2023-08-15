function checkAnswer() {
  const answer = document.getElementById("answer-input").value;
  if (answer.toLowerCase() == "paris") {
    document.getElementById("result").innerHTML = "Correct!";
  } else {
    document.getElementById("result").innerHTML = "Incorrect.";
  }
}

function checkAnswer2() {
  const answer = document.getElementById("answer-input2").value;
  if (answer == "81") {
    document.getElementById("result-2").innerHTML = "Correct!";
  } else {
    document.getElementById("result-2").innerHTML = "Incorrect..";
  }
}