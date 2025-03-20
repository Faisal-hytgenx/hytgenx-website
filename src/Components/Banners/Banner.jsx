"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-20 px-10 py-10 mt-10">
      <div
        className="relative flex flex-col items-center justify-center text-center px-6 py-20 rounded-[20px]"
        style={{
          backgroundImage: "url('/background/homepage/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Image
          src="/background/servicesPage/shapes4.png"
          alt="Rocket Icon"
          width={50} 
          height={50}
          className="absolute top-0 left-4 mt-2"
        />

        <Image
          src="/background/servicesPage/shapes3.png" 
          alt="Lightbulb Icon"
          width={50} 
          height={50}
          className="absolute bottom-4 right-4"
        />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-4xl text-white">
            Let’s <span className="text-white font-bold">Build</span> the{" "}
            <span className="text-blue-700 font-bold">Future Together</span>
          </h1>
          <p className="mt-4 text-sm sm:text-lg text-gray-300">
            Partner with HytGenX to turn ideas into impactful solutions.
            Together,<br /> we can achieve extraordinary results.
          </p>
          <button className="mt-6 px-8 py-3 bg-blue-700 text-white font-medium text-xs rounded-md shadow-lg hover:bg-blue-600">
            <Link href={"/contact"}>Schedule Consultation</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
