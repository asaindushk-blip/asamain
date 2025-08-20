import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const images = [
    "hero1.png",
    "hero2.png",
    "hero3.png",
    "hero4.png",
    "hero5.png",
    "hero6.png",
    "hero7.png",
    "hero8.png",
    "hero9.png",
    "hero10.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="relative w-screen h-[90vh] overflow-hidden bg-[#000C56] top-0 lg:top-20"
      id="Intro"
    >
      {/* Slider wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Hero Slide ${idx + 1}`}
            className="w-screen h-[90vh] object-cover opacity-70"
          />
        ))}
      </div>

      {/* Text overlay */}
      <div
        className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white md:w-3/5"
      >
        <h2 className="text-4xl md:text-6xl font-medium">
          Delivering Excellence <br /> Since 1985
        </h2>
        <p className="mt-4 text-lg font-light">
          Leading Manufacturer of Rotor, Stator, Sheet Metal and Die-Casted Components.
        </p>
      </div>

      {/* Prev/Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white"
      >
        <ChevronLeft size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === idx ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
