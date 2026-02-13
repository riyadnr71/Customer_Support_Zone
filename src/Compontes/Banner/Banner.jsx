import React from "react";
import waveImg from "../../assets/vector1.png";

const Banner = ({ count, resolved }) => {
  return (
    <div className="mt-10 max-w-[1200px] mx-auto flex flex-col md:flex-row gap-4 items-center justify-center text-center">
      
      {/* In-Progress */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] min-w-[350px] md:min-w-[600px] h-[250px] flex flex-col items-center justify-center text-white">
        
        {/* Left Image */}
        <img
          src={waveImg}
          alt=""
          className="absolute left-0 top-0 h-full opacity-90"
        />

        {/* Right Image (mirror) */}
        <img
          src={waveImg}
          alt=""
          className="absolute right-0 top-0 h-full opacity-90 scale-x-[-1]"
        />

        {/* Content */}
        <h2 className="text-lg font-semibold z-10">In-Progress</h2>
        <h1 className="text-8xl font-bold z-10">{count}</h1>
      </div>

      {/* Resolved */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#54CF68] to-[#00827A] min-w-[350px] md:min-w-[600px] h-[250px] flex flex-col items-center justify-center text-white">
        
        {/* Left Image */}
        <img
          src={waveImg}
          alt=""
          className="absolute left-0 top-0 h-full opacity-90"
        />

        {/* Right Image (mirror) */}
        <img
          src={waveImg}
          alt=""
          className="absolute right-0 top-0 h-full opacity-90 scale-x-[-1]"
        />

        {/* Content */}
        <h2 className="text-lg font-semibold z-10">Resolved</h2>
        <h1 className="text-8xl font-bold z-10">{resolved}</h1>
      </div>
    </div>
  );
};

export default Banner;
