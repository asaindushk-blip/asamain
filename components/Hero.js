import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="intro"
      className="relative grid w-screen grid-rows-1 bg-[#000C56] lg:top-20 top-0"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Manufacturer of Electrical Stamping, Die Casted Rotor, Stator and Sheet Metal Components for Electrical Appliances"
          title="ASA Industries - Leading Stamping Manufacturer and Die Casting Company in Noida"
          className="opacity-40 filter brightness-75 drop-shadow-md saturate-60 object-cover"
          fill
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-semibold text-white leading-snug"
        >
          Manufacturer of Electrical Stamping, Die Casted Rotor & Sheet Metal
          Components
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white leading-relaxed max-w-3xl">
          Since 1985, <strong>ASA Industries</strong> has been a trusted{" "}
          <strong>Stamping Manufacturer</strong> and{" "}
          <strong>Die Casting Company in Noida</strong>, delivering excellence
          in <strong>Rotor</strong>, <strong>Stator</strong>,{" "}
          <strong>Electrical Stamping</strong>, <strong>Motor Stamping</strong>,{" "}
          and <strong>Sheet Metal Components</strong>.  
          We specialize in{" "}
          <strong>Die Casted Components</strong>,{" "}
          <strong>Progressive Die</strong>, <strong>Stamping Tooling</strong>,{" "}
          <strong>Lamination Stamping Process</strong>,{" "}
          <strong>Stamping Dies</strong>, and{" "}
          <strong>Induction Motors</strong>.  
          Our expertise covers{" "}
          <strong>Brushless DC Motors</strong>,{" "}
          <strong>Universal Motors</strong>,{" "}
          <strong>Shaded Pole Motors</strong>,{" "}
          <strong>Ceiling Fan Covers</strong>, and{" "}
          <strong>Magnetic Core Manufacturing</strong> — making us one of the
          leading <strong>Electrical Stamping Manufacturers</strong> worldwide.
        </p>

        {/* Call to Action */}
        <a
          href="#products"
          className="mt-8 inline-block bg-white text-[#000C56] px-6 py-3 rounded-2xl font-medium shadow-md hover:bg-gray-100 transition"
        >
          Explore Our Products
        </a>
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

export default Hero;
