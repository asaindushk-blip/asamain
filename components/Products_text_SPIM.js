const Products_text_SPIM = () => {
  return (
    <div className="w-5/6 flex mt-12 mx-auto">
      <div className="flex-col">
        <div className="lg:text-5xl text-6xl">
          We have components of single phase induction motors
        </div>
        <div className="mt-10  lg:text-2xl text-5xl lg:mr-32">
          Single Phase induction motors are most common types of motors used for
          various applications such as Pumps, Compressors, Small Fans etc. We
          offer various range of punches and other sheet metal cuts along with
          customer specific requirements.
          <div className="font-medium mt-6">
            FEATURES: AUTO STITCH, NUMEROUS SLOT & PERIPHERAL GEOMETRIES{" "}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img src="PRODUCT_IMAGES/SPIM_1.jpg"></img>
            <img src="PRODUCT_IMAGES/SPIM_2.JPG"></img>

            <img src="PRODUCT_IMAGES/SPIM_3.jpg"></img>
            <img src="PRODUCT_IMAGES/SPIM_4.jpg"></img>
          </div>
        </div>
      </div>
      <div className="flex-col w-full mt-10 lg:ml-10 mr-12 lg:text-lg text-3xl">
        <a href="/SPIM">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 scale-125 font-bold">
            Single Phase Induction Motor Components
          </div>
        </a>
        <a href="/BDM">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Brushless DC Motor Components
          </div>
        </a>
        <a href="/DSC">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Universal Motor Components
          </div>
        </a>
        <a href="/SPMC">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Shaded Pole Motor Components
          </div>
        </a>
        <a href="DCC">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Die Casting Components
          </div>
        </a>
        <a href="SMC">
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
            Sheet Metal Components
          </div>
        </a>
      </div>
    </div>
  );
};
export default Products_text_SPIM;
