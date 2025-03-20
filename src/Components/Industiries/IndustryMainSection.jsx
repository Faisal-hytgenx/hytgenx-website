import Image from "next/image";
import Link from "next/link";
import React from "react";

const IndustryMainSection = ({
  pageName,
  heading,
  desc,
  industryFeatureData,
  imageSrc, 
}) => {

  return (
    
    <div className="text-white py-20 max-w-7xl mx-auto lg:px-20 px-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 relative">
          <span
            className="text-white border border-blue-700 bg-blue-600 p-2 rounded-md"
            style={{ fontSize: "12px" }}
          >
            {pageName}
          </span>
          {heading}
          <p className="text-gray-300 mb-2" style={{fontSize:"15px"}}>{desc}</p>
          <Link href={"/contact"}>
            <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md shadow-lg transition z-10 mt-4 text-xs">
              Get in Touch{" "}
            </button>
          </Link>
        </div>

        {/* Right Content - Image Section */}
        <div className="flex justify-end">
          <Image
            src={`${imageSrc}`} 
            alt={`${pageName} Image`}
            width={1200}
            height={800}
            className="w-full md:w-3/4 lg:w-3/4 rounded-md shadow-xl"
          />
        </div>
      </div>

      <div className="mt-20 w-full">
        <h1 className="text-3xl text-start text-white mb-8">
          Our <span className="font-bold text-blue-700">{pageName} </span>App
          Development Solutions
        </h1>
        <p className="w-full md:w-[70%] lg:w-[50%] text-gray-400 mb-8">
          {desc}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-start">
          {industryFeatureData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center text-center w-full"
            >
              {/* Icon with Fixed Size */}
              <div className="flex items-center justify-center w-10 h-10">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8"
                />
              </div>

              {/* Title with Wrapping & Fixed Min Height */}
              <h3 className="text-lg font-medium text-white min-h-[48px] flex items-center justify-center text-center px-2">
                {feature.title}
              </h3>

              {/* Description with Fixed Height */}
              <p className="text-gray-400 text-sm mt-2 min-h-[48px] flex items-center justify-center text-center px-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryMainSection;
