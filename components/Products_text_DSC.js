const Products_text_DSC = () => {
  return (
    <div className="w-5/6 flex mt-12 mx-auto">
      <div className="flex-col">
        <div className="lg:text-5xl text-6xl">
          We provide Universal motors components
        </div>
        <div className="mt-10 lg:mr-32 lg:text-2xl text-5xl">
          The ASA Industries is a full-service provider and can work out the
          perfect solution with its wide product range and large engineering
          know-how for every task. The unique palette ranges from components for
          single phase induction motors, brushless DC Motors, Universal motors,
          shaded pole motors to die casting for rotors and fan covers.
          <div className="font-medium mt-6">
            FEATURES: AUTO STITCH, NUMEROUS SLOT & PERIPHERAL GEOMETRIES{" "}
          </div>
          <div className="grid grid-cols-2">
            <img src="PRODUCT_IMAGES/DC_1.jpg"></img>
            <img src="PRODUCT_IMAGES/DC_2.jpg"></img>
          </div>
        </div>
      </div>
      <div className="flex-col w-full mt-10 lg:ml-20 mr-12 lg:text-lg text-3xl">
        <a href="/SPIM">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Single Phase Induction Motor Components
          </div>
        </a>
        <a href="/BDM">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Brushless DC Motor Components
          </div>
        </a>
        <a href="/DSC">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 scale-125 font-bold">
            Universal Motor Components
          </div>
        </a>
        <a href="/SPMC">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Shaded Pole Motor Components
          </div>
        </a>
        <a href="/DCC">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Die Casting Components
          </div>
        </a>
        <a href="/SMC">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Sheet Metal Components
          </div>
        </a>
      </div>
    </div>
  );
};
export default Products_text_DSC;
