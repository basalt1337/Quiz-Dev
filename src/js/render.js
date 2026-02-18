export const renderQuestionCard = (questionObject) => {
  const questionText = document.getElementById("question-text");
  const answersContainer = document.getElementById("answers-container");

  questionText.innerText = questionObject.question;

  answersContainer.innerHTML = "";

  const answers = questionObject.answers;
  const correctAnswers = questionObject.correct_answers;

  for (const [key, value] of Object.entries(answers)) {
    if (value !== null) {
      const isCorrect = correctAnswers[`${key}_correct`] === "true";

      const htmlOption = `
        <input
          type="radio"
          id="${key}"
          class="question-card__input"
          name="answers"
          value="${isCorrect}"
        />
        <label for="${key}" class="question-card__label">${value}</label><br />
      `;

      answersContainer.insertAdjacentHTML("beforeend", htmlOption);
    }
  }
};
