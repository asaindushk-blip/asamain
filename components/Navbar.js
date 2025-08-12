const NavElement = ({ label, href, current }) => {
  return label === current ? (
    <a
      href={href}
      prefetch={false}
      passHref
      className="my-auto text-blue-500 underline"
    >
      <div className="px-2 mx-4 font-medium transition-all duration-200 rounded-full">
        {label}
      </div>
    </a>
  ) : (
    <a
      href={href}
      prefetch={false}
      passHref
      className="my-auto font-medium hover:text-blue-500 hover:underline"
    >
      <div className="px-2 mx-4 transition-all duration-200 rounded-full">
        {label}
      </div>
    </a>
  );
};

const Navbar = ({ current }) => {
  return (
    <div className="fixed z-20 flex items-center justify-between w-screen pl-4 bg-white select-none text-2xl  md:text-lg">
      <a href="/#Intro">
        <img
          src="ASALogo.png"
          alt="ASA Industries Logo"
          className="md:h-20 hover:animate-bounce-2"
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
