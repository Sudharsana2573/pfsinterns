const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "Leo Tolstoy", "William Shakespeare", "Mark Twain"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the square root of 16?",
    options: ["2", "3", "4", "5"],
    answer: "4",
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

function startQuiz() {
  showQuestion();
  startTimer();
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const currentQuestion = quizData[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionBtn = document.createElement("button");
    optionBtn.classList.add("btn");
    optionBtn.textContent = option;
    optionBtn.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(optionBtn);
  });
}

function checkAnswer(selectedAnswer) {
  const currentQuestion = quizData[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.answer) {
    score++;
  }

  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
    resetTimer();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
  document.getElementById("score").textContent = `Your score is ${score} out of ${quizData.length}`;
}

function startTimer() {
  timeLeft = 30;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;

    if (timeLeft <= 0) {
      nextQuestion();
      resetTimer();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  startTimer();
}

// Initialize the quiz
startQuiz();
