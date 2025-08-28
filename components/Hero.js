import React from "react";
import { Carousel } from "react-responsive-carousel"; // npm install react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero: React.FC = () => {
  const slides = [
    {
      img: "hero1.jpg",
      alt: "ASA Industries - Manufacturer of Electrical Stamping, Die Casted Rotor and Sheet Metal Components",
      title: "Delivering Excellence Since 1985",
      subtitle:
        "Trusted Manufacturer of Electrical Stamping, Die Casted Rotors, and Sheet Metal Components for Motors and Appliances",
    },
    {
      img: "hero2.jpg",
      alt: "High-quality Stamping Manufacturing Process - ASA Industries",
      title: "Precision in Every Process",
      subtitle:
        "Experts in Electrical Stamping, Rotor & Stator Manufacturing, and Progressive Die Tooling",
    },
    {
      img: "hero3.jpg",
      alt: "Die Casting and Sheet Metal Components - ASA Industries",
      title: "Innovation & Reliability",
      subtitle:
        "Supplying Die Casted Components, Sheet Metal Components, and Custom Tooling Solutions",
    },
  ];

  return (
    <section
      id="hero"
      className="relative w-screen overflow-hidden bg-[#000C56] lg:top-20 top-0"
      aria-label="ASA Industries - Manufacturer of Electrical Stamping, Die Casted Rotor, and Sheet Metal Components"
    >
      {/* Carousel */}
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        emulateTouch
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Hero Image */}
            <img
              src={slide.img}
              alt={slide.alt}
              className="object-cover w-full h-[600px] brightness-75"
              loading="eager"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-10 text-left text-white bg-black/40">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
                {slide.title}
              </h1>
              <h2 className="mt-4 text-lg md:text-2xl font-medium max-w-2xl">
                {slide.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Hero;
