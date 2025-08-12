const Processes_ADC = () => {
  return (
    <div className="mx-auto  text-center w-5/6 lg:grid grid-cols-2 2xl:pt-48 lg:pt-80 xl:pt-64">
      <div className="text-left">
        <div className="text-indigo-900 font-black text-6xl lg:pt-0 pt-12 lg:text-4xl xl:text-3xl">
          Aluminium Die Casting
        </div>
        <div className="xl:text-xl lg:text-3xl text-4xl lg:pt-0 pt-8">
          We possess a wide range of manufacturing capability in Pressure Die
          casting. Our current fleet of machines range from 80 Ton to 250 Ton
          Locking which enables us to manufacture wide range of Aluminium
          products. We currently manufacture highly precise aluminium die
          castings with best-in-class quality. Our in-house tooling facility
          helps us to significantly reduce tool development, repair and
          maintenance cost.
        </div>
      </div>
      <div className="lg:relative grid grid-cols-2 lg:block">
        <img
          src="ADC-1.png"
          className="lg:absolute scale-50 bottom-1 left-20 hidden lg:block"
        ></img>
        <img
          src="ADC-3.png"
          className="lg:absolute lg:scale-50 left-56 top-4"
        ></img>
        <img src="ADC-2.png" className="lg:absolute lg:scale-75"></img>
      </div>
    </div>
  );
};
export default Processes_ADC;
