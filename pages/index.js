import NavbarMobile from "../components/navbar/NavbarMobile";
import Navbar from "../components/navbar/NavbarDesktop";
import Hero from "../components/Hero.js";
import About from "../components/About.js";
import Company from "../components/Company.js";
import Mission from "../components/Mission.js";
import Circle from "../components/home/dummy";
import Footer from "../components/Footer.js";
import Serve from "../components/Serve.js";
import JoinUs from "../components/home/JoinUs.js";
export default function Home() {
  return (
    <div className="mx-auto h-[100vh-20] w-screen absolute overflow-x-hidden">
      <NavbarMobile current={"HOME"} className="text-white" />
      <Navbar current={"HOME"} />
      <Hero />
      <Serve />
      <Circle />
      <About />
      <Company />
      <JoinUs />
      <Mission />
      <Footer />
    </div>
  );
}
