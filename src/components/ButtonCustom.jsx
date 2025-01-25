import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx"; // Use clsx for conditional class management

const ButtonCustom = ({ color, content, hover = true }) => {
  return (
    <div>
      <button
        className={clsx(
          `bg-${color} border-2 border-${color} text-white py-1 px-6 w-full sm:w-auto rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex items-center`,
          {
            [`hover:bg-transparent hover:text-${color} hover:border-${color}-400`]: hover,
          }
        )}
      >
        <span className="flex-grow text-center">{content}</span>
        <span
          className={clsx(
            "ml-3 flex justify-center items-center w-8 h-8 bg-white rounded-full transition-all duration-300",
            {
              "hover:bg-black": hover,
            }
          )}
        >
          <ArrowRightIcon
            className={clsx(
              "w-5 h-5 md:w-6 md:h-6 transition-all duration-300",
              {
                "text-black": true, // Always black by default
                "hover:text-white": hover, // White on hover
              }
            )}
          />
        </span>
      </button>
    </div>
  );
};

export default ButtonCustom;
