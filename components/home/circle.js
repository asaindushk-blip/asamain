import Badge from "../icons/badge";
import Flag from "../icons/flag";
import Contact from "../icons/contact";
import People from "../icons/people";
import { useState } from "react";

const PeopleComponent = ({ which, setWhich, setText1, setText2 }) => {
    const set = () => {
        setWhich("PEOPLE");
        setText1("200");
        setText2("And more happy employees");
    };

    return which === "PEOPLE" ? (
        <div className="absolute inset-x-0 grid transition-all duration-200 scale-150 top-[-5.5rem] place-items-center">
            <div className="grid w-24 h-24 bg-red-500 rounded-full lg:w-12 lg:h-12 place-items-center">
                <People className="w-20 h-20 lg:w-6 lg:h-6" />
            </div>
        </div>
    ) : (
        <div
            className="absolute inset-x-0 grid transition-all duration-200 top-[-5.5rem] place-items-center "
            onMouseEnter={set}
        >
            <div className="grid w-24 h-24 bg-red-500 rounded-full lg:w-12 lg:h-12 place-items-center">
                <People className="w-20 h-20 lg:w-6 lg:h-6"/>
            </div>
        </div>
    );
};

const FlagComponent = ({ which, setWhich, setText1, setText2 }) => {
    const set = () => {
        setWhich("FLAG");
        setText1("1985");
        setText2("Year of Establishment");
    };

    return which === "FLAG" ? (
        <div className="absolute inset-x-0 grid transition-all duration-200 scale-150 bottom-[-5.5rem] place-items-center">
            <div className="grid w-24 h-24 bg-red-500 rounded-full lg:w-12 lg:h-12 place-items-center">
                <Flag className="w-20 h-20 lg:w-6 lg:h-6" />
            </div>
        </div>
    ) : (
        <div
            className="absolute inset-x-0 grid transition-all duration-200 bottom-[-5.5rem] place-items-center "
            onMouseOver={set}
        >
            <div className="grid w-24 h-24 bg-red-500 rounded-full lg:w-12 lg:h-12 place-items-center">
                <Flag className="w-20 h-20 lg:w-6 lg:h-6" />
            </div>
        </div>
    );
};

const BadgeComponent = ({ which, setWhich, setText1, setText2 }) => {
    const set = () => {
        setWhich("BADGE");
        setText1("3");
        setText2("Awards and Recognition");
    };
    return which === "BADGE" ? (
        <div className="absolute inset-y-0 grid transition-all duration-200 scale-150 right-[-5.5rem] place-items-center">
            <div className="grid w-24 h-24 bg-red-500 rounded-full lg:w-12 lg:h-12 place-items-center">
                <Badge className="w-20 h-20 lg:w-6 lg:h-6" />
            </div>
        </div>
    ) : (
        <div
            className="absolute inset-y-0 grid transition-all duration-200 right-[-5.5rem] place-items-center "
            onMouseOver={set}
        >
            <div className="grid w-24 h-24 bg-red-500 rounded-full lg:w-12 lg:h-12 place-items-center">
                <Badge className="w-20 h-20 lg:w-6 lg:h-6" />
            </div>
        </div>
    );
};

const ContactComponent = ({ which, setWhich, setText1, setText2 }) => {
    const set = () => {
        setWhich("CONTACT");
        setText1("40");
        setText2("And more satisfied clients");
    };

    return which === "CONTACT" ? (
        <div className="absolute inset-y-0 grid transition-all duration-200 scale-150 left-[-5.5rem] place-items-center">
            <div className="grid w-24 h-24 bg-red-500 rounded-full lg:w-12 lg:h-12 place-items-center">
                <Contact className="w-20 h-20 lg:w-6 lg:h-6" />
            </div>
        </div>
    ) : (
        <div
            className="absolute inset-y-0 grid transition-all duration-200 left-[-5.5rem] place-items-center "
            onMouseOver={set}
        >
            <div className="grid w-24 h-24 bg-red-500 rounded-full lg:w-12 lg:h-12 place-items-center">
                <Contact className="w-20 h-20 lg:w-6 lg:h-6" />
            </div>
        </div>
    );
};

const Circle = ({ text1, setText1, setText2 }) => {
    const [which, setWhich] = useState("PEOPLE");

    return (
        <div className="relative w-[30vh] h-[30vh]  rounded-full border-[5rem] lg:border-[3rem] border-blue-700 lg:w-[50vh] lg:h-[50vh]">
            <div className="absolute inset-0 grid h-full mx-auto my-auto text-4xl font-bold text-center place-items-center">
                {text1}
            </div>
            <PeopleComponent
                which={which}
                setWhich={setWhich}
                setText1={setText1}
                setText2={setText2}
            />
            <FlagComponent
                which={which}
                setWhich={setWhich}
                setText1={setText1}
                setText2={setText2}
            />
            <ContactComponent
                which={which}
                setWhich={setWhich}
                setText1={setText1}
                setText2={setText2}
            />
            <BadgeComponent
                which={which}
                setWhich={setWhich}
                setText1={setText1}
                setText2={setText2}
            />
        </div>
    );
};

export default Circle;
