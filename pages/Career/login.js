import { useRouter } from "next/router";
import { useState } from "react";
import axios from "../../components/axios";
import useLocalStorage from "../../components/hooks/useLocalStorage";

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [button, setButton] = useState("Verify");

    const onChange = (e) =>
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });

    const submit = () => {
        setButton("Submitting...");
        axios
            .post(
                "/auth",
                {},
                {
                    headers: {
                        credentials: JSON.stringify(user),
                    },
                }
            )
            .then((res) => {
                window.sessionStorage.setItem(
                    "ASA-INDUS-APIKEY",
                    res.data.apiKey
                );
                window.sessionStorage.setItem(
                    "ASA-INDUS-SIGN",
                    res.data.signature
                );
                router.push("/Career/submissions/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="grid w-screen h-screen place-items-center">
            <div className="md:hidden text-7xl">
                Please view in desktop mode
            </div>
            <div className="flex-col w-5/6 sm:w-2/3 md:w-1/2 h-1/2 justify-evenly md:flex hidden">
                <h1 className="text-3xl font-medium text-center">
                    Admin login:
                </h1>
                <input
                    type="text"
                    placeholder="Username"
                    class="rounded-lg p-4 border-2 transition-all duration-200 border-blue-400"
                    value={user.username}
                    onChange={onChange}
                    name="username"
                />
                <input
                    type="text"
                    placeholder="Password"
                    class="rounded-lg p-4 border-2 transition-all duration-200 border-blue-400"
                    value={user.password}
                    onChange={onChange}
                    name="password"
                />
                <div className="items-center w-full">
                    <div
                        className="px-6 py-2 mx-auto font-medium text-white transition-all duration-200 bg-blue-400 border-2 border-blue-400 rounded-lg cursor-pointer w-min h-min hover:bg-white hover:text-blue-400"
                        onClick={submit}
                    >
                        {button}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
