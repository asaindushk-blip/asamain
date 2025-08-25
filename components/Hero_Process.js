const Hero_Process = () => {
  return (
    <section
      className="relative"
      id="manufacturing-processes"
      itemScope
      itemType="https://asaindus.com"
    >
      {/* Hero Image */}
      <img
        src="Processes.png"
        alt="ASA Industries manufacturing processes including stamping, die casting, rotor and stator lamination"
        className="w-full lg:pt-20"
        itemProp="image"
      />

      {/* Hero Heading */}
      <div className="absolute top-96 left-32">
        <h1
          className="w-4/5 text-6xl font-bold text-white"
          itemProp="name"
        >
          Manufacturing Processes
        </h1>
     
      </div>

      {/* Hidden SEO Keywords */}
      <span className="sr-only">
        Manufacturer of Electrical Stamping, Die Casted Rotor and Sheet Metal Components for Electrical Appliances, 
        Rotor, Stator, Electrical Stamping, Motor stamping, Stamping Manufacturer, Stamping Manufacturers, 
        stamping manufacturing, electrical stamping manufacturers, lamination stamping process, stamping dies, 
        progressive die, stamping tooling, induction motors, sheet metal, die casting, Sheet Metal Components, 
        Die Casted Components, Brushless DC motors, Universal motors, Shaded pole motors, Ceiling Fan Cover, 
        Die casting company in Noida, Manufacturer of magnetic cores.
      </span>
    </section>
  );
};

export default Hero_Process;
