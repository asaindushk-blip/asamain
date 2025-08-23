import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const slides = [
  {
    image: "hero.png",
    alt: "ASA Industries manufacturing excellence hero banner",
    title: "Delivering Excellence Since 1985",
    description:
      "ASA Industries is a trusted manufacturer of rotor, stator, and sheet metal components, providing world-class solutions for global industries.",
  },
  {
    image: "hero2.png",
    alt: "Rotor and stator manufacturing process at ASA Industries",
    title: "Innovating for Global Industries",
    description:
      "We deliver high-quality precision parts that power innovation across automotive, electrical, and industrial applications.",
  },
  {
    image: "hero3.png",
    alt: "Quality assurance at ASA Industries factory",
    title: "Quality You Can Rely On",
    description:
      "Our commitment to excellence ensures durable, reliable, and efficient components built to last.",
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

  return (
    <section
      id="intro"
      className="relative w-screen h-screen overflow-hidden bg-[#000C56]"
      aria-label="ASA Industries Introduction Slider"
    >
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            title={slide.title}
            className="w-full h-full object-cover opacity-40 filter brightness-75 saturate-60"
          />
          <div className="absolute top-1/3 left-[5%] text-white">
            <h1 className="text-4xl md:text-6xl font-semibold leading-snug mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl md:w-3/5 leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        aria-label="Previous Slide"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl p-2 bg-black/30 rounded-full hover:bg-black/50"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        aria-label="Next Slide"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl p-2 bg-black/30 rounded-full hover:bg-black/50"
      >
        <FiChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
