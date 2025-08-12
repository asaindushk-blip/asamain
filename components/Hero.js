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
          <h3 className="absolute w-1/5 text-6xl font-medium text-Green top-96 left-32">
                Electrical Stamping</br>
                Die Casted Rotors</br>
                Sheet Metal Components</br>
            </h3>
      
  
    </div>
  );
};
export default Hero;
