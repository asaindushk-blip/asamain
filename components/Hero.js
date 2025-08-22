import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // lightweight icons

const slides = [
  {
    image: "hero.png",
    alt: "Rotor and Stator Manufacturing - ASA Industries",
    heading: "Delivering Excellence Since 1985",
    description:
      "Leading Manufacturer of Rotor, Stator, Sheet Metal and Die-Casted Components.",
  },
  {
    image: "hero.png",
    alt: "Electrical Stamping and Die Casting",
    heading: "Precision Engineering at Scale",
    description:
      "High-quality stamping, die-casting, and motor components trusted worldwide.",
  },
  {
    image: "hero.png",
    alt: "Sheet Metal and Motor Components",
    heading: "Innovation That Drives Motors",
    description:
      "Supplying global industries with innovative motor solutions.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Manual navigation
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      id="Intro"
      className="relative w-screen h-[90vh] overflow-hidden bg-[#000C56]"
    >
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover brightness-75"
            loading="lazy"
          />
        </div>
      ))}

      {/* Text Overlay */}
      <div className="absolute top-1/3 left-[5%] w-4/5 md:w-3/5 text-white drop-shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {slides[current].heading}
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light">
          {slides[current].description}
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-5 transform -translate-y-1/2 
                   bg-black/40 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <FiChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-5 transform -translate-y-1/2 
                   bg-black/40 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Hidden SEO keywords */}
      <span className="sr-only">
        motor components, rotor stator, electrical stamping, motor stamping, stamping manufacturer, 
        stamping manufacturers, stamping manufacturing, electrical stamping manufacturers, 
        lamination stamping process, stamping dies, progressive die, stamping tooling, 
        induction motors, sheet metal, die casting, brushless dc motors, universal motors, 
        shaded pole motors, die casting company in Noida
      </span>
    </section>
  );
};

export default Hero;
