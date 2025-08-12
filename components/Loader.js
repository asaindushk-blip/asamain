import React from "react";
import Download from "./icons/download";

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden grid place-items-center"> 
      <div className="flex flex-col w-full place-content-center gap-8" >
        <Download className="animate-bounce w-12 h-12 mx-auto" />
        <p className="text-3xl mx-auto">Downloading responses</p>
      </div>
    </div>
  );
};

export default Loader;
