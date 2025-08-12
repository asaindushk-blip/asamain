import NavElement from "./NavElement";

const Navbar = ({ current, className }) => {
  return (
    <div className="fixed z-20 items-center justify-between hidden w-screen pl-4 text-2xl bg-white select-none lg:flex lg:text-lg">
      <a href="/#Intro">
        <img
          src="ASALogo.png"
          alt="ASA Industries Logo"
          className="lg:h-20 hover:animate-bounce-2"
        ></img>
      </a>
      <nav>
        <div className="flex justify-between mx-8 my-auto">
          <NavElement label={"HOME"} current={current} href={"/#Intro"} />
          <NavElement
            label={"PROCESSES"}
            current={current}
            href={"/Processes"}
          />
          <NavElement label={"QUALITY"} current={current} href={"/Quality"} />
          <NavElement label={"PRODUCTS"} current={current} href={"/Products"} />
          <NavElement label={"CAREER"} current={current} href={"/Career"} />
          <a href="/ContactUs" passHref prefetch={false}>
            <div className="px-6 py-2 mx-4 text-white transition-all duration-200 bg-red-500 rounded-lg">
              {"CONTACT US"}
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
