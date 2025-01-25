import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div>
      <div className="w-full flex bg-[rgb(213,34,81)] justify-center">
        <div className="w-[80%] py-4  h-auto flex justify-between items-center">
          {/* right */}
          <div>
            <p className="text-blue-100">Get Your Free Audit Now!</p>
            <h2 className="text-3xl text-blue-50 font-bold">
              Are you ready to take the big step towards your digital growth?
            </h2>
          </div>

          {/* left */}
          <button className="bg-gray-950  border-2 border-gray-950 text-white  py-1.5 px-6 w-full sm:w-auto rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex items-center">
            <span className="flex-grow text-center">Free Growth Plan</span>
            <span className="ml-3 flex justify-center items-center w-8 h-8 bg-white rounded-full">
              <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 text-black font-bold" />
            </span>
          </button>
        </div>

      
      </div>

      <div className="w-full flex justify-center border-amber-300">

<div className="w-[80%] flex gap-10 py-16 ">

{/* right side */}
<div className="border-b-amber-950 w-1/2">

    <h2 className="text-4xl f my-4 font-bold transform transition-all duration-500 ">About Matrix Bricks</h2>
    <p className="text-justify my-6 pr-20">
    Creating and maintaining an exceptional website/online presence offers numerous advantages, yet juggling this task alongside existing business operations can be daunting. That's where we step in. In an ever-evolving digital landscape, many businesses worldwide struggle to navigate effective online marketing strategies. Our agency specializes in understanding and executing digital marketing tactics, leveraging a diverse range of skills and tools to help you discover innovative ways to market, promote, and ultimately sell your product or service online.
    </p>
    <button className="bg-[rgb(213,34,81)]  border-2 border-[rgb(213,34,81)] text-white  py-1.5 px-6 w-full sm:w-auto rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex items-center">
            <span className="flex-grow text-center">Read More</span>
            <span className="ml-3 flex justify-center items-center w-8 h-8 bg-white rounded-full">
              <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 text-black font-bold" />
            </span>
          </button>
</div>



{/* left */}
    <div className="w-1/2">
        left side
    </div>

</div>

        </div>
    </div>
  );
};

export default About;
