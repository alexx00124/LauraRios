// script.js
class MillionaireGame {
  constructor() {
    this.currentQuestion = 0;
    this.score = 0;
    this.questions = [
      {
        question: "¿Cómo se dice 'libro' en inglés?",
        answers: ["Book", "Pen", "Paper", "Table"],
        correct: 0,
        value: 2000,
      },
      {
        question: "Which animal lays eggs?",
        answers: ["Dog", "Cat", "Hen", "Cow"],
        correct: 2,
        value: 50000,
      },
      {
        question: "¿Cómo se dice 'papá' en inglés?",
        answers: ["Dad", "Brother", "Uncle", "Man"],
        correct: 0,
        value: 50000,
      },
      {
        question: "Which bin do we use to recycle glass bottles?",
        answers: ["Yellow", "Green", "Blue", "Gray"],
        correct: 1,
        value: 20000,
      },
      {
        question: "¿Cómo se dice 'árbol' en inglés?",
        answers: ["Flower", "Tree", "Grass", "Leaf"],
        correct: 1,
        value: 3000,
      },
      {
        question: "Which animal is called the king of the jungle?",
        answers: ["Tiger", "Lion", "Elephant", "Jaguar"],
        correct: 1,
        value: 5000,
      },
      {
        question: "¿Cómo se dice 'mamá' en inglés?",
        answers: ["Sister", "Mom", "Teacher", "Girl"],
        correct: 1,
        value: 20000,
      },
      {
        question: "What do we need to protect to keep the air clean?",
        answers: ["Forests", "Roads", "Buildings", "Garbage piles"],
        correct: 0,
        value: 1000000,
      },
      {
        question: "¿Cómo se dice 'amigo' en inglés?",
        answers: ["Friend", "Brother", "Teacher", "Family"],
        correct: 0,
        value: 1000000,
      },
      {
        question: "¿Cómo se dice 'casa' en inglés?",
        answers: ["House", "Room", "Door", "Street"],
        correct: 0,
        value: 10000,
      },
      {
        question: "What gas do plants make during photosynthesis?",
        answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correct: 0,
        value: 2000,
      },
      {
        question: "¿Cómo se dice 'pájaro' en inglés?",
        answers: ["Bird", "Fish", "Dog", "Lion"],
        correct: 0,
        value: 500000,
      },
      {
        question: "What color are most leaves?",
        answers: ["Blue", "Red", "Green", "Yellow"],
        correct: 2,
        value: 1000,
      },
      {
        question: "¿Cómo se dice 'agua' en inglés?",
        answers: ["Water", "Milk", "Juice", "Air"],
        correct: 0,
        value: 5000,
      },
      {
        question: "Which part of a tree takes water from the soil?",
        answers: ["Branches", "Leaves", "Roots", "Flowers"],
        correct: 2,
        value: 500000,
      },
      {
        question: "¿Cómo se dice 'mañana' en inglés?",
        answers: ["Night", "Morning", "Day", "Today"],
        correct: 1,
        value: 500000,
      },
      {
        question: "What is the main source of energy for Earth?",
        answers: ["The Moon", "The Sun", "The Wind", "The Sea"],
        correct: 1,
        value: 10000,
      },
      {
        question: "¿Cómo se dice 'fútbol' en inglés?",
        answers: ["Soccer", "Basketball", "Tennis", "Baseball"],
        correct: 0,
        value: 1000,
      },
      {
        question: "Which of these is a renewable resource?",
        answers: ["Oil", "Water", "Coal", "Iron"],
        correct: 1,
        value: 3000,
      },
      {
        question: "¿Cómo se dice 'gracias' en inglés?",
        answers: ["Please", "Thanks", "Hello", "Goodbye"],
        correct: 1,
        value: 1000000,
      },
      {
        question: "¿Cómo se dice 'silla' en inglés?",
        answers: ["Chair", "Bed", "Table", "Window"],
        correct: 0,
        value: 5000,
      },
      {
        question: "Which of these animals lives in the ocean?",
        answers: ["Dolphin", "Eagle", "Fox", "Camel"],
        correct: 0,
        value: 100000,
      },
      {
        question: "¿Cómo se dice 'escuela' en inglés?",
        answers: ["School", "Class", "Teacher", "Book"],
        correct: 0,
        value: 1000,
      },
      {
        question: "What is the main source of energy for Earth?",
        answers: ["The Moon", "The Sun", "The Wind", "The Sea"],
        correct: 1,
        value: 10000,
      },
      {
        question: "¿Cómo se dice 'sol' en inglés?",
        answers: ["Moon", "Star", "Sun", "Light"],
        correct: 2,
        value: 50000,
      },
      {
        question: "¿Cómo se dice 'niño' en inglés?",
        answers: ["Girl", "Boy", "Baby", "Friend"],
        correct: 1,
        value: 100000,
      },
      {
        question: "¿Cómo se dice 'cielo' en inglés?",
        answers: ["Cloud", "Sky", "Sun", "Moon"],
        correct: 1,
        value: 20000,
      },
      {
        question: "What do we need to protect to keep the air clean?",
        answers: ["Forests", "Roads", "Buildings", "Garbage piles"],
        correct: 0,
        value: 1000000,
      },
      {
        question: "¿Cómo se dice 'flor' en inglés?",
        answers: ["Tree", "Grass", "Flower", "Leaf"],
        correct: 2,
        value: 100000,
      },
      {
        question: "¿Cómo se dice 'perro' en inglés?",
        answers: ["Cat", "Dog", "Bird", "Fish"],
        correct: 1,
        value: 2000,
      },
    ];
    this.initializeGame();
  }

