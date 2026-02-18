import { playBackground, playSound } from "./sound.js";
import {
  correctQuestion,
  percentPoints,
  points,
  punctuation,
  wrongQuestion,
  wrong,
  reset,
} from "./punctuation.js";
import {
  loadMockData,
  data,
  totalQuestions,
  reloadAnswers,
} from "./apiData.js";
import { renderQuestionCard } from "./render.js";

let currentQuestionIndex = 0;

const currentPercentValue = document.querySelector(".percent-value");

const allScreens = document.querySelectorAll(".screen");

const currentAnswerValue = document.querySelector(".score-card__hits");

function disableSubmitButton() {
  submitBtn.setAttribute("disabled", "");
}

function enableSubmitButton() {
  submitBtn.removeAttribute("disabled");
}

document.addEventListener("change", (event) => {
  if (event.target.name === "answers") {
    enableSubmitButton();
  }
});

function goTo(idTarget) {
  allScreens.forEach((screen) => {
    screen.classList.add("hidden");
  });

  const screenTarget = document.getElementById(idTarget);
  screenTarget.classList.remove("hidden");
}

const initialBtn = document.querySelector(".play-screen__btn-play");
initialBtn.addEventListener("click", () => {
  playBackground();
  playSound("click");
  reloadAnswers();
  renderQuestionCard(data[currentQuestionIndex]);
  goTo("gameScreen");
});

const submitBtn = document.querySelector(".game-controls__btn--sub");
submitBtn.addEventListener("click", () => {
  playSound("click");

  const respostaSelecionada = document.querySelector(
    'input[name="answers"]:checked',
  );

  if (!respostaSelecionada) {
    alert("Hey! Select one option!");
    return;
  }

  if (respostaSelecionada.value === "true") {
    playSound("correct");
    correctQuestion();
    console.log("correct");
  } else {
    playSound("wrong");
    wrongQuestion();
    console.log("wrong");
  }

  currentPercentValue.innerHTML = percentPoints(points);

  if (points > 1) {
    currentAnswerValue.innerHTML = `You got ${points} answers corrects`;
  } else {
    currentAnswerValue.innerHTML = `You got ${points} answer correct`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < totalQuestions) {
    renderQuestionCard(data[currentQuestionIndex]);
    disableSubmitButton();
  } else {
    const currentQuestions = document.querySelector(
      ".stat-box--value-questions",
    );
    currentQuestions.innerHTML = totalQuestions;

    const currentCorrectQuestions = document.querySelector(
      ".stat-box--value-correct",
    );
    currentCorrectQuestions.innerHTML = points;

    const currentWrongQuestions = document.querySelector(
      ".stat-box--value-wrong",
    );
    currentWrongQuestions.innerHTML = wrong;

    const currentPoints = document.querySelector(".result-card--value");
    currentPoints.innerHTML = punctuation(points);

    currentQuestionIndex = 0;

    playSound("finished");
    playSound("finished_alt");
    goTo("winScreen");
  }
});

const resultBtn = document.querySelector(".result-card__return-btn");
resultBtn.addEventListener("click", () => {
  playSound("click");
  reset();
  goTo("playScreen");
});
