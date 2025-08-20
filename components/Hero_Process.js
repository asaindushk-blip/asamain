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
        <p className="mt-6 text-lg font-light text-white max-w-2xl" itemProp="description">
          ASA Industries specializes in advanced{" "}
          <span className="font-medium">electrical stamping, rotor & stator lamination, die casting, and sheet metal fabrication</span>. 
          Our processes include{" "}
          <span className="font-medium">progressive die tooling, stamping dies, and precision manufacturing</span>, 
          delivering world-class components for{" "}
          <span className="font-medium">induction motors, brushless DC motors, universal motors, and shaded pole motors</span>.
        </p>
      </div>

      {/* Hidden SEO Keywords */}
      <span className="sr-only">
        motor components, rotor stator, electrical stamping, motor stamping, stamping manufacturer,
        stamping manufacturers, stamping manufacturing, electrical stamping manufacturers,
        lamination stamping process, stamping dies, progressive die, stamping tooling, induction motors,
        sheet metal, die casting, brushless dc motors, universal motors, shaded pole motors,
        die casting company in Noida
      </span>
    </section>
  );
};

export default Hero_Process;
