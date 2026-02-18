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
      console.log("Api Data:", responseData);

      data = responseData;
      totalQuestions = questions.length;
    })
    .catch((error) => {
      console.error("Deu ruim na API, e eu não sei resolver. Error = :", error);
    });
};

export const loadMockData = () => {
  data = [
    {
      id: 3381,
      question:
        "Which command is used to display the current routing table in Ubuntu?",
      description:
        "Viewing the routing table helps in understanding how packets are directed between networks.",
      answers: {
        answer_a: "Use 'ip route show'",
        answer_b: "Run 'netstat -r'",
        answer_c: "Type 'route list'",
        answer_d: "Use 'showroutes'",
        answer_e: "Use crowsbar.table'",
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation: "To display the current routing table, use 'ip route show'.",
      tip: null,
      tags: [
        {
          name: "Ubuntu",
        },
      ],
      category: "bash",
      difficulty: "Medium",
    },
    {
      id: 4167,
      question:
        "Your Next.js app needs to handle complex form state across multiple steps. Which pattern is most maintainable?",
      description: "Understanding form state management patterns.",
      answers: {
        answer_a: "Multiple useState hooks",
        answer_b: "FormContext with reducer pattern and step validation",
        answer_c: "Single large state object",
        answer_d: "Local storage only",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation:
        "Using FormContext with a reducer pattern and step validation provides centralized state management, predictable updates, and validation logic separation, making complex multi-step forms more maintainable.",
      tip: null,
      tags: [
        {
          name: "Next.js",
        },
      ],
      category: "Next.js",
      difficulty: "Medium",
    },
    {
      id: 3584,
      question:
        "Which command is used to install security updates automatically in Ubuntu?",
      description:
        "Installing security updates automatically helps in keeping the system secure without manual intervention.",
      answers: {
        answer_a:
          "Install 'unattended-upgrades' and configure it by editing '/etc/apt/apt.conf.d/50unattended-upgrades'",
        answer_b: "Run 'auto-update'",
        answer_c: "Type 'secure-update enable'",
        answer_d: "Use 'set-updates auto'",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation:
        "To install security updates automatically, install and configure 'unattended-upgrades'.",
      tip: null,
      tags: [
        {
          name: "Ubuntu",
        },
      ],
      category: "Docker",
      difficulty: "Medium",
    },
    {
      id: 20,
      question:
        "When looking for all the processes running on a Linux system, what command should you use?",
      description: null,
      answers: {
        answer_a: "service",
        answer_b: "oterm",
        answer_c: "ps",
        answer_d: "xrun",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "false",
        answer_c_correct: "true",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: "answer_c",
      explanation: null,
      tip: null,
      tags: [
        {
          name: "Linux",
        },
      ],
      category: "Linux",
      difficulty: "Medium",
    },
    {
      id: 2309,
      question:
        "In PostgreSQL, what's the primary advantage of using DOMAIN types?",
      description: "Understanding custom data types in PostgreSQL.",
      answers: {
        answer_a: "They improve query performance",
        answer_b: "They enforce data validation rules across multiple tables",
        answer_c: "They reduce storage space",
        answer_d: "They enable full-text search",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation:
        "DOMAIN types allow you to define reusable data validation rules that can be applied consistently across multiple tables, ensuring data integrity and reducing code duplication in CHECK constraints.",
      tip: null,
      tags: [
        {
          name: "Postgres",
        },
      ],
      category: "Postgres",
      difficulty: "Medium",
    },
    {
      id: 6982,
      question: "What's the best way to handle large messages in Kafka?",
      description: "Managing large message patterns.",
      answers: {
        answer_a: "Split into smaller messages",
        answer_b: "Use compression with appropriate max.message.bytes",
        answer_c: "Store externally",
        answer_d: "Increase partition count",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "false",
        answer_b_correct: "true",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation:
        "Using compression with properly configured max.message.bytes provides efficient handling of large messages while maintaining Kafka's performance characteristics.",
      tip: null,
      tags: [
        {
          name: "Apache Kafka",
        },
      ],
      category: "Apache Kafka",
      difficulty: "Medium",
    },
    {
      id: 8438,
      question:
        "Which of the following is a correct way to define an anonymous function?",
      description:
        "Understanding the correct syntax for anonymous functions in PHP.",
      answers: {
        answer_a: "function() { echo 'Hello'; }",
        answer_b: "anon function() { echo 'Hello'; }",
        answer_c: "lambda() { echo 'Hello'; }",
        answer_d: "def() { echo 'Hello'; }",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation:
        "Anonymous functions (closures) are defined using 'function() {}' in PHP.",
      tip: null,
      tags: [
        {
          name: "PHP",
        },
      ],
      category: "Code",
      difficulty: "Medium",
    },
    {
      id: 2724,
      question:
        "How do you return a paginated response manually in a Django REST Framework view?",
      description:
        "Manually returning a paginated response can be useful when you need more control over pagination logic.",
      answers: {
        answer_a: "Use the paginator instance and call paginate_queryset()",
        answer_b: "Set pagination_class in the view",
        answer_c: "Override the get_queryset() method",
        answer_d: "Use the @paginated_response decorator",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation:
        "To manually return a paginated response, use the paginator instance in the view and call paginate_queryset() to apply pagination to the queryset.",
      tip: null,
      tags: [
        {
          name: "Django",
        },
      ],
      category: "Django",
      difficulty: "Medium",
    },
    {
      id: 2951,
      question:
        "What is the purpose of the process_exception() method in Django middleware?",
      description:
        "The process_exception() method allows middleware to handle exceptions raised during request processing.",
      answers: {
        answer_a: "To handle exceptions and return custom responses",
        answer_b: "To modify request headers",
        answer_c: "To process templates",
        answer_d: "To log user activities",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation:
        "The process_exception() method is called when a view raises an exception, allowing middleware to handle the exception and return a custom response if needed.",
      tip: null,
      tags: [
        {
          name: "Django",
        },
      ],
      category: "Django",
      difficulty: "Medium",
    },
    {
      id: 5947,
      question:
        "Which method would you use to convert a reactive object's property to a ref?",
      description:
        "Understanding how to create a ref for a property inside a reactive object.",
      answers: {
        answer_a: "Use 'toRef()' to convert a reactive property into a ref",
        answer_b: "Use 'toRefs()' on the entire object",
        answer_c: "Use 'computed()' on the property",
        answer_d: "Wrap the property in 'markRaw()'",
        answer_e: null,
        answer_f: null,
      },
      multiple_correct_answers: "false",
      correct_answers: {
        answer_a_correct: "true",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
      },
      correct_answer: null,
      explanation:
        "'toRef()' creates a reference to a single property inside a reactive object, allowing you to work with it as a ref.",
      tip: null,
      tags: [
        {
          name: "VueJS",
        },
      ],
      category: "VueJS",
      difficulty: "Medium",
    },
  ];

  totalQuestions = data.length;
  console.log("Mock data loaded with sucess! Data: ", data);
};
