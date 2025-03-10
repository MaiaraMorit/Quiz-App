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


  const handleQuestionClick = (index) => {
    setCurrentQuestionIndex(index); // Muda o índice da questão atual
    console.log("Pergunta selecionada:", questions[index]); // Exibe a pergunta no console
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % questions.length;
      console.log("proxima questao com button:", questions[newIndex]);
      return newIndex;
    }); // Avança para a próxima questão
  };

  return (
    <div>
         <div className="question-numbers">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`question-number ${currentQuestionIndex === index ? 'active' : ''}`}
                onClick={() => handleQuestionClick(index)} // Ao clicar no número, muda a questão
              >
                {index + 1}
              </div>
            ))}
          </div>

          <button onClick={handleNextQuestion}>Próxima Questão</button>
    </div>
  );
};

export default Quiz;
