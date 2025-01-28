import React ,{useState,useEffect}from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import BackToTopButton from "./BackToTopButton";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
   

    <div className="relative min-h-screen w-screen overflow-hidden overflow-x-hidden">
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
      {isVisible && <BackToTopButton />}
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
