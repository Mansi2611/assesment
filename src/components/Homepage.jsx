import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

export default function HomePage() {
  return (
   

    <div className="relative min-h-screen w-screen overflow-hidden">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
  >

        <source src="/assets/videoBackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10">
  
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
