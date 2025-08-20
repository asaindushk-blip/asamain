const Hero_Products = ({ props }) => {
  return (
    <section
      className="relative"
      id="products-hero"
      itemScope
      itemType="https://asaindus.com/Product"
    >
      {/* Hero Image */}
      <img
        src="Products_Pedestal.png"
        alt="ASA Industries product range including rotor, stator, sheet metal parts, and die-casted components"
        className="w-full lg:pt-20"
        itemProp="image"
      />

      {/* Hero Heading & Description */}
      <div className="absolute top-96 left-32">
        <h1 className="w-4/5 text-6xl font-bold text-white" itemProp="name">
          {props}
        </h1>
        <p className="mt-6 text-lg font-light text-white max-w-3xl" itemProp="description">
          ASA Industries offers a wide range of{" "}
          <span className="font-medium">Motor components, Rotor & Stator Laminations, Electrical Stampings, Die-casted parts, and Sheet metal assemblies</span>. 
          Our products support{" "}
          <span className="font-medium">Induction Motors, Brushless DC Motors, Universal Motors, Shaded Pole Motors, Alternators, and Transformers</span>, 
          making us one of the most trusted{" "}
          <span className="font-medium">Stamping and Die casting manufacturers in Noida Hyderabad, India</span>.
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

export default Hero_Products;
