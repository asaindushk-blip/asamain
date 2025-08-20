const About = () => {
  return (
    <section
      className="w-5/6 ml-24 mt-56"
      id="about-us"
      itemScope
      itemType="https://asaindus.com"
    >
      <div className="md:grid md:grid-cols-2 gap-12 md:text-lg text-4xl">
        
        {/* Text Content */}
        <article className="pr-20 md:mb-auto mb-16">
          <header>
            <h1 className="md:text-4xl text-6xl md:font-normal font-black pb-16" itemProp="name">
              About ASA Industries
            </h1>
          </header>

          <p className="pb-4" itemProp="description">
            Founded in 1985 as a family-owned business, <strong>ASA Industries</strong> has grown into an 
            industry leader in the manufacturing of{" "}
            <span className="font-medium">high-speed laminations, stators, rotors for electric motors, die-casted components, and ceiling fan covers</span>. 
            Our components are widely used in{" "}
            <span className="font-medium">electric motors, transformers, alternators, and generators</span>, 
            serving both Indian and international markets.
          </p>

          <p className="pb-4">
            With our <span className="font-medium">state-of-the-art manufacturing facilities</span>, 
            we specialize in{" "}
            <span className="font-medium">electrical stamping, lamination stamping processes, progressive die tooling, and sheet metal fabrication</span>, 
            ensuring precision and durability in every product.
          </p>

          <p>
            Our vision is to pioneer advanced manufacturing in{" "}
            <span className="font-medium">motor components, stamping manufacturing, and die casting</span>. 
            Backed by a highly motivated team of engineers and guided by experienced leadership, 
            ASA Industries is committed to driving innovation in{" "}
            <span className="font-medium">induction motors, brushless DC motors, universal motors, and shaded pole motors</span>.
          </p>
        </article>

        {/* Image Content */}
        <figure className="relative">
          <img
            src="ASA_01.png"
            className="w-full"
            alt="ASA Industries high-speed lamination and die casting manufacturing processes"
            itemProp="image"
          />
          <img
            src="ASA_02.png"
            className="h-96 absolute md:bottom-12 bottom-48 md:right-96"
            alt="ASA Industries facility showcasing stamping and rotor-stator production"
          />
          <figcaption className="sr-only">
            ASA Industries – Manufacturer of rotor, stator, die casting, and stamping components in Noida, India.
          </figcaption>
        </figure>
      </div>

      {/* Hidden SEO Keywords for Crawlers */}
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

export default About;
