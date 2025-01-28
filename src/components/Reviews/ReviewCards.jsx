import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";

export default function ReviewsComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const cards = [
    {
      description:
        "They were very empathetic about our business needs and helped us in all possible ways, even beyond the project scope.",
      serviceName: "Director, Lumiford",
      Rating: "5.0",
    },
    {
      description: "Project management was handled nicely.",
      serviceName: "IT General Manager, Dr L H Hiranandani Hospital",
      Rating: "5.0",
    },
    {
      description:
        "All standards met with the highest degree of professionalism from the company and personnel.",
      serviceName: "Owner, Prospero Capital Recovery",
      Rating: "5.0",
    },
    {
      description:
        "They understood our requirement well, and they seamlessly designed & developed our projects with great look & feel.",
      serviceName: "Founder & CEO, T-Traxx Bags",
      Rating: "5.0",
    },
    {
      description:
        "The best part of their services is the personal touch, quick response, and flexibility to the client's budget.",
      serviceName: "Owner & Founder, Unusual Escape",
      Rating: "5.0",
    },
    {
      description:
        "Matrix Bricks came up with innovative ideas matching our stride!",
      serviceName: "CEO, HexMesh Technologies Pvt Ltd",
      Rating: "4.5",
    },
  ];

  const renderStars = (rating) => {
    console.log(rating);
    
    const fullStars = Math.floor(rating);
    console.log(fullStars);
    
    const halfStar = rating % 1 >= 0.5;
    console.log("half : ",halfStar);
    
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    console.log(halfStar);
    
  
    const stars = [];
  
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <StarIcon key={`full-${i}`} className="w-5 h-5 text-red-500" />
      );
    }
  
    // Half star
    if (halfStar) {
        console.log("for halfstar");
        
      stars.push(
        <StarIcon
          key="half"
          className="w-5 h-5 text-red-500"
          style={{
            clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)", 
          }}
        />
      );
    }
  
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <StarIcon key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }
  
    return stars;
  };
  
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedCards = cards.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  return (
    <div className="flex justify-center overflow-hidden">
      <div className="w-[70%] mt-16 justify-center rounded-4xl bg-white flex flex-col mb-11 px-4 sm:px-8 lg:px-21 space-y-2 z-10 relative">
        <div className="text-left">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-red-600">
            What our Clients Says
            <br />
            About our Web Development work
          </h2>

          <p className="text-2xl mt-6 flex items-center space-x-4">
            <span>Matrix Bricks Reviews</span>
            <span>4.8 wewe</span>
            <span className="flex items-center">{renderStars(4.5)}</span>
            <span className="text-red-500 text-sm">33 reviews</span>
            <span className="ml-auto hidden lg:block">
              <img
                src="/assets/images/clutch.png"
                alt="Clutch"
                className="h-8"
                loading="lazy"
              />
            </span>
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {cards.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-6 flex flex-col items-start text-left transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                <span className="mr-2">{review.Rating}</span>
                {renderStars(review.Rating)}
              </div>

              <div className="text-sm h-[60%] font-semibold text-gray-800 mb-4">
                {`"${review.description}"`}
              </div>

              <div className="text-xs font-medium text-gray-600 mb-4">
                {review.serviceName}
              </div>

              <p className="text-sm text-gray-500 italic mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-red-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Review
              </p>
            </div>
          ))}
        </div>

        {/* Responsive Reviews Grid with Pagination */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {selectedCards.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-xl p-6 flex flex-col items-start text-left transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-center text-xl font-semibold text-gray-800 mb-4">
                <span className="mr-2">{review.Rating}</span>
                {renderStars(review.Rating)}
              </div>

              <div className="text-sm h-[60%] font-semibold text-gray-800 mb-4">
                {`"${review.description}"`}
              </div>

              <div className="text-xs font-medium text-gray-600 mb-4">
                {review.serviceName}
              </div>

              <p className="text-sm text-gray-500 italic mt-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-red-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Review
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-4 space-x-4 lg:hidden">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className="text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Image Visible on Small Screens */}
        <div className="block mt-8 lg:hidden ">
          <img
            src="/assets/images/clutch.png"
            alt="Clutch"
            className="h-8 mx-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
