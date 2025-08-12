const Products_text = () => {
  return (
    <div className="flex w-5/6 mx-auto mt-12">
      <div className="flex-col">
        <div className="lg:text-5xl text-6xl">
          We provide high efficiency with our Brushless DC Motor components
        </div>
        <div className="mt-10  lg:text-2xl text-5xl lg:mr-32">
          Brushless DC motors are gaining signification traction in the Motor
          industry because of it's high efficiency at wide range of speeds and
          torque. This trend is bound to continue in future because of their
          noise less operation and longer operating life due to lack of
          electrical and frictional losses.
          <div className="mt-6 font-medium">
            FEATURES: AUTO STITCH, NUMEROUS SLOT & PERIPHERAL GEOMETRIES{" "}
          </div>
          <div className="w-2/3 mx-auto">
            <img src="PRODUCT_IMAGES/BLDC.jpg"></img>
          </div>
        </div>
      </div>
      <div className="flex-col w-full mt-10 lg:ml-20 mr-12 lg:text-lg text-3xl">
        <a href="/SPIM">
          <div className="px-6 py-4 my-8 duration-200 bg-gray-400 rounded-md hover:scale-[1.1] ">
            Single Phase Induction Motor Components
          </div>
        </a>
        <a href="/BDM">
          <div className="px-6 py-4 my-8 font-bold duration-200 scale-125 bg-gray-400 rounded-md">
            Brushless DC Motor Components
          </div>
        </a>
        <a href="/DSC">
          <div className="px-6 py-4 my-8 duration-200 bg-gray-400 rounded-md hover:scale-[1.1] ">
            Universal Motor Components
          </div>
        </a>
        <a href="/SPMC">
          <div className="px-6 py-4 my-8 duration-200 bg-gray-400 rounded-md hover:scale-[1.1] ">
            Shaded Pole Motor Components
          </div>
        </a>
        <a href="/DCC">
          <div className="px-6 py-4 my-8 duration-200 bg-gray-400 rounded-md hover:scale-[1.1] ">
            Die Casting Components
          </div>
        </a>
        <a href="/SMC">
          <div className="px-6 py-4 my-8 duration-200 bg-gray-400 rounded-md hover:scale-[1.1] ">
            Sheet Metal Components
          </div>
        </a>
      </div>
    </div>
  );
};
export default Products_text;
