const Hero_Products = ({ props }) => {
  return (
    <div className="">
      <img
        src="Products_Pedestal.png"
        alt="ASA Industries Hero Image"
        className="lg:pt-20"
      ></img>
      <h3 className="absolute w-2/5 text-6xl text-white ffont-mediumf top-96 left-32">
        {props}
      </h3>
    </div>
  );
};
export default Hero_Products;
