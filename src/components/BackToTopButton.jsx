import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faCaretUp
} from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="animate-bounce fixed bottom-10 h-10 flex justify-center items-center cursor-pointer w-10 right-10 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-200 ease-in-out"
      aria-label="Back to Top"
    >
      <FontAwesomeIcon className='text-3xl' icon={faCaretUp} />
    </button>
  );
};

export default BackToTopButton;
