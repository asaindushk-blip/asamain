import Hero_Products from "../components/Hero_Products.js";
import NavbarMobile from "../components/navbar/NavbarMobile";
import Navbar from "../components/navbar/NavbarDesktop";
import Products_text from "../components/Products_text_SMC.js";
import Products_Contact from "../components/Products_Contact.js";
import Footer from "../components/Footer.js";
const SMC = () => {
    return (
        <div className="mx-auto h-[100vh-20] w-screen absolute overflow-x-hidden">
            <Navbar current={"PRODUCTS"} />
            <NavbarMobile current={"PRODUCTS"} />

            <Hero_Products props={"SHEET METAL COMPONENTS"} />
            <Products_text />
            <Products_Contact />
            <Footer />
        </div>
    );
};
export default SMC;
