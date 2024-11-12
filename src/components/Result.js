// src/components/Result.js
import React from "react";

function Result({ questions, selectedAnswers, onRestart }) {
  const correctAnswersCount = questions.reduce((count, question, index) => {
    return count + (question.answer === selectedAnswers[index] ? 1 : 0);
  }, 0);

  const feedbackMessage =
    correctAnswersCount === questions.length
      ? "Excellent!"
      : correctAnswersCount >= 3
      ? "Well done!"
      : "Try again";

  return (
    <div className="result">
      <h2>Quiz Results</h2>
      <p>
        You got {correctAnswersCount} out of {questions.length} correct.
      </p>
      <p>{feedbackMessage}</p>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {question.question} - Your Answer: {selectedAnswers[index]}{" "}
            {selectedAnswers[index] === question.answer
              ? "(Correct)"
              : "(Incorrect)"}
          </li>
        ))}
      </ul>
      <button className="restartbutton" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
