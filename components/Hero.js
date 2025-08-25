const Hero = () => {
  return (
    <section
      id="intro"
      className="relative grid w-screen grid-rows-1 bg-[#000C56] lg:top-20 top-0 md:object-cover"
      aria-label="ASA Industries - Manufacturer of Electrical Stamping, Die Casted Rotor and Sheet Metal Components"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="ASA Industries - Manufacturer of Electrical Stamping, Die Casted Rotor, Sheet Metal Components, Motor Stamping, and Die Casting in Noida"
        title="ASA Industries - Electrical Stamping, Rotor, Stator & Sheet Metal Components Manufacturer"
        className="opacity-40 filter brightness-75 drop-shadow-md saturate-60 w-full h-auto object-cover"
        loading="lazy"
      />

      {/* Main Heading */}
      <h1
        className="absolute mx-auto text-4xl md:text-6xl font-bold leading-snug text-left text-white md:w-3/5 md:top-72 top-60"
        style={{ left: "5%" }}
      >
        Leading Manufacturer of Electrical Stamping, Die Casted Rotor <br />
        and Sheet Metal Components Since 1985
      </h1>

      {/* Supporting Paragraph for SEO */}
      <p
        className="absolute mx-auto text-base md:text-lg text-gray-200 md:w-3/5 md:top-[29rem] top-[23rem] leading-relaxed"
        style={{ left: "5%" }}
      >
        ASA Industries is a trusted{" "}
        <strong>stamping manufacturer</strong> and{" "}
        <strong>die casting company in Noida</strong>, specializing in{" "}
        <strong>electrical stamping</strong>,{" "}
        <strong>motor stamping</strong>,{" "}
        <strong>progressive dies</strong>,{" "}
        <strong>stamping tooling</strong>, and{" "}
        <strong>lamination stamping processes</strong>. We deliver
        high-quality <strong>rotor and stator components</strong>,{" "}
        <strong>brushless DC motors</strong>,{" "}
        <strong>universal motors</strong>,{" "}
        <strong>shaded pole motors</strong>,{" "}
        <strong>ceiling fan covers</strong>,{" "}
        <strong>magnetic cores</strong>, and{" "}
        <strong>sheet metal components</strong> to global clients.
      </p>
    </section>
  );
};

export default Hero;
