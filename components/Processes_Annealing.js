const Processes_Annealing = () => {
  return (
    <div className="mx-auto text-center w-5/6 grid lg:grid-cols-2 xl:pt-56 lg:pt-80 pt-20">
      <div className="lg:relative lg:order-1 order-2 grid grid-cols-2 lg:pt-auto pt-16">
        <img
          src="Annealing.png"
          className="lg:absolute xl:scale-125 xl:top-0 lg:bottom-0"
        ></img>
        <img
          src="Annealing.png"
          className="lg:absolute left-32 xl:bottom-8 bottom-32 scale-50 lg:block hidden"
        ></img>
        <img
          src="Annealing-2.png"
          className="lg:absolute left-24 lg:scale-75 xl:top-24 top-0"
        ></img>
      </div>
      <div className="text-left lg:order-2 order-1">
        <div className="text-indigo-900 font-black text-6xl lg:text-4xl xl:text-3xl">
          Annealing
        </div>
        <div className="xl:text-xl lg:text-3xl text-4xl lg:pt-0 pt-8">
          Our State-of-the-art annealing set up with high-end control helps
          electrical steel attain the required grain structure and achieve the
          ideal magnetic properties. We are also capable of providing oxide
          coating as per the customer requirement.
        </div>
      </div>
    </div>
  );
};
export default Processes_Annealing;
