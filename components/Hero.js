const Hero = () => {
  return (
    <section
      id="intro"
      className="relative grid w-screen grid-rows-1 bg-[#000C56] lg:top-20 top-0 md:object-cover"
      aria-label="ASA Industries Introduction Section"
    >
      <img
        src="hero.png"
        alt="ASA Industries manufacturing excellence hero banner"
        title="ASA Industries Hero Image"
        className="opacity-40 filter brightness-75 drop-shadow-md saturate-60 w-full h-auto object-cover"
      />

      <h1
        className="absolute mx-auto text-4xl md:text-6xl font-semibold text-left text-white leading-snug md:w-3/5 md:top-72 top-60"
        style={{ left: "5%" }}
      >
        Delivering Excellence <br /> Since 1985
      </h1>
      
      <p
        className="absolute text-lg md:text-xl text-white md:w-2/5 md:top-[26rem] top-[22rem] leading-relaxed"
        style={{ left: "5%" }}
      >
        ASA Industries is a trusted manufacturer of rotor, stator, and sheet metal
        components, providing world-class solutions for global industries.
      </p>
    </section>
  );
};

export default Hero;
