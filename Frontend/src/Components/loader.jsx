import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-[#f9c5d1] font-mono z-50">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-[#10b981] rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-b-transparent border-[#f9c5d1] rounded-full animate-spin-reverse"></div>
      </div>
      <p className="italic text-xl tracking-wide text-center text-[#e2e8f0]">
        Loading your next mission...
      </p>
    </div>
  );
};

export default Loader;
