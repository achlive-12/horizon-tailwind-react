import React, { useState} from "react";
import avatar from "assets/img/avatars/male.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1); // Track the current step
  const [momoNumber, setMomoNumber] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    if (momoNumber) {
      setStep(2); // Move to step 2 once mobile money number is filled
    }
  };

  const handleWithdraw = () => {
    setIsLoading(true);
    // Add your withdraw logic here
    console.log("Withdraw clicked", momoNumber, withdrawAmount);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(false);
      setStep(1); // Reset to step 1 for next time
    }, 2000); // Simulate an API call
  };

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="User" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">User Name</h4>
        <p className="text-base font-normal text-gray-600">Investor</p>
      </div>

      {/* Stats */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">1</p>
          <p className="text-sm font-normal text-gray-600">Investment(s)</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">30</p>
          <p className="text-sm font-normal text-gray-600">Referrals</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">GHS 434</p>
          <p className="text-sm font-normal text-gray-600">Balance</p>
        </div>
      </div>
  

      {/* Action buttons */}
      <div className="flex flex-row md:flex-row justify-between items-center gap-3">
        <button className="w-full p-2 h-10 bg-red-500 text-white rounded-lg my-5 hover:bg-red-600 transition duration-300 whitespace-nowrap">
          Delete Account
        </button>
        <button
          className="w-full px-3 h-10 bg-blue-500 text-white rounded-lg my-5 hover:bg-blue-600 transition duration-300 whitespace-nowrap"
          onClick={() => setShowModal(true)}
        >
          Opt Out
        </button>
        <button
          className="w-full p-2 h-10 bg-gray-500 text-white rounded-lg my-5 hover:bg-green-600 transition duration-300 whitespace-nowrap"
          disabled
        >
          Withdraw
        </button>
      </div>

      {/* Withdraw Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 dark:bg-navy-700">
            {step === 1 && (
              <>
                <h2 className="text-xl font-bold mb-4">Step 1: Enter Mobile Money Number</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white">Mobile Money Number</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg dark:bg-navy-700 dark:text-white"
                    value={momoNumber}
                    onChange={(e) => setMomoNumber(e.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={handleNextStep}
                    disabled={!momoNumber}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-bold mb-4">Step 2: Confirm and Withdraw</h2>
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-white">
                    <strong>Account Name:</strong> John Doe
                  </p>
                  <p className="text-gray-700 dark:text-white">
                    <strong>Mobile Money Number:</strong> {momoNumber}
                  </p>
                  <p className="text-gray-700 dark:text-white">
                    <strong>Network:</strong> MTN
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white">Amount to Withdraw</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg dark:bg-navy-700 dark:text-white"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    className={`px-4 py-2 bg-green-500 text-white rounded-lg ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={handleWithdraw}
                    disabled={!withdrawAmount || isLoading}
                  >
                    {isLoading ? "Processing..." : "Withdraw"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </Card>
  );
};

export default Banner;
