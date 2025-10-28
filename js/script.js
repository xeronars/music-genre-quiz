console.log("script.js connected!");

const questionBlocks = document.querySelectorAll(".question-block");

const userAnswers = {};

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("selected", "btn-primary");
        b.classList.add("btn-outline-primary");
      });

      button.classList.remove("btn-outline-primary");
      button.classList.add("btn-primary", "selected");

      userAnswers[`question${index + 1}`] = button.dataset.answer;

      console.log(`Question ${index + 1}: ${button.dataset.answer}`);
    });
  });
});

function displayResult() {
  const totalQuestions = questionBlocks.length;
  const answers = Object.values(userAnswers);

  if (answers.length < totalQuestions) {
    alert("Please answer all questions before showing your result!");
    return;
  }

  let scoreA = 0;
  let scoreB = 0;
  let scoreC = 0;
  let scoreD = 0;

  answers.forEach((answer) => {
    if (answer === "A") scoreA++;
    else if (answer === "B") scoreB++;
    else if (answer === "C") scoreC++;
    else if (answer === "D") scoreD++;
  });

  const topScore = Math.max(scoreA, scoreB, scoreC, scoreD);

  let resultText = "";

  if (topScore === scoreA) {
    resultText = "Rock";
  } else if (topScore === scoreB) {
    resultText = "Pop";
  } else if (topScore === scoreC) {
    resultText = "Lo-Fi and Indie";
  } else if (topScore === scoreD) {
    resultText = "Hip-Hop and R&B";
  }

  const resultContainer = document.getElementById("result-container");
  const resultTextElement = document.getElementById("result-text");
  resultTextElement.textContent = resultText;
  resultContainer.style.display = "block";

  console.log("Result:", resultText);
}

const showResultBtn = document.getElementById("show-result");
showResultBtn.addEventListener("click", displayResult);
