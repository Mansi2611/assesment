import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import PopupForm from "./PopupForm";

export default function HeroSection() {
  const attributes = ["Trusted", "Awarded", "Proven"];
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => setIsPopupOpen((prev) => !prev);

  const { ref: textRef, inView: inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-transparent text-white py-12 px-6 md:px-10">
      <div className="text-center text-sm md:text-base text-yellow-400 tracking-wide uppercase">
        {attributes.map((item, index) => (
          <span
            key={index}
            className="inline-block text-lg md:text-xl font-bold"
          >
            {item}
            {index < attributes.length - 1 && (
              <span className="text-white mx-4 md:mx-8">|</span>
            )}
          </span>
        ))}
      </div>

      <h1
        ref={textRef}
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-10 md:mt-16 leading-snug sm:leading-tight transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        Digital Marketing <br />
        and Web Designing Agency
      </h1>

      <p className="text-center text-base sm:text-lg md:text-xl text-gray-300 mt-4 md:mt-6">
        Your technology partner for end-to-end innovative digital solutions
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mt-10 md:mt-14 w-full">
        <button
          ref={textRef}
          className={`bg-red-400 hover:bg-transparent border-2 border-red-400 text-white hover:text-red-400 py-3 px-6 w-full sm:w-auto rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex items-center ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          onClick={handlePopupToggle}
        >
          <span className="flex-grow text-center">
            Let’s Discuss Your Project
          </span>
          <span className="ml-3 flex justify-center items-center w-8 h-8 bg-white rounded-full">
            <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 text-black font-bold" />
          </span>
        </button>

        <button
          ref={textRef}
          className={`bg-transparent hover:bg-red-400 border-2 border-red-400 text-red-400 hover:text-white py-3 px-6 w-full sm:w-auto rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex items-center ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="flex-grow text-center">Free Growth Plan</span>
          <span className="ml-3 flex justify-center items-center w-8 h-8 bg-white rounded-full">
            <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 text-black font-bold" />
          </span>
        </button>
      </div>
      <PopupForm isOpen={isPopupOpen} onClose={handlePopupToggle} />

    </div>
  );
}




