

import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const services = [
    {
      name: "Search Engine Marketing (SEM)",
      description:
        "Transform your business with our exceptional Search Engine Marketing (SEM) services. We are an awarded search engine marketing agency dedicated to driving traffic, enhancing visibility, and converting clicks into loyal customers. As a trusted provider of search engine optimization services, we help you outshine competitors and achieve your business goals.",
      image: "/assets/images/service1.webp",
      number: '01',
    },
    {
      name: "Social Media Marketing",
      description:
        "Take your brand to the next level with our dynamic Social Media Marketing services. At Matrix Bricks, we are a trusted Social Media Marketing Agency committed to growing your online presence and engaging your audience. Our tailored strategies leverage the power of platforms like Facebook, Instagram, Twitter, and LinkedIn to create compelling content and targeted campaigns.",
      image: "/assets/images/service2.webp",
      number: '02',
    },
    {
      name: "Google Search Ads",
      description:
        "Google Search Ads are a powerful way to drive targeted traffic to your website by displaying your ads in Google search results. As a Google Ads Agency, we create and manage effective ad campaigns that ensure your business reaches potential customers when they are actively searching for products or services like yours.",
      image: "/assets/images/service3.webp",
      number: '03',
    },
    {
      name: "Search Engine Optimization",
      description:
        "Our SEO Services Agency specializes in enhancing your website’s visibility on search engines like Google. By optimizing your website’s content, structure, and backlinks, we help you achieve higher search rankings, drive more organic traffic, and ultimately increase conversions and sales.",
      image: "/assets/images/service4.webp",
      number: '04',
    },
    {
      name: "Website Design & Development",
      description:
        "As a leading web designing and development company, we offer comprehensive web designing services that focus on creating visually appealing, user-friendly, and responsive websites. Our team ensures your website not only looks great but also performs seamlessly across all devices, providing an excellent user experience.",
      image: "/assets/images/service5.webp",
      number: '05',
    },
    {
      name: "Online Reputation Management",
      description:
        "Safeguard your brand’s image with our trusted Online Reputation Management services. We specialize in crafting strategies to monitor, manage, and improve your online presence. Our Online Reputation Management team works diligently to ensure your business is viewed positively across all digital platforms. By addressing negative feedback, promoting positive content, and maintaining a consistent brand image, we help you build trust and credibility.",
      image: "/assets/images/service6.webp",
      number: '06',
    },
    {
      name: "Cyber Security",
      description:
        "Protect your business with trusted solutions from proven Cyber Security Service Providers. We offer comprehensive protection against cyber threats, ensuring your data and systems remain secure. Trust our experts to safeguard your digital assets and maintain your business continuity.",
      image: "/assets/images/service7.webp",
      number: '07',
    },
    {
      name: "Cloud",
      description:
        "Revolutionize your operations with our cutting-edge IT cloud services. As an awarded cloud service provider, we deliver scalable and efficient solutions that enhance flexibility and drive growth. Let us streamline your IT infrastructure with our robust cloud solutions.",
      image: "/assets/images/service8.webp",
      number: '08',
    },
    {
      name: "Artificial Intelligence",
      description:
        "Boost your company's performance with innovations from a proven AI provider. Our advanced AI software solutions are designed to optimize operations, enhance decision-making, and drive efficiency. Harness the power of artificial intelligence to stay ahead in the competitive landscape.",
      image: "/assets/images/service9.webp",
      number: '09',
    },
  ];


  const { ref: textRef, inView: inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  return (
    <div className="w-full flex justify-center align-middle">
      <div className="w-[80%] mt-10">
        
      <h2
  ref={textRef}
  className={`text-4xl flex justify-center my-10 font-bold transform transition-all duration-500 ${
    inView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
  }`}
>
  Services We Provide
</h2>

        <div className="py-12">
            
          <div className="max-w-7xl mx-auto px-4 lg:px-12 cursor-pointer">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
  <div
  key={service.number}
  className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col"
>
  {/* Image at the top left */}
  <div
    className="w-24 h-24 absolute top-4 left-4 bg-cover  bg-center rounded-lg"
    style={{ backgroundImage: `url(${service.image})` }}
  ></div>

  {/* Card Content */}
  <div className="relative pt-28 pb-6 px-4 flex flex-col h-full">
    <h3 className="text-xl font-semibold text-gray-800 mt-2.5">{service.name}</h3>
    <p className="text-gray-800 text-sm mt-2 flex-grow text-justify">
      {service.description}
    </p>
    <div className="mt-14">
      <button className="flex items-center text-gray-900 hover:text-red-600 cursor-pointer">
        Know More
        <ArrowRightIcon className="w-4 h-4 ml-2" />
      </button>
    </div>
  </div>

  {/* Number at bottom right */}
  <div className="absolute bottom-10 right-12 text-9xl font-extrabold text-gray-300 opacity-30 transform translate-x-4 translate-y-4">
    {service.number}
  </div>
</div>

))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
