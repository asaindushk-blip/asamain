const Hero = () => {
  return (
    <section
      id="intro"
      className="relative grid w-screen grid-rows-1 bg-[#000C56] lg:top-20 top-0 md:object-cover"
      aria-label="ASA Industries - Manufacturer of Electrical Stamping, Die Casted Rotor, and Sheet Metal Components"
    >
      {/* SEO Optimized Hero Image */}
      <img
        src="hero.png"
        alt="Manufacturer of Electrical Stamping, Die Casted Rotor, Stator, and Sheet Metal Components for Electrical Appliances"
        title="ASA Industries - Leading Stamping Manufacturer and Die Casting Company in Noida"
        className="opacity-40 filter brightness-75 drop-shadow-md saturate-60 w-full h-auto"
        loading="eager"
      />

      {/* SEO Optimized Headline */}
      <h1
        className="absolute mx-auto text-4xl md:text-6xl font-bold text-left text-white md:w-3/5 md:top-72 top-60 leading-tight"
        style={{ left: "5%" }}
      >
        Leading Manufacturer of Electrical Stamping,<br /> Die Casted Rotor & Sheet Metal Components
      </h1>

      {/* Supporting SEO-friendly Description */}
  >
        
    </section>
  );
};

export default Hero;
