import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/hero1.png",
    alt: "Manufacturer of Electrical Stamping, Die Casted Rotor, and Sheet Metal Components",
    title: "ASA Industries - Electrical Stamping Manufacturer",
    headline: "Leading Manufacturer of Electrical Stamping, Die Casted Rotor & Sheet Metal Components",
    description: "Supplying high-quality stamping, rotor, stator, and sheet metal components for electrical appliances."
  },
  {
    image: "/hero2.png",
    alt: "High precision motor stamping and rotor lamination",
    title: "Motor Stamping and Lamination Manufacturer",
    headline: "Precision Stamping & Rotor Lamination for Motors",
    description: "Trusted supplier for induction motors, BLDC motors, shaded pole motors and universal motors."
  },
  // ... rest of the 10 slides
];

  {
    image: "hero3.png",
    alt: "Sheet Metal Components and Die Casting",
    title: "Sheet Metal and Die Casting Manufacturer",
    headline: "Sheet Metal & Die Casted Components for Industries",
    description: "Delivering reliable sheet metal components and die-cast rotors for appliances and machinery."
  },
  {
    image: "hero4.png",
    alt: "Progressive die stamping process and tooling",
    title: "Progressive Die and Tooling",
    headline: "Progressive Die & Stamping Tooling Experts",
    description: "Expertise in lamination stamping process, stamping dies and tooling solutions."
  },
  {
    image: "hero5.png",
    alt: "Electrical stamping manufacturing plant in Noida",
    title: "Electrical Stamping Manufacturing Plant",
    headline: "State-of-the-Art Electrical Stamping Manufacturing",
    description: "Manufacturing excellence with advanced stamping technology in Noida, India."
  },
  {
    image: "hero6.png",
    alt: "BLDC motor stamping components",
    title: "BLDC Motor Stamping Manufacturer",
    headline: "High-Precision BLDC Motor Stamping Solutions",
    description: "Supplying BLDC motor stamping and lamination components for energy-efficient motors."
  },
  {
    image: "hero7.png",
    alt: "Universal motor rotor and stator stamping",
    title: "Universal Motor Stamping",
    headline: "Rotor & Stator Stamping for Universal Motors",
    description: "Reliable rotor and stator stamping for household and industrial universal motors."
  },
  {
    image: "hero8.png",
    alt: "Shaded pole motor stamping process",
    title: "Shaded Pole Motor Components",
    headline: "Durable Stamping for Shaded Pole Motors",
    description: "Manufacturing shaded pole motor components with high durability and precision."
  },
  {
    image: "hero9.png",
    alt: "Induction motor stamping manufacturer",
    title: "Induction Motor Stamping",
    headline: "Lamination Stamping for Induction Motors",
    description: "Providing induction motor stamping and lamination for industrial and commercial use."
  },
  {
    image: "hero10.png",
    alt: "Die casting and sheet metal stamping components exporter",
    title: "Die Casting & Sheet Metal Exporter",
    headline: "Global Supplier of Stamping & Die-Cast Components",
    description: "Exporting sheet metal, electrical stamping, and die-cast rotors worldwide."
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="intro"
      className="relative w-screen h-[600px] overflow-hidden bg-[#000C56]"
      aria-label="ASA Industries - Manufacturer of Electrical Stamping, Die Casted Rotor, and Sheet Metal Components"
    >
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
            title={slide.title}
            className="w-full h-full object-cover opacity-50"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute top-1/3 left-[5%] w-3/5 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
              {slide.headline}
            </h1>
            <p className="mt-4 text-lg md:text-xl drop-shadow-md">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full ${
              current === idx ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
