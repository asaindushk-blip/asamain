const Company = () => {
  return (
    <section
      className="mr-24 ml-20 md:mt-40 mt-60"
      id="company-overview"
      itemScope
      itemType="https://asaindus.com"
    >
      <div className="md:grid md:grid-cols-2 gap-12 md:text-lg text-4xl">
        
        {/* Company Text Content */}
        <article className="order-2 md:mb-auto mb-16">
          <header>
            <h1
              className="md:text-4xl text-6xl md:font-normal font-black pb-16"
              itemProp="name"
            >
              The Company
            </h1>
          </header>

          <p className="pb-4" itemProp="description">
            <strong>ASA Industries</strong> is a leading{" "}
            <span className="font-medium">
              manufacturer of magnetic cores, rotor & stator laminations, sheet metal parts, and die-casted components
            </span>. With{" "}
            <span className="font-medium">three modern manufacturing units across India</span>, 
            we deliver precision-engineered products for{" "}
            <span className="font-medium">electric motors, transformers, alternators, and generators</span>.
          </p>

          <p className="pb-4">
            Recognized among the{" "}
            <span className="font-medium">most trusted stamping manufacturers</span>, 
            ASA Industries supplies components to top Indian and international brands. 
            Our expertise spans{" "}
            <span className="font-medium">electrical stamping, lamination stamping processes, stamping dies, progressive die tooling, and die casting</span>.
          </p>

          <p>
            Powered by a skilled, multigenerational workforce and guided by 
            innovative leadership, we are committed to driving growth and delivering 
            excellence in{" "}
            <span className="font-medium">motor stamping, sheet metal fabrication, and die casting solutions</span>.
          </p>
        </article>

        {/* Company Image */}
        <figure className="order-1">
          <img
            src="ASA-Industries-Unit-1.png"
            className="scale-90"
            alt="ASA Industries Manufacturing Unit 1 – Die Casting and Electrical Stamping Facility in Noida, India"
            itemProp="image"
          />
          <figcaption className="sr-only">
            ASA Industries Unit 1 – Leading stamping and die casting manufacturing company in Noida, India.
          </figcaption>
        </figure>
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

export default Company;
