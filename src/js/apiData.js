const API_KEY = "h6uOqxFmiKFv1eTs70GbdYPImaqJ6JcrAr1voFJJ";
const url = "https://quizapi.io/api/v1/questions?difficulty=Medium&limit=10";

export let totalQuestions = 0;
export let data = [];

export const reloadAnswers = () => {
  fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao buscar as perguntas: " + response.status);
      }
      return response.json();
    })
    .then((responseData) => {
      console.log("Sucess! Api Data (Se quiser tbm né):", responseData);

      data = responseData;
      totalQuestions = data.length;
    })
    .catch((error) => {
      console.error("Deu ruim na API, e eu não sei resolver. Error = :", error);
    });
};
