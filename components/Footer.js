import Image from "next/image";
import asa from "../public/ASA_Footer.png";

const Footer = () => {
  return (
    <div className="bg-[#000C56] w-screen lg:text-lg text-3xl font-normal h-screen lg:h-auto grid place-items-center">
      <div className="flex flex-col justify-around w-full gap-24 py-8 my-auto text-center lg:text-left lg:flex-row lg:gap-2">
        <div className="my-auto">
          <Image src={asa} width={240} height={100} fixed />
        </div>

        <div className="hidden ml-10">
          <div className="font-semibold text-[#FD3649] text-6xl lg:text-3xl">
            Navigation
          </div>
          <div className="text-white">
            <a href="#Intro">Home</a>
          </div>
          <div className="text-white">
            <a href="/Quality">Quality</a>
          </div>
          <div className="text-white">
            <a href="/Products">Products </a>
          </div>

          <div className="text-white">
            <a href="/Career">Career</a>{" "}
          </div>
          <div className="text-white">
            <a href="/Processes">Processes</a>{" "}
          </div>
          <div className="text-white">
            <a href="/ContactUs">Contact Us</a>{" "}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-[#FD3649] text-6xl lg:text-3xl">
            Processes
          </div>
          <div className="text-white">
            <a href="/Processes">Progressive Die Stamping</a>
          </div>
          <div className="text-white">
            <a href="/Processes">Aluminium Die Casting</a>
          </div>
          <div className="text-white">
            <a href="/Processes">Annealing</a>
          </div>
          <div className="text-white">
            <a href="/Processes">Tooling</a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="font-semibold text-[#FD3649] text-6xl lg:text-3xl">
            <a href="/Products">Products</a>
          </div>
          <div className="text-white">
            <a href="/SPIM">Single Phase Induction Motor Components</a>
          </div>
          <div className="text-white">
            <a href="/BDM">Brushless DC Motor Components</a>
          </div>
          <div className="text-white">
            <a href="/DSC">Universal Motor Components</a>
          </div>
          <div className="text-white">
            <a href="/SPMC">Shaded Pole Motor Components</a>
          </div>
          <div className="text-white">
            <a href="/DcC">Die Casting Components</a>
          </div>
          <div className="text-white">
            <a href="/SMC">Sheet Metal Components</a>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="font-semibold text-[#FD3649] text-6xl lg:text-3xl">
              Contact
            </div>
            <div className="text-white">
              <a href="tel:+919871722954">+91-9871722954</a>
            </div>
            <div className="text-white">
              <a href="mailto:info@asaindus.com">info@asaindus.com</a>{" "}
            </div>
            <div className="text-white">
              <a href="mailto:info@asaindus.com">sales@asaindus.com</a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
