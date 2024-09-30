import React, { useState } from 'react';
import TermsModal from '../modal/TermsModal';  // Import the modal component

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex w-full flex-col items-center justify-between px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
      <h5 className="mb-4 text-center text-sm font-medium text-gray-600 sm:!mb-0 md:text-lg">
        <p className="mb-4 text-center text-sm text-gray-600 sm:!mb-0 md:text-base">
          ©{1900 + new Date().getYear()} Trade-Matrix. All Rights Reserved.
        </p>
      </h5>
      <div>
        <ul className="flex flex-wrap items-center gap-3 sm:flex-nowrap md:gap-10">
          <li>
            <a
              target="blank"
              href="mailto:support@trade-matrix.com"
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Support
            </a>
          </li>
          <li>
            {/* Trigger modal on click */}
            <button
              onClick={handleOpenModal}
              className="text-base font-medium text-gray-600 hover:text-gray-600"
            >
              Terms of Use
            </button>
          </li>
        </ul>
      </div>

      {/* Modal for Terms and Conditions */}
      <TermsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Footer;
