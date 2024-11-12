// src/components/Question.js
import React from "react";

function Question({ question, onAnswerSelect }) {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswerSelect(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
