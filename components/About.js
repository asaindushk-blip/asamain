const About = () => {
  return (
    <div className="w-5/6 ml-24 mt-56">
      <div className="md:grid md:grid-cols-2 gap-12 md:text-lg text-4xl">
        <div className="pr-20 md:mb-auto mb-16">
          <h1 className="md:text-4xl text-6xl md:font-normal font-black pb-16">
            About Us
          </h1>
          ASA Industries, started as a family business in 1985 is now an
          Industrial expert in manufacturing High speed laminations such as Stators & Rotors of Electric Motors, Die-Casted
          components and Ceiling fan covers. Our products have applications in Electrical machines such as Electric motor, Transformers, Alternators & Generators. State of the art manufacturing
          facility extend our capabilities far beyond. <br></br>
          <div className="pt-4">
            We aim to become a pioneer in Manufacturing and to achieve
            this we have a highly motivated team of young engineers working
            under the mentorship of leaders with rich & diverse experience.
          </div>
        </div>
        <div className="relative">
          <img
            src="ASA_01.png"
            className="w-full"
            alt="ASA Industries Processes"
          ></img>
          <img
            src="ASA_02.png"
            className="h-96 absolute md:bottom-12 bottom-48 md:right-96"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default About;
