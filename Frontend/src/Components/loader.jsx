import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0f0f0f] text-[#f9c5d1] font-mono">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#10b981] mb-4"></div>
      <p className="italic text-lg tracking-wide">Loading your quest...</p>
    </div>
  );
};

export default Loader;
