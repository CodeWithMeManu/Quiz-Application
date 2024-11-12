// src/components/Quiz.js
import React, { useState } from "react";
import { questions } from "../data";
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);

    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <Result
          questions={questions}
          selectedAnswers={selectedAnswers}
          onRestart={handleRestart}
        />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
        />
      )}
    </div>
  );
}

export default Quiz;
