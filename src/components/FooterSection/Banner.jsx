import React, { useState } from "react";

const Banner = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      alert(`Your email is submitted as: ${email}`);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className="mt-4 ">
      {/* Mail Section */}
      <div className="w-full flex bg-[#FB2C36] justify-center">
        <div className="w-[90%] lg:w-[75%] py-7 h-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-blue-100">
              <span className="inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                    clipRule="evenodd"
                  />
                  <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                </svg>
              </span>
              <span className="inline-block ml-2">Newsletter</span>
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl text-blue-50 font-bold">
              Join Our Mailing List
            </h2>
          </div>

          {/* Email Input and Sign Up */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center w-full md:w-auto gap-4"
          >
            {/* Input Field with Icon */}
            <div className="relative w-full sm:w-[300px]">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full py-2 px-4 border-2 bg-white text-gray-900 border-gray-900 focus:outline-none pl-10"
                required
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </span>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="bg-gray-950 border-2 border-gray-950 text-white py-2 px-6 text-sm md:text-base font-medium transition-all duration-300 cursor-pointer flex items-center justify-center"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
