const Hero = () => {
  return (
    <div
      className="relative grid w-screen grid-rows-1 bg-[#000C56] lg:top-20 top-0 md:object-cover"
      id="Intro"
    >
      <img
        src="hero.png"
        alt="ASA Industries Hero Image"
        className="opacity-40 filter brightness-75 drop-shadow-md saturate-60"
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
         Leading Manufacturer of Rotor Stator Sheet Metal and Die-Casted Components
        </p>
      </div>
    </div>
  );
};

export default Hero;
