const Processes_SMC = () => {
  return (
    <div className="mx-auto  text-center w-5/6 grid lg:grid-cols-2 grid-rows-2 xl:pt-auto lg:pt-24 lg:pb-64 2xl:pb-60 xl:pb-64">
      <div className="lg:relative lg:order-1 order-2 grid lg:block grid-cols-2">
        <img
          src="casting.png"
          className="lg:absolute lg:scale-[0.70] lg:bottom-[-15vw] lg:right-16 xl:bottom-auto xl:scale-100"
        ></img>
        <img
          src="casting-2.png"
          className="lg:absolute right-80 bottom-8 lg:scale-75"
        ></img>
        <img
          src="casting-3.png"
          className="lg:absolute left-96 scale-75 top-56 hidden lg:block"
        ></img>
      </div>
      <div className="text-left lg:order-2 order-1">
        <div className="text-indigo-900 font-black text-6xl lg:text-4xl xl:text-3xl">
          Sheet Metal Forming
        </div>
        <div className="xl:text-xl lg:text-3xl text-4xl lg:pt-0 pt-8">
          We currently produce high quality sheet metal components such as fan
          covers in our best in class forming machines. We are capable of
          producing fully finished sheet metal components
        </div>
      </div>
    </div>
  );
};
export default Processes_SMC;
