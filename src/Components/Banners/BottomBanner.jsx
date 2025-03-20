"use client";
import Link from "next/link";
import React from "react";

const BottomBanner = () => {
  return (
    <div className="w-full h-full py-4 max-w-7xl mx-auto lg:px-20 px-10">
      {" "}
      {/* Full width and fixed height */}
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 py-28 w-full rounded-lg"
        style={{
          backgroundImage: "url('/background/homepage/bottombanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "420px",
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-3xl w-full">
          <h1 className="text-3xl text-white">
            Let’s <span className="text-white font-bold">Build</span> the{" "}
            <span className="text-blue-700 font-bold">Future Together</span>{" "}
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-500 max-w-xl mx-auto">
            Partner with HytGenX to turn ideas into impactful solutions.
            Together, we can achieve extraordinary results.
          </p>
          <button className="mt-6 px-8 py-2 bg-white text-black font-medium text-xs rounded-md shadow-lg  hover:bg-blue-700 hover:text-white">
            <Link href={"/contact"}>Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
