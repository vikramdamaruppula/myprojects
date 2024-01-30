import React, { useState } from "react";

// const questions = [
//     {
//       question: "What is the capital of France?",
//       options: ["Paris", "Berlin", "Madrid", "Rome"],
//       answer: 0
//     },
//     {
//       question: "What is the largest planet in our solar system?",
//       options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
//       answer: 0
//     },
//     {
//       question: "What is the smallest country in the world?",
//       options: ["Monaco", "Malta", "Vatican City", "San Marino"],
//       answer: 2
//     },
//     {
//       question: "What is the highest mountain in the world?",
//       options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
//       answer: 0
//     },
//     {
//       question: "What is the currency of Japan?",
//       options: ["Yuan", "Euro", "Dollar", "Yen"],
//       answer: 3
//     },
//     {
//       question: "What is the capital of France?",
//       options: ["Paris", "Berlin", "Madrid", "Rome"],
//       answer: 0
//     },
//     {
//       question: "What is the largest planet in our solar system?",
//       options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
//       answer: 0
//     },
//     {
//       question: "What is the smallest country in the world?",
//       options: ["Monaco", "Malta", "Vatican City", "San Marino"],
//       answer: 2
//     },
//     {
//       question: "What is the highest mountain in the world?",
//       options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
//       answer: 0
//     },
//     {
//       question: "What is the currency of Japan?",
//       options: ["Yuan", "Euro", "Dollar", "Yen"],
//       answer: 3
//     }
//   ];
  

// import questions from "./questions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const firstQ = currentQuestion===0 ? 
   ( <div>  <button disabled>Back</button>  <button>Next</button> </div> ) :
   ( <div>  <button>Back</button>  <button>Next</button> </div> ) ||
   (currentQuestion===9 ?  ( <div>  <button disabled>Back</button>  <button>Next</button> </div> ) :
   ( <div>  <button>Back</button>  <button>Next</button> </div> ))

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() =>
                  handleAnswerOptionClick(index === questions[currentQuestion].answer)
                }
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {firstQ}
    </div>
  );
}

export default Quiz;
