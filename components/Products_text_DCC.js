const Products_text_DCC = () => {
  return (
    <div className="w-5/6 flex mt-12 mx-auto">
      <div className="flex-col">
        <div className="lg:text-5xl text-6xl">
          We manufacture wide range of die casted rotors.
        </div>
        <div className="mt-10 lg:text-2xl text-5xl">
          We possess a wide range of pressure die casting machines and a Die
          casting experts which enable us to manufacture high quality precise
          castings.
        </div>
        <div className="grid grid-cols-2">
          <img src="PRODUCT_IMAGES/DIE_1.jpg"></img>
          <img src="PRODUCT_IMAGES/DIE_3.jpg"></img>
          <img src="PRODUCT_IMAGES/DIE_4.jpg"></img>
          <img src="PRODUCT_IMAGES/DIE_5.jpg"></img>
        </div>
      </div>
      <div className="flex-col w-full mt-10 lg:ml-32 mr-12 lg:text-lg text-3xl">
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
          <div className="bg-gray-400 py-4 px-6 rounded-md my-8 scale-125 font-bold duration-200">
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
export default Products_text_DCC;
