import { useRouter } from "next/router";

const acknowledge = () => {
    const router = useRouter()
    
    const redirect = () => router.push("/");
    const timeout = () => {
        setTimeout(redirect, 2000);

        return true;
    }


    return (
        <div className="w-screen h-screen grid place-items-center text-3xl" onMouseOver={timeout}>
            {timeout() && <p>Your submission was successful.</p>}
        </div>
    )};

export default acknowledge;