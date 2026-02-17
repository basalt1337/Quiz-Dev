const API_KEY = "h6uOqxFmiKFv1eTs70GbdYPImaqJ6JcrAr1voFJJ";
const url = "https://quizapi.io/api/v1/questions?difficulty=Medium&limit=10";

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
    .then((data) => {
      console.log("Api Data:", data);
    })
    .catch((error) => {
      console.error("Deu ruim na API, e eu não sei resolver. Error = :", error);
    });
}

export const mockData = () => {
  
}
