const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "O2", "CO2"],   // 3 choices
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "Which continent is the Sahara Desert located in?",
    choices: ["Asia", "Africa", "Australia"],  // 3 choices
    answer: "Africa"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["Abraham Lincoln", "Thomas Jefferson", "George Washington"],  // 3 choices
    answer: "George Washington"
  },
  {
    category: "Mathematics",
    question: "What is the square root of 64?",
    choices: ["6", "8", "7"],  // 3 choices
    answer: "8"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Jane Austen", "Charles Dickens"],  // 3 choices
    answer: "William Shakespeare"
  }
];


function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, choice) {
  if (choice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
