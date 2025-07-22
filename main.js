function checkAnswer() {
  // Get all the selected answers
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;
  let q4 = document.getElementById("q4").value;
  let q5 = document.getElementById("q5").value;
  
  // Store correct answers
  const correctAnswers = ["apple", "banana", "orange", "strawberry", "grape"];
  const userAnswers = [q1, q2, q3, q4, q5];
  
  let questions = document.getElementsByClassName("questions");
  let score = 0;
  
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score++;
      questions[i].style.backgroundColor = "#00FF00"; // light green
    } else {
      questions[i].style.backgroundColor = "#ff0000"; // light red
    }
  }
  
  // Display the score
  document.getElementById("scoreDisplay").innerHTML = `You scored ${score} out of 5 🎉`;
}

function resetQuiz() {
  // Clear all selects
  for (let i = 1; i <= 5; i++) {
    document.getElementById("q" + i).value = "";
  }
  
  // Clear colors
  let questions = document.getElementsByClassName("questions");
  for (let i = 0; i < questions.length; i++) {
    questions[i].style.backgroundColor = "#16213E";
  }
  
  // Clear score
  document.getElementById("scoreDisplay").innerHTML = "";
}