  initializeGame() {
    this.bindEvents();
    this.showQuestion();
  }

  bindEvents() {
    // Answer buttons
    document.querySelectorAll(".answer-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => this.selectAnswer(e));
    });

    // Control buttons
    document
      .getElementById("nextBtn")
      .addEventListener("click", () => this.nextQuestion());
    document
      .getElementById("restartBtn")
      .addEventListener("click", () => this.restartGame());
    document
      .getElementById("playAgainBtn")
      .addEventListener("click", () => this.restartGame());
  }

  showQuestion() {
    if (this.currentQuestion >= this.questions.length) {
      this.endGame(true); // Win condition
      return;
    }

    const question = this.questions[this.currentQuestion];

    // Update question number and current score display
    document.getElementById("questionNumber").textContent =
      this.currentQuestion + 1;
    document.getElementById("currentScore").textContent =
      this.score.toLocaleString();

    // Show question text
    document.getElementById("questionText").textContent = question.question;

    // Show answers
    const answerButtons = ["answerA", "answerB", "answerC", "answerD"];
    answerButtons.forEach((btnId, index) => {
      const btn = document.getElementById(btnId);
      const answerText = btn.querySelector(".answer-text");
      answerText.textContent = question.answers[index];

      // Reset button states
      btn.classList.remove("selected", "correct", "incorrect");
      btn.disabled = false;
    });

    // Hide next button
    document.getElementById("nextBtn").style.display = "none";
  }

  selectAnswer(event) {
    const selectedBtn = event.currentTarget;
    const selectedAnswer = parseInt(
      selectedBtn.dataset.answer === "a"
        ? 0
        : selectedBtn.dataset.answer === "b"
        ? 1
        : selectedBtn.dataset.answer === "c"
        ? 2
        : 3
    );

    // Disable all buttons
    document.querySelectorAll(".answer-btn").forEach((btn) => {
      btn.disabled = true;
    });

    // Mark selected answer
    selectedBtn.classList.add("selected");

    // Show correct answer after delay
    setTimeout(() => {
      this.revealAnswer(selectedAnswer);
    }, 1000);
  }

  revealAnswer(selectedAnswer) {
    const question = this.questions[this.currentQuestion];
    const correctAnswer = question.correct;
    const answerButtons = document.querySelectorAll(".answer-btn");

    // Highlight correct answer
    answerButtons[correctAnswer].classList.add("correct");

    // If wrong answer was selected, highlight it as incorrect
    if (selectedAnswer !== correctAnswer) {
      answerButtons[selectedAnswer].classList.add("incorrect");

      setTimeout(() => {
        this.endGame(false); // Game over
      }, 2000);
    } else {
      // Correct answer - add points and show next button
      this.score += question.value;
      document.getElementById("currentScore").textContent =
        this.score.toLocaleString();

      setTimeout(() => {
        document.getElementById("nextBtn").style.display = "block";
      }, 1500);
    }
  }

  nextQuestion() {
    this.currentQuestion++;
    this.showQuestion();
  }

  endGame(won) {
    document.getElementById("gameScreen").classList.remove("active");

    if (won) {
      document.getElementById("winScreen").classList.add("active");
    } else {
      document.getElementById(
        "finalScore"
      ).textContent = `Your final score: $${this.score.toLocaleString()}`;

      let message;
      if (this.score === 0) {
        message = "Better luck next time!";
      } else if (this.score < 10000) {
        message = "Not bad for a beginner!";
      } else if (this.score < 100000) {
        message = "Good job! You're getting there!";
      } else {
        message = "Excellent performance!";
      }

      document.getElementById("gameOverMessage").textContent = message;
      document.getElementById("gameOverScreen").classList.add("active");
    }
  }

  restartGame() {
    // Reset game state
    this.currentQuestion = 0;
    this.score = 0;

    // Hide end screens
    document.getElementById("gameOverScreen").classList.remove("active");
    document.getElementById("winScreen").classList.remove("active");

    // Show game screen
    document.getElementById("gameScreen").classList.add("active");

    // Start new game
    this.showQuestion();
  }
}

// Initialize game when page loads
document.addEventListener("DOMContentLoaded", () => {
  new MillionaireGame();
});
