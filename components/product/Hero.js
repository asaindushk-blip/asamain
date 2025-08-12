const Hero = () => {
  return (
    <div className="grid grid-rows-1 top-20" id="Intro">
      <div className="relative grid items-center h-min">
        <img
          src="hero.png"
          alt="ASA Industries Hero Image"
          className="w-screen opacity-50 filter brightness-75 drop-shadow-md saturate-60"
        />
        <h3 className="absolute z-10 left-[8.33vw] w-1/5 my-auto text-black text-7xl">
          Products
        </h3>
      </div>
    </div>
  );
};
export default Hero;
