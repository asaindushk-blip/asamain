import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "hero1.png",
    alt: "ASA Industries Rotor and Stator Components",
    heading: "Delivering Excellence Since 1985",
    description:
      "Leading Manufacturer of Rotor, Stator, Sheet Metal and Die-Casted Components.",
  },
  {
    image: "hero2.png",
    alt: "Electrical Stamping Manufacturer",
    heading: "Precision Engineering at Scale",
    description:
      "High-quality stamping, die-casting, and motor components trusted worldwide.",
  },
  {
    image: "hero3.png",
    alt: "Motor Lamination Manufacturing",
    heading: "Innovation That Drives Motors",
    description:
      "Supplying global industries with innovative motor solutions.",
  },
  {
    image: "hero4.png",
    alt: "Sheet Metal Components",
    heading: "Cutting-Edge Sheet Metal Solutions",
    description:
      "Reliable and durable sheet metal components for industrial use.",
  },
  {
    image: "hero5.png",
    alt: "Die Casting and Tooling",
    heading: "Excellence in Die Casting",
    description:
      "Expertise in progressive tooling and die casting for modern industries.",
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
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover brightness-75"
            loading="lazy"
          />

          {/* Slide Content */}
          {index === current && (
            <div className="absolute top-1/3 left-[5%] w-4/5 md:w-3/5 text-white drop-shadow-lg">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {slide.heading}
              </h1>
              <p className="mt-4 text-lg md:text-xl font-light">
                {slide.description}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 p-3 rounded-full text-white"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-white scale-110" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Hidden SEO Keywords */}
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
