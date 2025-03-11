import React, { useState, useEffect } from "react";
import "../components/style/Quiz.css";
import questionsMock from "../mockers/questionsMock";

const Quiz = () => {
  const [questions, setQuestions] = useState([]); // Ok
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Mais descritivo

  const shuffleQuestions = (questionArray) => {
    return questionArray.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    const shuffledQuestions = shuffleQuestions(questionsMock).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);


  const handleQuestionNavigation = (event) => {
    setCurrentQuestionIndex((prevIndex) => {
      let newIndex;
  
      if (event.target.classList.contains("next-question")) {
        newIndex = prevIndex + 1;
      } else if (event.target.classList.contains("previous-question")) {
        newIndex = prevIndex - 1;
      }
  
      // limit of array
      if (newIndex >= questions.length) {
        return 0;
      } else if (newIndex < 0) {
        return questions.length - 1; // Se for menor que 0, volta para o último.
      }
  
      return newIndex;
    });
  };


  return (
    <div>
         <div className="question-numbers">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`question-number ${currentQuestionIndex === index ? 'active' : ''}`}
                onClick={() => handleQuestionNavigation(index)} // Ao clicar no número, muda a questão
              >
                {index + 1}
              </div>
            ))}
          </div>

          <button 
          className="previous-question"
          onClick={handleQuestionNavigation}>
            Questão Anterior
          </button>
          
          <button 
          className="next-question"
          onClick={handleQuestionNavigation}>
            Próxima Questão
          </button>
    </div>
  );
};

export default Quiz;
