import React, { lazy, Suspense } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";

const Tech = lazy(() => import("./Tech"));


const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: headRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full flex bg-[rgb(213,34,81)] justify-center">
        <div className="w-[90%] lg:w-[75%] py-7 h-auto flex flex-col md:flex-row  justify-between items-center gap-6">
          {/* Left Text */}
          <div className="text-center md:text-left ">
            <p
              className={`text-blue-100 transform transition-all duration-500 ${
                inView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-50 opacity-0"
              }`}
            >
              Get Your Free Audit Now!
            </p>
            <h2
              ref={ref}
              className={`text-2xl sm:text-3xl lg:text-3xl text-blue-50 font-bold transform transition-all duration-500 ${
                inView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-50 opacity-0"
              }`}
            >
              Are you ready to take the big step towards your digital growth?
            </h2>
          </div>

          {/* Call-to-Action Button */}
          <button className="bg-gray-950 border-2 border-gray-950 text-white py-2 px-6 w-full sm:w-auto rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex items-center justify-center">
            <span className="flex-grow text-center">Free Growth Plan</span>
            <span className="ml-3 flex justify-center items-center w-8 h-8 bg-white rounded-full">
              <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 text-black font-bold" />
            </span>
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex justify-center">
        <div className="w-[90%] lg:w-[75%] flex flex-col lg:flex-row gap-10 py-12 lg:py-16">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <h2
              ref={headRef}
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold transform transition-all duration-500 ${
                cardInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              About Matrix Bricks
            </h2>
            <p className="text-justify my-6 lg:pr-23">
              Creating and maintaining an exceptional website/online presence
              offers numerous advantages, yet juggling this task alongside
              existing business operations can be daunting. That's where we step
              in. In an ever-evolving digital landscape, many businesses
              worldwide struggle to navigate effective online marketing
              strategies. Our agency specializes in understanding and executing
              digital marketing tactics, leveraging a diverse range of skills
              and tools to help you discover innovative ways to market, promote,
              and ultimately sell your product or service online.
            </p>
            <button className="bg-[rgb(213,34,81)] mt-8 border-2 border-[rgb(213,34,81)] text-white py-2 px-6 w-auto sm:w-auto rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex items-center">
              <span className="flex-grow text-center">Read More</span>
              <span className="ml-3 flex justify-center items-center w-8 h-8 bg-white rounded-full">
                <ArrowRightIcon className="w-6 h-5 md:w-6 md:h-6 text-black font-bold" />
              </span>
            </button>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 sm:w-[80%] w-[90%] mx-auto px-4 flex items-center justify-center bg-white relative">
            <div className="w-full h-full relative">
              {/* Word Boxes */}
              <div className="absolute left-[-13%] top-1/2 transform -translate-y-1/2 flex flex-col gap-3 ">
                {[
                  "Safe & Secure",
                  "Online Support",
                  "Finish on Time",
                  "Friendly TOS",
                  "24/7 Days Support",
                ].map((word, index) => (
                  <div
                    key={index}
                    className={`py-3 px-4 bg-white/50 border border-gray-300 flex items-center justify-center rounded-lg text-sm font-medium text-gray-700 transform transition-all duration-1000 ${
                      inView
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-12 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {word}
                  </div>
                ))}
              </div>

              {/* Image */}
              <img
                src="/assets/images/about.webp"
                alt="About Matrix Bricks"
                className="w-full object-cover rounded-tl-[20%] rounded-br-[20%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="absolute w-[90%] h-0 border-b-[1px] border-gray-300"></div>

        <div className="flex items-center justify-center text-center relative w-62 text-gray-900 z-10 bg-white text-2xl font-bold">
          Technologies & Partners
        </div>
        {/* <div className="border-2 w-36">Technologies & Partners</div> */}
      </div>

      <div className="flex justify-center">
        <Tech />
      </div>
    </div>
  );
};

export default About;
