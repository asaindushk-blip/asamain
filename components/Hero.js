const Hero = () => {
  return (
    <div
      className="relative grid w-screen grid-rows-1 bg-[#000C56] lg:top-20 top-0 md:object-cover"
      id="Intro"
    >
      <img
        src="hero.png"
        alt="ASA Industries Hero Image"
        className="opacity-30 filter brightness-75 drop-shadow-md saturate-60"
      ></img>
          <h3 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in select-none">Precision Electrical Stamping
           <span class="block text-accent">Die Casted Rotor & Sheet Metal Components</span></h3>
      
  
    </div>
  );
};
export default Hero;
