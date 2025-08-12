import NavbarMobile from "../components/navbar/NavbarMobile";
import Navbar from "../components/navbar/NavbarDesktop";
import Hero_Process from "../components/Hero_Process.js";
import Processes_Die from "../components/Processes_Die.js";
import Processes_ADC from "../components/Processes_ADC.js";
import Annealing from "../components/Processes_Annealing.js";
import Processes_Tooling from "../components/Processes_Tooling.js";
import Processes_SMC from "../components/Processes_SMC.js";
import Footer from "../components/Footer.js";
const Processes = () => {
    return (
        <div className="mx-auto h-[100vh-20] w-screen absolute overflow-x-hidden">
            <Navbar current={"PROCESSES"} />
            <NavbarMobile current={"PROCESSES"} />

            <Hero_Process />
            <Processes_Die />
            <Processes_ADC />
            <Annealing />
            <Processes_Tooling />
            <Processes_SMC />
            <Footer />
        </div>
    );
};
export default Processes;
