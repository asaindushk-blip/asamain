const Products_text_SMC = () => {
  return (
    <div className="w-5/6 flex mt-12 mx-auto">
      <div className="flex-col">
        <div className="lg:text-5xl text-6xl">
          We provide semi-finished and finished components tailored to
          customer's needs
        </div>
        <div className="mt-10 lg:mr-32 lg:text-2xl text-5xl">
          Our other Sheet metal components include fan covers available in
          various dimension and sheet thicknesses with excellent surface finish.
          We offer semi-finished and fully finished components as per customer
          requirement.
        </div>
        <div className="mt-12 grid grid-cols-2">
          <img src="PRODUCT_IMAGES/SM_1.jpg" className="mx-auto"></img>
          <img src="PRODUCT_IMAGES/SM_2.jpg" className="mx-auto"></img>
          <img src="PRODUCT_IMAGES/SM_3.jpg" className="mx-auto"></img>
        </div>
      </div>
      <div className="flex-col w-full mt-10 lg:ml-20 lg:mr-12 lg:text-lg text-3xl">
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
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 hover:scale-[1.1]  duration-200">
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
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 scale-125 font-bold duration-200">
            Sheet Metal Components
          </div>
        </a>
      </div>
    </div>
  );
};
export default Products_text_SMC;
