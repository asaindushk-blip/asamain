const Products_text = () => {
  return (
    <div className="flex w-5/6 mx-auto mt-12">
      <div className="flex-col">
        <div className="lg:text-5xl text-6xl">
          We have the optimal solution, for numerous applications
        </div>
        <div className="mt-10 lg:mr-32 lg:text-2xl text-5xl">
          The ASA Industries is a full-service provider and can work out the
          perfect solution with its wide product range and large engineering
          know-how for every task. The unique palette ranges from components for
          single phase induction motors, brushless DC Motors, Universal Motors,
          Shaded pole motors to die casting for rotors and fan covers.
        </div>
        <div className="grid grid-cols-3 gap-2 mt-16">
          <div className="relative mx-2 my-4 group">
            <a href="/SPIM">
              <img src="PRODUCT_IMAGES/SPIM_1.jpg"></img>
              <div className="absolute top-0 invisible w-full h-full pt-20 text-3xl text-center text-white bg-black opacity-50 group-hover:visible">
                SINGLE PHASE INDUCTION MOTOR<br></br>
              </div>
            </a>
          </div>
          <div className="relative mx-2 my-4 group">
            <a href="/BDM">
              <img src="PRODUCT_IMAGES/BLDC.jpg"></img>
              <div className="absolute top-0 invisible w-full h-full pt-20 text-3xl text-center text-white bg-black opacity-50 group-hover:visible">
                BRUSHLESS DC MOTOR<br></br>
              </div>
            </a>
          </div>
          <div className="relative mx-2 my-4 group">
            <a href="/DSC">
              <img src="PRODUCT_IMAGES/DC_1.jpg"></img>
              <div className="absolute top-0 invisible w-full h-full pt-20 text-3xl text-center text-white bg-black opacity-50 group-hover:visible">
                Universal Motors<br></br>
              </div>
            </a>
          </div>
          <div className="relative mx-2 my-4 group">
            <a href="/SPMC">
              <img src="PRODUCT_IMAGES/SPM_1.jpg"></img>
              <div className="absolute top-0 invisible w-full h-full pt-20 text-3xl text-center text-white bg-black opacity-50 group-hover:visible">
                SHADED POLE MOTOR<br></br>
              </div>
            </a>
          </div>
          <div className="relative mx-2 my-4 group">
            <a href="/DCC">
              <img src="PRODUCT_IMAGES/DC_1.jpg"></img>
              <div className="absolute top-0 invisible w-full h-full pt-20 text-3xl text-center text-white bg-black opacity-50 group-hover:visible">
                DIE CASTING COMPONENTS<br></br>
              </div>
            </a>
          </div>
          <div className="relative mx-2 my-4 group">
            <a href="/SMC">
              <img src="PRODUCT_IMAGES/SM_1.jpg"></img>
              <div className="absolute top-0 invisible w-full h-full pt-20 text-3xl text-center text-white bg-black opacity-50 group-hover:visible">
                SHEET METAL COMPONENTS<br></br>
              </div>
            </a>
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
          <div className="px-6 py-4 my-8 duration-200 bg-gray-400 rounded-md hover:scale-[1.1] ">
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
