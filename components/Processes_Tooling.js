const Processes_Tooling = () => {
  return (
    <div className="mx-auto  text-center w-5/6 lg:grid grid-cols-2 pt-20 lg:pt-80 lg:pb-48 2xl:pb-40 xl:pb-60">
      <div className="text-left">
        <div className="text-indigo-900 font-black text-6xl lg:text-4xl xl:text-3xl">
          Tooling
        </div>
        <div className="xl:text-xl lg:text-3xl text-4xl lg:pt-0 pt-8">
          We posses a fleet of high end precision machinery with an expert team
          which enables us to design and maintain tools in-house.
        </div>
      </div>
      <div className="relative grid grid-cols-2 lg:block">
        <img
          src="Tooling-1.png"
          className="lg:absolute lg:scale-50 2xl:bottom-0.5 lg:left-40 xl:left-20 xl:bottom-[-20px] pt-4"
        ></img>
        <img
          src="Tooling-3.png"
          className="lg:absolute scale-75 left-56 2xl:top-20 xl:top-2 lg:bottom-[-20px] lg:block hidden pt-4"
        ></img>
        <img
          src="Tooling-2.png"
          className="lg:absolute lg:scale-75 lg:bottom-[-80px] 2xl:bottom-[-20px] xl:bottom-[-56px] pt-20"
        ></img>
      </div>
    </div>
  );
};
export default Processes_Tooling;
