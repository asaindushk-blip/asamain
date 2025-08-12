import { useState } from "react";
import Burger from "../icons/burger";
import GoLeft from "../icons/goLeft";
import NavElement from "./NavElement";

const NavbarMobileScreen = ({ current, string, setString }) => {
  const close = () => setString("translate-x-[100vw]");
  return (
    <div
      className={`fixed grid w-screen h-screen lg:hidden place-items-center  transition-all duration-200 bg-white z-10 ${string}`}
    >
      <Burger className="absolute z-10 w-20 h-20 text-white cursor-pointer navbar right-20 top-10" />
      <GoLeft
        className="absolute z-20 w-24 h-24 text-black cursor-pointer navbar left-20 top-10"
        onClick={close}
      />
      <div className="flex flex-col justify-center text-center align-middle">
        <NavElement label={"HOME"} current={current} href={"/#Intro"} />
        <NavElement label={"PROCESSES"} current={current} href={"/Processes"} />
        <NavElement label={"QUALITY"} current={current} href={"/Quality"} />
        <NavElement label={"PRODUCTS"} current={current} href={"/Products"} />
        <NavElement label={"CAREER"} current={current} href={"/Career"} />
        <a href="/ContactUs" passHref prefetch={false}>
          <div className="px-12 py-8 text-white transition-all duration-200 bg-blue-500 rounded-2xl text-8xl lg:text-base lg:px-6 lg:py-2 lg:mx-4 lg:rounded-lg">
            {"CONTACT US"}
          </div>
        </a>
      </div>
    </div>
  );
};

const NavbarMobile = ({ current, className }) => {
  const [translate_string, setString] = useState("translate-x-[100vw]");
  const open = () => setString("translate-x-0");

  return (
    <div className={`${className} lg:hidden`}>
      <Burger
        className="fixed z-10 w-20 h-20 cursor-pointer navbar right-20 top-10"
        onClick={open}
      />
      <NavbarMobileScreen
        current={current}
        string={translate_string}
        setString={setString}
      />
    </div>
  );
};
export default NavbarMobile;
