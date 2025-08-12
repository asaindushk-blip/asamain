import { useState } from "react";
import Circle from "./circle";

const dummy = () => {
  const [text1, setText1] = useState("1985");
  const [text2, setText2] = useState("Year of Establishment");

  return (
    <div className="flex w-screen h-screen  items-start mb-auto mx-auto bg-gradient-to-t from-[#FFFFFF] to-[#F6F1E2] via-[#A5D7E5] pt-12">
      <div className="flex flex-col justify-around w-3/5 mx-auto my-auto h-3/5 md:h-5/6">
        <div className="flex mx-auto my-auto w-min">
          <Circle text1={text1} setText1={setText1} setText2={setText2} />
        </div>
        <div className="grid w-1/2 my-auto text-4xl font-semibold text-center h-min lg:h-20 place-items-center place-self-center">
          {text2}
        </div>
      </div>
    </div>
  );
};

export default dummy;
