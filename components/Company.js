const Company = () => {
  return (
    <div className="mr-24 ml-20 md:mt-40 mt-60">
      <div className="md:grid md:grid-cols-2 gap-12 md:text-lg text-4xl">
        <div className="order-2 md:mb-auto mb-16">
          <h1 className="md:text-4xl text-6xl md:font-normal font-black pb-16">
            The Company
          </h1>
          ASA Industries is a leading manufacturer for Magnetic cores and Die-casted components. We have
          03 manufacturing units across India. <br></br>
          <div className="pt-4">
            We are among most trusted suppliers for our range of products among
            some top Indian & International brands.
          </div>
          <div className="pt-4">
            We possess an extremely talented multigenerational workforce along with
            aggressive yet composed leadership team which is driving the company
            towards a great future.
          </div>
        </div>
        <div className="order-1">
          <img
            src="ASA-Industries-Unit-1.png"
            className="scale-90"
            alt="ASA Industries Unit-1 Sector-1"
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Company;
