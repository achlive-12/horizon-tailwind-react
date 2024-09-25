import React, { useState } from 'react';
import Card from 'components/card';


const PredictiveGame = () => {
  const [isRolling, setIsRolling] = useState(false);
  const [displayedNumber, setDisplayedNumber] = useState(null);
  const [finalNumber, setFinalNumber] = useState(null);
  const [selectedBet, setSelectedBet] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [PmodalMessage, PsetModalMessage] = useState('');
  const [showPModal, setShowPModal] = useState(false);

  const betOptions = [
    { label: '1-10', odds: 1.5, min: 1, max: 10 },
    { label: '11-20', odds: 2.0, min: 11, max: 20 },
    { label: '21-30', odds: 2.5, min: 21, max: 30 },
    { label: '31-40', odds: 3.0, min: 31, max: 40 },
    { label: '41-50', odds: 4.0, min: 41, max: 50 },
  ];

  const betAmounts = [10, 20, 50, 100, 200];

  const handlePlaceBet = () => {
    if (isRolling || !selectedBet || !selectedAmount) return;

    setIsRolling(true);
    setDisplayedNumber(null);
    setFinalNumber(null);

    let cycleNumbers = setInterval(() => {
      setDisplayedNumber(Math.floor(Math.random() * 50) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(cycleNumbers);
      const finalRandom = Math.floor(Math.random() * 50) + 1;
      setFinalNumber(finalRandom);
      setIsRolling(false);

      if (finalRandom >= selectedBet.min && finalRandom <= selectedBet.max) {
        const winnings = (selectedBet.odds * selectedAmount).toFixed(2);
        PsetModalMessage(`You won 🏆! The number ${finalRandom} falls in ${selectedBet.label}. You won GHS ${winnings}!`);
      } else {
        PsetModalMessage(`You lost 🥲! The number ${finalRandom} is not in ${selectedBet.label}. Better luck next time!`);
      }

      setShowPModal(true);
      setTimeout(() => {
        setShowPModal(false);
      }, 6000);
    }, 3000);
  };

  return (
    <Card extra={"w-full p-4 h-full mt-4"}>
      <div className="w-full p-6 text-black dark:text-white" id="predictive-game-section">
        <h2 className="text-2xl text-black font-semibold mb-4">Predictive Game</h2>
        <p className="text-gray-400 mb-4">Place your bets and see where the number lands!</p>

        {/* Rolling / Result Section */}
        <div className="bg-black-800 dark:text-neongreen p-6 rounded-lg text-center mb-4 shadow-inner border dark:border-neongreen text-gray-500">
          {!isRolling && finalNumber && (
            <div>
              <h3 className="text-4xl font-extrabold">Final Number: {finalNumber}</h3>
            </div>
          )}

          {isRolling && (
            <div>
              <div className="text-5xl font-extrabold animate-pulse">
                {displayedNumber !== null ? displayedNumber : '...'}
              </div>
            </div>
          )}

          {!isRolling && !finalNumber && (
            <div>
              <p className="text-2xl text-gray-400">Place a bet to see the result!</p>
            </div>
          )}
        </div>

        {/* Bet Options */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-400">Selections</h1>
          {betOptions.map((bet, index) => (
            <div
              key={index}
              onClick={() => setSelectedBet(bet)}
              className={`flex flex-col w-full items-center rounded-2xl p-3 dark:shadow-none shadow-shadow-500 shadow-3xl bg-gray-100 dark:!bg-navy-700 cursor-pointer
              ${selectedBet?.label === bet.label ? 'border-2 border-blue-500 animate-bounce' : 'border-none'}`}
            >
              <span className="text-lg text-gray-400 font-bold">{bet.label}</span>
              <span className="text-sm text-gray-400">Odds: {bet.odds}x</span>
            </div>
          ))}
        </div>

        {/* Bet Amount Options */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-400">Amount</h1>
          {betAmounts.map((amount, index) => (
            <div
              key={index}
              className={`flex flex-col w-full items-center rounded-2xl p-3 dark:shadow-none shadow-shadow-500 shadow-3xl bg-gray-100 dark:!bg-navy-700 cursor-pointer
              ${selectedAmount === amount ? 'border border-green-500 animate-bounce' : ''}`}
              onClick={() => setSelectedAmount(amount)}
            >
              <span className="text-lg text-gray-400 font-bold">GHS {amount}</span>
            </div>
          ))}
        </div>

        {/* Place Bet Button */}
        <div className="flex justify-center">
          <button
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 ${
              !selectedBet || !selectedAmount ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handlePlaceBet}
            disabled={!selectedBet || !selectedAmount}
          >
            Place Bet
          </button>
        </div>
      </div>

      {/* Fading Modal for Win/Loss */}
      {showPModal && (
        <div className="fixed bottom-40 w-[90%] z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          className="bg-brand-900 dark:bg-gray-900 text-neongreen px-6 py-4 rounded-xl shadow-lg max-w-[90vw] max-h-[90vh] w-full sm:w-[400px] transition-transform transform ease-in-out duration-500 opacity-0 animate-slideUpFade"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div id="modal-title" className="text-center text-gray-200 text-xl font-semibold mb-4">
            {PmodalMessage}
          </div>
        </div>
      </div>
      
      )}
    </Card>
  );
};

export default PredictiveGame;