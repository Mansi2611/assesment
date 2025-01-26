

import React from "react";
import ReviewCards from "./ReviewCards";

const Reviews = () => {
  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">
      {/* Upper White Section */}
      <div className="absolute top-0 left-0 w-full h-full bg-white" />

      {/* Lower Red Section with Angle at the Top Only (Straight Bottom) */}
      <div className="absolute bottom-0 left-0 w-[120%] h-[30%] bg-red-500 transform rotate-[-7deg] origin-top-left" />
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-red-500 transform " >

      <h1 className="text-4xl absolute  mt-23 right-2 justify-end bottom-0  items-end">
     <p className="text-2xl md:text-5xl  font-extrabold text-gray-400 stroke-red-500 bg-clip-text  from-red-500 to-red-500 border-2 border-red-500 inline-block  rounded-md transition-all duration-300 hover:text-white hover:bg-red-500 hover:border-transparent">
     Testimonials
</p>



     </h1>
      </div>

      {/* Content */}
     <ReviewCards/>
     
    </div>
  );
};

export default Reviews;
