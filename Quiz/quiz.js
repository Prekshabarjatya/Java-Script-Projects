// Quiz Questions
const questions = [
  {
    question: "What is the output of 2 + '2'?",
    options: ["A. 4", "B. 22", "C. Error", "D. NaN"],
    answer: "B"
  },
  {
    question: "Which keyword declares a constant?",
    options: ["A. var", "B. let", "C. const", "D. static"],
    answer: "C"
  },
  {
    question: "What does typeof null return?",
    options: ["A. null", "B. object", "C. undefined", "D. number"],
    answer: "B"
  },
  {
    question: "Which is a comparison operator?",
    options: ["A. &&", "B. =", "C. ===", "D. +"],
    answer: "C"
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["A. //", "B. /**/", "C. <!-- -->", "D. #"],
    answer: "A"
  }
];

let score = 0;
alert("🎉 Welcome to the JavaScript Quiz!");

for (let i = 0; i < questions.length; i++) {
  const q = questions[i];
  const userAnswer = prompt(
    `Q${i + 1}: ${q.question}\n${q.options.join('\n')}\nYour answer (A/B/C/D):`
  );

  if (userAnswer && userAnswer.toUpperCase() === q.answer) {
    alert("✅ Correct!");
    score++;
  } else {
    alert(`❌ Wrong! The correct answer was ${q.answer}`);
  }
}

alert(`🏁 Quiz Over!\nYour score: ${score}/${questions.length}`);
