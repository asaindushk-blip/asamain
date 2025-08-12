import { useState } from "react";

const Login = () => {
    const [auth, setAuth] = useState("");
    const set = (e) => setAuth(e.target.value);
    const save = () => sessionStorage.setItem("ASALOGIN");
    return (
        <div className="grid w-screen h-screen place-items-center">
            <div className="flex flex-col w-5/6 gap-4 sm:w-3/5 md:w-2/5">
                <h1 className="text-3xl font-medium text-center">
                    Enter the credentials
                </h1>
                <input
                    className="w-full h-12 px-4 py-2 mx-auto border-2 border-blue-400 rounded-lg "
                    placeholder="Enter the code given to you"
                    value={auth}
                    onChange={set}
                />
                <div className="px-6 py-2 text-white transition-colors duration-200 bg-blue-500 border-2 border-blue-500 rounded-lg cursor-pointer hover:bg-white hover:text-blue-500 w-min">
                    Authenticate
                </div>
            </div>
        </div>
    );
};

export default Login;
