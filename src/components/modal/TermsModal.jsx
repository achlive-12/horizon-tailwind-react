import React from 'react';

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full dark:bg-navy-800 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
        <div className="overflow-y-auto max-h-96">
          <p className="mb-4">
            Welcome to Trade-Matrix. These terms and conditions outline the rules and regulations for the use of Trade-Matrix's website and services.
          </p>

          <h3 className="text-lg font-semibold">1. Agreement to Terms</h3>
          <p className="mb-4">
            By accessing this website and using our services, you accept these terms and conditions in full. Do not continue to use Trade-Matrix’s services if you do not agree with all of the terms stated on this page.
          </p>

          <h3 className="text-lg font-semibold">2. Investment Risk</h3>
          <p className="mb-4">
            All investments carry a certain level of risk, and there is no guarantee of profit. The value of investments may go down as well as up, and investors may not get back the amounts originally invested. You should understand the risks before investing.
          </p>

          <h3 className="text-lg font-semibold">3. No Financial Advice</h3>
          <p className="mb-4">
            Trade-Matrix does not provide personalized investment advice. All information provided by us is general in nature and does not take into account your specific financial situation, objectives, or needs.
          </p>

          <h3 className="text-lg font-semibold">4. Use of Information</h3>
          <p className="mb-4">
            The information provided on our platform is for informational purposes only. You should not rely on it as a basis for making investment decisions. We recommend that you seek independent financial advice before making any investment.
          </p>

          <h3 className="text-lg font-semibold">5. Limitation of Liability</h3>
          <p className="mb-4">
            Trade-Matrix is not liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising out of or in connection with the use of this platform or its services.
          </p>

          <h3 className="text-lg font-semibold">6. Modifications to Terms</h3>
          <p className="mb-4">
            Trade-Matrix reserves the right to revise these terms at any time. By continuing to use the platform after such changes, you agree to be bound by the revised terms.
          </p>

          <p className="mb-4">
            Please read these terms carefully and ensure you understand them before engaging in any investment activity with us.
          </p>
        </div>

        <button
          className="mt-4 px-4 py-2 bg-none text-gray-400 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
