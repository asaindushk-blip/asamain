import Hero_Products from "../components/Hero_Products.js";
import Navbar from "../components/Navbar.js";
import Products_text from "../components/Products_text_DCC.js";
import Products_Contact from "../components/Products_Contact.js";
import Footer from "../components/Footer.js";
const SPIM = () => {
  return (
    <div className="mx-auto h-[100vh-20] w-screen absolute overflow-x-hidden">
      <Navbar />
      <Hero_Products props={"DIE CASTING COMPONENTS"} />
      <Products_text />
      <Products_Contact />
      <Footer />
    </div>
  );
};
export default SPIM;
