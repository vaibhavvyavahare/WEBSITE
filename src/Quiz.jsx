import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import './App.css';

const questions = [
  {
    id: 1,
    question: "What is the National Cyber Crime Reporting Portal helpline number?",
    options: ["100", "112", "1930", "1098"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Where can you lodge a formal cyber crime complaint online?",
    options: ["police.gov.in", "cybercrime.gov.in", "cyber.in", "india.gov.in"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which of the following is considered a safe practice for online passwords?",
    options: ["Using your birthdate", "Using a common word like 'password'", "Reusing the same password", "Using a mix of letters, numbers, and symbols"],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "What does Section 66 of the IT Act primarily deal with?",
    options: ["Identity Theft", "Hacking & Computer Related Offences", "Online Shopping", "Copyright Infringement"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What should you do if you receive an email from an unknown source asking for bank details?",
    options: ["Reply with the details", "Click the provided link and fill the form", "Ignore, delete, and report", "Forward it to friends for advice"],
    correctAnswer: 2
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <section id="quiz" className="quiz-section">
      <center>
        <span className="badge">Knowledge Test</span>
        <h2>Cyber Safety <span className="gradient-text">Quiz</span></h2>
        <p className="section-desc">Test your knowledge about cyber laws and safety practices.</p>
      </center>
      
      <div className="quiz-container glass">
        {showResult ? (
          <motion.div 
            className="quiz-result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3>Quiz Completed!</h3>
            <div className="score-display">
              <span className="score-number">{score}</span>
              <span className="score-total">/ {questions.length}</span>
            </div>
            <p className="score-message">
              {score === questions.length ? "Excellent! You are a Cyber Safety Expert." : 
               score >= questions.length / 2 ? "Good job! But there's still room to learn more." : 
               "You should review the cyber safety resources to improve your knowledge."}
            </p>
            <button className="btn-primary reset-btn" onClick={resetQuiz}>Restart Quiz</button>
          </motion.div>
        ) : (
          <div className="quiz-content">
            <div className="quiz-progress">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <h3 className="question-text">{questions[currentQuestion].question}</h3>
            
            <div className="options-grid">
              {questions[currentQuestion].options.map((option, index) => {
                let optionClass = "quiz-option";
                if (isAnswered) {
                  if (index === questions[currentQuestion].correctAnswer) {
                    optionClass += " correct";
                  } else if (index === selectedOption) {
                    optionClass += " incorrect";
                  } else {
                    optionClass += " disabled";
                  }
                }
                
                return (
                  <motion.button
                    key={index}
                    className={optionClass}
                    onClick={() => handleOptionClick(index)}
                    whileHover={!isAnswered ? { scale: 1.02 } : {}}
                    whileTap={!isAnswered ? { scale: 0.98 } : {}}
                    disabled={isAnswered}
                  >
                    <span className="option-text">{option}</span>
                    {isAnswered && index === questions[currentQuestion].correctAnswer && (
                      <CheckCircle className="option-icon correct-icon" size={20} />
                    )}
                    {isAnswered && index === selectedOption && index !== questions[currentQuestion].correctAnswer && (
                      <XCircle className="option-icon incorrect-icon" size={20} />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
