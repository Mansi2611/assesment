
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";

export default function MarketingITSolutions() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation triggers only once when it enters the viewport
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-8 border-b-1 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 ">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 bg-white p-8">
          {/* Left Section */}
          <div className="w-full lg:w-5/7">
            <h2
              ref={ref}
              className={`text-3xl lg:text-4xl font-bold text-gray-800 mb-4 transition-transform duration-700 ${
                inView ? "translate-x-0 opacity-100" : "-translate-x-50 opacity-0"
              }`}
            >
              Your Top Choice for Digital Marketing and IT Solutions:
            </h2>
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              Matrix Bricks stands as a premier digital marketing powerhouse, catering to businesses worldwide with a dynamic presence across key global hubs. Our mission is clear: elevate our clients' performance on the international stage by leveraging the vast opportunities of the online realm. We offer a comprehensive suite of services designed to elevate your digital presence and drive business success. As one of the leading digital transformation companies, we provide innovative solutions such as cloud services, data analytics, and IT consulting to streamline your operations and enhance efficiency. Our Website Design & Development team crafts custom websites, e-commerce platforms, and responsive designs that captivate and convert, ensuring your online presence is both engaging and effective.
            </p>
            <br />
            <p className="text-gray-700 text-sm text-justify leading-relaxed">
              In addition, we are recognized as one of the best digital marketing agencies in the USA, offering a range of digital marketing services tailored to boost your online visibility. We are the digital marketing agency for businesses wishing to increase their reach and engagement thanks to our experience with SEO, Social Media Marketing, PPC, and much more. Explore each service category to discover how our tailored solutions can meet your unique needs and propel your business forward.
            </p>
          </div>

          {/* Right Section (Card) */}
          <div ref={cardRef} className={`w-full lg:w-2/7 bg-white rounded-lg shadow-xl border-1 border-gray-100 p-5 flex flex-col items-center md:my-10 text-center transition-transform duration-700 ${
              cardInView ? "translate-y-0 opacity-100" : "translate-y-50 opacity-0"
            }`}>
            {/* Logo and Address */}
            <div className="flex items-center gap-2">
              <div className="w-36 h-24 rounded-full flex items-center justify-center">
                <img
                  src="/assets/images/triangleLogo.webp"
                  alt="arrow"
                  className="mb-6"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-600 pb-4 text-sm font-medium">
                Greenwood Plaza Blvd, Greenwood Village, USA
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-900 font-bold text-justify italic mb-4">
              Digital Marketing Services that get you results in an industry where everyone talks about inputs, we commit to delivering outputs!
            </p>

            {/* Quote */}
            <p className="text-gray-700 font-semibold mb-4">
              - Mehul G Brahmbhatt, <span className="text-red-600">Founder</span>
            </p>

            {/* Ratings and Stats */}
            <div className="flex flex-wrap items-center justify-between gap-8 mb-4 w-full">
            <div className="flex justify-between w-full mb-4">
  {/* Ratings Section */}
  <div className="flex flex-col items-center w-1/3">
    <h4 className="text-xl font-bold text-red-500">4.9</h4>
    <p className="text-gray-600 flex items-center justify-center">
      {[...Array(4)].map((_, index) => (
        <StarIcon key={index} className="w-5 h-5 text-yellow-500" />
      ))}
      <StarIcon className="w-5 h-5 text-yellow-500 opacity-50" />
    </p>
    <p className="text-gray-600">312 Ratings</p>
  </div>

  {/* Satisfied Clients Section */}
  <div className="flex flex-col items-center w-1/3">
    <h4 className="text-xl font-bold text-red-500">3600+</h4>
    <p className="text-gray-600">Satisfied Clients</p>
  </div>

  {/* Years of Experience Section */}
  <div className="flex flex-col items-center w-1/3">
    <h4 className="text-xl font-bold text-red-500">14+</h4>
    <p className="text-gray-600">Years of Experience</p>
  </div>
</div>

</div>

          </div>
        </div>
      </div>
    </div>
  );
}
