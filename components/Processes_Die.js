const Processes_Die = () => {
  return (
    <div className="mx-auto  text-center w-5/6 grid lg:grid-cols-2 grid-rows-2 pt-40 lg:pt-32 xl:pt-24">
      <div className="relative lg:order-1 order-2 grid grid-cols-2 lg:block">
        <img
          src="PDS-1.png"
          className="lg:absolute lg:right-32 xl:right-44 2xl:right-64 md:right-32 lg:scale-75"
        ></img>
        <img
          src="PDS-2.png"
          className="lg:absolute lg:left-40 lg:bottom-0 xl:bottom-0 2xl:left-40 2xl:bottom-4 lg:scale-50"
        ></img>
        <img
          src="PDS-3.png"
          className="lg:absolute xl:bottom-[0.1px] lg:top-48 lg:scale-[0.65] hidden lg:block 2xl:top-40 lg:left-48 2xl:scale-75 2xl:left-40"
        ></img>
        50
      </div>
      <div className="text-left lg:order-2 order-1">
        <div className="text-indigo-900 font-black text-6xl lg:text-4xl xl:text-3xl">
          Progressive Die Stamping
        </div>
        <div className="xl:text-xl lg:text-3xl text-4xl lg:pt-0 pt-8">
          With expertise in Progressive Dies and the availability of wide range
          of Power presses from 125 Ton to 360 Ton we deliver high quality and
          precise electrical stampings. With capabilities like Continuous feed,
          Fast Die set-up times, SPM up-to 350, Auto stitch and Auto skew we
          produce various geometries in a single unit with minimal process lead
          time.
        </div>
      </div>
    </div>
  );
};
export default Processes_Die;
