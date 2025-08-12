import { useState } from "react";
import Circle from "../components/home/circle";

const dummy = () => {
    const [text1, setText1] = useState("1989");
    const [text2, setText2] = useState("Year of Establishment");

    return (
        <div className="grid w-screen h-screen place-items-center">
            <div className="flex flex-row w-3/5 h-3/5">
                <div className="flex mx-auto my-auto w-min">
                    <Circle
                        text1={text1}
                        setText1={setText1}
                        setText2={setText2}
                    />
                </div>
                <div className="grid w-1/2 h-full my-auto text-2xl font-medium text-center place-items-center">
                    {text2}
                </div>
            </div>
        </div>
    );
};

export default dummy;
