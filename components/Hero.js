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
      ></img>
      <h3
        className="absolute mx-auto text-6xl font-medium text-left text-white md:w-3/5 md:top-72 top-60"
        style={{ left: "5%" }}
      >
        Delivering Excellence<br></br> Since 1985
      </h3>
    </div>
  );
};
export default Hero;
