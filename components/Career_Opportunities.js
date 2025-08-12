import { useState } from "react";
import axios from "./axios";
import Link from "next/link";
import Linkedin from "./icons/linkedin";
import { useRouter } from "next/dist/client/router";

const Accepted = ({ accepted, setAccepted, title, bool }) => {
    const set = () => setAccepted(bool);
    return accepted === bool ? (
        <div className="px-6 py-2 text-white bg-blue-500 border-2 border-blue-500 rounded-lg cursor-pointer">
            {title}
        </div>
    ) : (
        <div
            className="px-6 py-2 text-blue-500 bg-white border-2 border-blue-500 rounded-lg cursor-pointer hover:text-white hover:bg-blue-500"
            onClick={set}
        >
            {title}
        </div>
    );
};

const Submit = ({ accepted, applicant, router, cv }) => {
    const sendOnClick = async () => {
        const data = new FormData();
        data.append("file", cv);
        data.append("first", applicant.first);
        data.append("lastName", applicant.lastName);
        data.append("email", applicant.email);
        data.append("phone", applicant.phone);
        data.append("message", applicant.message);
        data.append("applyingFor", applicant.applyingFor);
        /* configure the headers and body */
        /* including all that signature verification */
        axios.post("/apply", data);
        // await axios.get("/test");
        router.push("/Career/acknowledge");
    };

    return accepted ? (
        <div
            className="mx-auto w-min h-min py-2 px-6 bg-red-500 rounded-lg transition-colors cursor-pointer text-white duration-200 hover:bg-white border-2 border-red-500 hover:text-red-500 "
            onClick={sendOnClick}
        >
            Submit
        </div>
    ) : (
        <div className="mx-auto w-min h-min py-2 px-6 bg-white rounded-lg transition-colors cursor-pointer text-gray-500 duration-200 border-2 border-gray-400 ">
            Submit
        </div>
    );
};

const ApplyingFor = ({ title, field, setApplicant, applicant }) => {
    const setValue = () =>
        setApplicant({
            ...applicant,
            applyingFor: field,
        });

    return applicant.applyingFor === field ? (
        <div className="px-6 py-2 text-white bg-blue-500 border-2 border-blue-500 rounded-lg cursor-pointer">
            {title}
        </div>
    ) : (
        <div
            className="px-6 py-2 text-blue-500 bg-white border-2 border-blue-500 rounded-lg cursor-pointer hover:text-white hover:bg-blue-500"
            onClick={setValue}
        >
            {title}
        </div>
    );
};

const Career_Opportunities = () => {
    const [applicant, setApplicant] = useState({
        first: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        applyingFor: "",
    });
    let [cv, setCv] = useState("");

    const router = useRouter();

    const [accepted, setAccepted] = useState(false);

    const handleChange = (e) => {
        setApplicant({
            ...applicant,
            [e.target.name]: e.target.value,
        });
    };

    const handleFile = (e) => {
        setCv(e.target.files[0]);
    };

    return (
        <div className="relative w-screen text-center top-24 md:text-xl text-5xl">
            <h1 className="md:text-3xl text-6xl text-indigo-900 font-bold">
                Career Opportunities
            </h1>
            <p className="w-5/6 mx-auto my-6 text-5xl md:text-2xl sm:my-12 md:w-3/5">
                We believe in investing in young minds. Our experienced
                leadership team has developed ASA to become a dynamic and fast
                growing organization. Our communication channels are open to
                Management for all level of employees, making us a strongly
                bound team.
            </p>
            <div className="grid w-5/6 grid-cols-1 gap-4 mx-auto my-12 md:w-3/5 sm:grid-cols-2">
                <Link href="/Career/0">
                    <div className="border-2 border-black h-[25vh] cursor-pointer flex flex-col justify-center align-middle">
                        <Linkedin className="text-black w-20 mx-auto h-20" />
                        <p>Open in another tab</p>
                    </div>
                </Link>
                <Link href="/Career/1">
                    <div className="border-2 border-black h-[25vh] cursor-pointer flex flex-col justify-center align-middle">
                        <Linkedin className="text-black w-20 mx-auto h-20" />
                        <p>Open in another tab</p>
                    </div>
                </Link>
            </div>
            <div className="grid w-5/6 grid-cols-1 gap-4 mx-auto my-12 sm:w-3/5 sm:grid-cols-2">
                <div className="flex flex-col w-full">
                    <h3 className="text-left">First name:</h3>
                    <input
                        type="text"
                        value={applicant.first}
                        onChange={handleChange}
                        name="first"
                        className="p-2 my-1 transition-colors duration-200 bg-gray-200 border-2 rounded-md outline-none focus:border-red-500"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <h3 className="text-left">Last name:</h3>
                    <input
                        type="text"
                        value={applicant.lastName}
                        onChange={handleChange}
                        name="lastName"
                        className="p-2 my-1 transition-colors duration-200 bg-gray-200 border-2 rounded-md outline-none focus:border-red-500"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <h3 className="text-left">Email:</h3>
                    <input
                        type="text"
                        value={applicant.email}
                        onChange={handleChange}
                        name="email"
                        className="p-2 my-1 transition-colors duration-200 bg-gray-200 border-2 rounded-md outline-none focus:border-red-500"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <h3 className="text-left">Phone:</h3>
                    <input
                        type="text"
                        value={applicant.phone}
                        onChange={handleChange}
                        name="phone"
                        className="p-2 my-1 transition-colors duration-200 bg-gray-200 border-2 rounded-md outline-none focus:border-red-500"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <h3 className="text-left">Resume:</h3>
                    <input
                        type="file"
                        onChange={({ target: { files } }) => setCv(files[0])}
                        className="py-2 my-1 duration-200 bg-white outline-none "
                    />
                </div>
                <div className="flex flex-col self-center text-gray-500 justify-self-start">
                    <p>Accepted file type: pdf</p>
                    <p>Max. File size: 5 MB.</p>
                </div>
            </div>
            <div className="flex flex-row justify-between w-5/6 mx-auto my-2 md:w-3/5">
                {" "}
                <p className="my-auto">Applying For</p>
                <div className="flex flex-row justify-end w-full gap-4 md:w-3/5">
                    <ApplyingFor
                        title={"Job"}
                        field={0}
                        setApplicant={setApplicant}
                        applicant={applicant}
                    />
                    <ApplyingFor
                        title={"Research"}
                        field={1}
                        setApplicant={setApplicant}
                        applicant={applicant}
                    />
                    <ApplyingFor
                        title={"Internship"}
                        field={2}
                        setApplicant={setApplicant}
                        applicant={applicant}
                    />
                </div>
            </div>

            <div className="flex flex-row justify-between w-5/6 mx-auto my-12 md:w-3/5">
                <p className="my-auto">
                    Do you consent to send your information to ASA industries?
                </p>
                <div className="flex flex-row justify-center gap-4">
                    <Accepted
                        accepted={accepted}
                        setAccepted={setAccepted}
                        title={"YES"}
                        bool={true}
                    />
                    <Accepted
                        accepted={accepted}
                        setAccepted={setAccepted}
                        title={"NO"}
                        bool={false}
                    />
                </div>
            </div>
            <div className="w-full mb-32">
                <Submit
                    accepted={accepted}
                    applicant={applicant}
                    router={router}
                    cv={cv}
                />
            </div>
        </div>
    );
};
export default Career_Opportunities;
