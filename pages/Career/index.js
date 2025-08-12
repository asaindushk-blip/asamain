import Navbar from "../../components/navbar/NavbarDesktop.js";
import NavbarMobile from "../../components/navbar/NavbarMobile.js";
import Career_Opportunities from "../../components/Career_Opportunities.js";
import Footer from "../../components/Footer.js";
const Career = () => {
  return (
    <section className="absolute w-screen h-[100vh-20]">
      <Navbar current={"CAREER"} />
      <NavbarMobile current={"CAREER"} />
      <Career_Opportunities />
      <Footer />
    </section>
  );
};
export default Career;
