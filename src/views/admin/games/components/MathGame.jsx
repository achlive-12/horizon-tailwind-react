import React, { useState, useEffect, useCallback } from "react";
import Card from "components/card";

const MathGame = () => {
  const [question, setQuestion] = useState({ num1: 0, num2: 0, operator: '+', correctAnswer: 0 });
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds timer
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [score, setScore] = useState(0);
  const [isActive, setIsActive] = useState(false); // New state for active status

  // Generate random math questions
  const generateQuestion = useCallback(() => {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operator = Math.random() > 0.5 ? '+' : '-';
    const correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;

    // Create 4 options with one being correct
    const optionsArray = [
      correctAnswer,
      correctAnswer + Math.floor(Math.random() * 5) + 1,
      correctAnswer - Math.floor(Math.random() * 5) - 1,
      correctAnswer + Math.floor(Math.random() * 10) - 5,
    ].sort(() => Math.random() - 0.5); // Shuffle options

    setQuestion({ num1, num2, operator, correctAnswer });
    setOptions(optionsArray);
    setTimeLeft(10); // Reset timer for each question
    setSelectedAnswer(null);
  }, []);

  // Handle answer selection
  const handleAnswerSelect = useCallback((answer) => {
    if (!isActive) return; // Prevent interaction if game is inactive

    setSelectedAnswer(answer);
    setShowModal(true);

    if (answer === question.correctAnswer) {
      setModalMessage("Correct!");
      setScore(score + 1);
    } else {
      setModalMessage(`Wrong! Correct answer was ${question.correctAnswer}`);
    }

    // Close the modal after 2 seconds and move to the next question
    setTimeout(() => {
      setShowModal(false);
      generateQuestion();
    }, 2000);
  }, [question.correctAnswer, score, generateQuestion, isActive]);

  // Countdown Timer Logic
  useEffect(() => {
    if (!isActive) return; // Pause timer if game is inactive

    if (timeLeft === 0) {
      handleAnswerSelect(null); // Auto-submit with no answer
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, handleAnswerSelect, isActive]);

  // Initialize first question
  useEffect(() => {
    if (isActive) {
      generateQuestion();
    }
  }, [isActive, generateQuestion]);

  // User interaction event handlers
  const handleUserInteraction = () => {
    setIsActive(true); // Activate game on user interaction
  };

  const handleScroll = () => {
    setIsActive(false); // Deactivate game on scroll
  };

  useEffect(() => {
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Card extra={"w-full p-4 h-full mt-4"}>
      <section className="w-full p-6 rounded-lg" id='math-game'>
        <h2 className="text-2xl font-semibold mb-4">Mathematics Game</h2>
        <p className="text-gray-400 mb-4">Solve math problems to earn points. Timer: {timeLeft}s</p>

        <div className="bg-gray-100 p-4 rounded-md dark:bg-navy-700">
          {/* Question */}
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-400">
              Solve: {question.num1} {question.operator} {question.num2} = ?
            </span>
          </div>

          {/* Answer Options */}
          <div className="grid grid-cols-4 gap-2 mt-4 text-gray-400">
            {options.map((option, index) => (
              <button
                key={index}
                className={`p-4 rounded-lg ${selectedAnswer === option ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-500 hover:text-white dark:bg-navy-800 dark:hover:bg-navy-600'}`}
                onClick={() => handleAnswerSelect(option)}
                disabled={selectedAnswer !== null} // Disable buttons after selecting an answer
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Display Score */}
        <div className="mt-4 text-gray-600">
          <strong>Score:</strong> {score}
        </div>

        {/* Modal for Feedback */}
        {showModal && (
          <div className="fixed bottom-20 bg-brand-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 ease-in-out">
            {modalMessage}
          </div>
        )}
      </section>
    </Card>
  );
};

export default MathGame;
