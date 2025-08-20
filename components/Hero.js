const Hero = () => {
  return (
    <div
      className="relative grid w-screen grid-rows-1 bg-[#000C56] lg:top-20 top-0 md:object-cover"
      id="Intro"
    >
      <img
        src="hero.png"
        alt="ASA Industries Hero Image"
        className="opacity-50 filter brightness-75 drop-shadow-md saturate-60"
      />

      {/* Text container for heading + paragraph */}
      <div
        className="absolute mx-auto text-left text-white md:w-3/5 md:top-72 top-60"
        style={{ left: "5%" }}
      >
        <h2 className="text-6xl font-medium">
          Delivering Excellence<br /> Since 1985
        </h2>
        <p className="mt-4 text-lg font-light">
          Leading Manufacturer of Rotor, Stator, Sheet Metal and Die-Casted Components.
        </p>

        {/* SEO Keyword-rich supporting text */}
        <p className="mt-4 text-sm opacity-80 max-w-3xl">
          
        </p>

        {/* Hidden SEO keywords (Google can index, users don’t see them) */}
        <span className="sr-only">
          motor components, rotor stator, electrical stamping, motor stamping, stamping manufacturer, 
          stamping manufacturers, stamping manufacturing, electrical stamping manufacturers, 
          lamination stamping process, stamping dies, progressive die, stamping tooling, 
          induction motors, sheet metal, die casting, brushless dc motors, universal motors, 
          shaded pole motors, die casting company in Noida
        </span>
      </div>
    </div>
  );
};

export default Hero;
