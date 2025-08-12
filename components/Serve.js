import Image from "next/image";
import map from "../public/Map.svg";
import delivery from "../public/Delivery.svg";
import precision from "../public/Precision.svg";
import sustainable from "../public/Sustainable.svg";
import process from "../public/Process.svg";
const Serve = () => {
  return (
    <div className="grid-cols-2 gap-4 mx-auto mt-48 md:grid md:w-5/6">
      <div className="grid lg:h-screen place-items-center">
        <div className="">
          <div className="text-6xl font-semibold text-center md:text-4xl">
            Our Speciality
          </div>
          <div className="grid grid-cols-2 mt-32 text-4xl font-semibold md:text-lg">
            <div className="items-center text-center hover:scale-[1.1] duration-200 hover:brightness-125">
              <Image src={delivery} alt="On -time Delivery" />
              <br></br>
              On-time Delivery
            </div>
            <div className="items-center text-center hover:scale-[1.1] duration-200 hover:brightness-125">
              <Image src={precision} alt="Precision" />
              <br></br>
              Precision
            </div>
            <div className="items-center text-center mt-20 hover:scale-[1.1] duration-200 hover:brightness-125">
              <Image src={sustainable} alt="Sustainable Manufacturing" />
              <br></br>
              Sustainable Manufacturing
            </div>
            <div className="items-center mt-24 text-center  hover:scale-[1.1] duration-200 hover:brightness-125">
              <Image src={process} alt="Controlled Process" />
              <br></br>
              Controlled Process
            </div>
          </div>
        </div>
      </div>
      <div className="grid h-screen place-items-center mt-12">
        <div className="flex flex-col">
          <div className="text-6xl font-semibold text-center md:text-4xl">
            Areas We Serve
          </div>
          <Image
            src={map}
            className="duration-200 scale-90 hover:brightness-110 hover:scale-105npm"
            alt="Places where we deliver our services on the map of India"
          />
        </div>
      </div>
    </div>
  );
};
export default Serve;
