import NavbarMobile from "../components/navbar/NavbarMobile";
import Navbar from "../components/navbar/NavbarDesktop";
import Footer from "../components/Footer.js";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCards]);
const Quality = () => {
  return (
    <div className="absolute  overflow-x-hidden">
      <Navbar current={"QUALITY"} />
      <NavbarMobile current={"QUALITY"} className="text-black" />
      <div className="relative">
        <div className="w-screen mx-auto text-6xl font-semibold text-center text-indigo-900 md:text-4xl top-48">
          We consistently strive to improve our Services by reviewing the
          <br></br>
          effectiveness of quality management systems for continual improvement.
          <h1 className="pt-20">Quality Policy</h1>
          <div className="w-16 pt-8 mx-auto "></div>
          <ul className="m-20 mt-8 text-6xl font-normal text-justify text-black list-disc md:text-lg w-5/6 mx-auto">
            ASA Industries is committed towards providing continually enhanced
            processes to surpass the customer requirements to achieve this we
            shall:
            <li>
              Develop and enhance the Quality Management System through periodic
              audits which covers the overall value chain of the product.
            </li>
            <li>
              Establish a framework achieving achieving and reviewing quality
              objectives.
            </li>
            <li>
              Proactively seek Customer feedback and appropriately address them.
            </li>
            <li>Investing in training and development of employees.</li>
            <li>
              Being the first movers in adopting new technological developments.
            </li>
          </ul>
          <div className="w-5/6 mx-auto mb-8">
            <div className="grid-cols-3 md:grid">
              <div className="duration-200 hover:scale-[1.1] md:translate-y-[-3vh]">
                <div className="flex justify-center">
                  <img src="Incoming.png" width="25%"></img>
                </div>
                <div className="text-red-500 md:pt-8">
                  Incoming Material Inspection
                </div>
                <ul className="pt-6 text-6xl text-justify list-disc md:text-xl">
                  <li>
                    All dimensional parameters of incoming sheet metal coils are
                    checked by our qualified quality personnel.
                  </li>
                  <li> Visual inspection of any manufacturing defect.</li>
                  <li>
                    {" "}
                    Third party inspection for metallurgy of alloy steel.
                  </li>
                </ul>
              </div>
              <div className="duration-200 md:translate-y-48 translate-y-32 pb-60 hover:scale-[1.1]">
                <div className="flex justify-center">
                  <img src="Inprocess.png" width="25%"></img>
                </div>
                <div className="text-red-500 md:pt-8">
                  In-Process<br></br> Checks
                </div>
                <ul className="pt-6 text-6xl text-justify list-disc md:text-xl">
                  <li>
                    Dimensional accuracy checks for SPC and visual inspection
                    for process defects.
                  </li>
                  <li> Epstein testing for stamped and annealed stators.</li>
                  <li> FMEA and Control Plans.</li>
                  <li> Surge testing for die-casted rotors.</li>
                </ul>
              </div>
              <div className="duration-200 hover:scale-[1.1]">
                <div className="flex justify-center">
                  <img src="Outgoing.png" width="25%"></img>
                </div>
                <div className="text-red-500 md:pt-8">
                  Finished Goods and Packaging
                </div>
                <ul className="pt-6 text-6xl text-justify list-disc md:text-xl">
                  <li>Ensuring the final batch quality before despatch.</li>
                  <li> Ensuring high standards in Packaging and shipping.</li>
                </ul>
              </div>
            </div>
            <h1 className="pt-20">Certificates</h1>
            <div className="pt-8 mx-auto"></div>
            <img
              src="Quality_Certificate.png"
              className="pt-24 mx-auto hover:scale-[1.1] hover:brightness-110 duration-200"
              alt="ASA Industries Quality Certificate 2021"
            ></img>
          </div>
          <div className="text-sm text-left">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quality;
