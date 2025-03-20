"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MainSection = ({
  pageName,
  heading,
  desc,
  featuresData,
  service,
  subservicesData,
  industriesServed,
  benefitsData,
  ourProcessData,
  headerImage
}) => {
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="text-white py-20 max-w-7xl mx-auto lg:px-20 px-10">
      <div
        className="relative"
        style={{
          backgroundImage: 'url("/background/dna-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full opacity-50">
          <img
            src="/background/effects/ellipse.png"
            alt="Centered Ellipse"
            className="w-full h-full object-cover"
          />
        </div>
        {/* <div className="absolute -top-40 left-40 transform translate-x-1/2 lg:w-3/4 z-10">
          <img
            src="/background/effects/ellipse.png"
            alt="Centered Ellipse"
            className="w-86 h-full object-cover"
          />
        </div> */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 relative">
            <span
              className="text-white border border-blue-700 bg-blue-600 p-2 rounded-md"
              style={{ fontSize: "12px" }}
            >
              {pageName}
            </span>
            <h2 className="text-4xl font-bold leading-snug">{heading}</h2>
            <p className="text-gray-300 " style={{fontSize:"15px"}}>{desc}</p>

            <Link href="/contact">
              <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md shadow-lg transition mt-4 text-xs">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right Content - Image Section */}

          <div className="flex justify-end">
            <Image
              src={headerImage}
              alt="DevOps Lifecycle"
              width={1200}
              height={800}
              priority 
              className="w-full md:w-3/4 lg:w-3/4 rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-20 w-full">
        {/* Top-right Ellipse */}
        <div className="absolute -top-[60%] -right-80 w-96 h-96 bg-blue-700 opacity-30 rounded-full blur-3xl z-10"></div>

        <h1 className="text-3xl text-start" style={{ marginBottom: "2rem" }}>
          Key Features of Our{" "}
          <span className="font-bold text-blue-700">{service}</span> Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-start">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center w-full z-50"
            >
              {/* Icon with Fixed Size */}
              <div className="flex items-center justify-center w-10 h-10">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-6 h-6"
                />
              </div>

              {/* Title with Fixed Height */}
              <h3 className="text-md font-medium text-white whitespace-nowrap min-h-[24px] flex items-center justify-center mt-2">
                {feature.title}
              </h3>

              {/* Description with Fixed Height */}
              <p className="text-gray-400 text-xs mt-2 min-h-[40px] flex items-center justify-center text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 w-full">
        {/* Bottom-left Ellipse */}
        <div className="absolute -bottom-10 -left-20 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl"></div>

        <div className="text-start">
          <h1 className="text-3xl mb-12">
            <span className="text-blue-700 font-bold">Subservices</span> We
            Offer
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {subservicesData.map((subservice, index) => (
            <div
              key={index}
              className="relative w-full rounded-lg overflow-hidden"
              style={{ height: "400px" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Title */}
              {/* <div className="absolute top-10 left-3 text-white font-bold text-lg px-1 py-6 z-50">
            {subservice.title}
          </div> */}

              {/* Background Image */}
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${subservice.icon})`,
                  transformOrigin: "top left",
                  transform:
                    hoveredIndex === index ? "scale(1.60)" : "scale(1)",
                  transition:
                    "transform 0.3s ease-in-out, filter 0.4s ease-in-out",
                  filter: hoveredIndex === index ? "blur(20px)" : "blur(0px)",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              </div>

              <div className="absolute top-10 left-3 text-white z-50 flex flex-col gap-3">
                <div className="font-bold text-lg px-1 py-2">
                  {subservice.title}
                </div>

                <div
                  className="text-white px-1 w-full transition-all duration-500 ease-in-out"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "translateX(0px)"
                        : "translateX(100%)",
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  <p className="text-md">{subservice.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-glass py-12 px-8 rounded-lg shadow-xl mt-20">
        {/* Ellipse Image Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 lg:w-3/4">
          <img
            src="/background/effects/ellipse.png"
            alt="Centered Ellipse"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl">
          <span className="text-blue-700 font-bold">Industries</span> We Serve
        </h2>

        {/* Four Parts */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {industriesServed.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-start text-start rounded-lg"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10 mt-6 mb-6"
              />
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-400 text-md mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-24 relative">
        {/* Ellipse Image */}
        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-4/5 lg:w-3/4">
          <img
            src="/background/effects/ellipse.png"
            alt="Centered Ellipse"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-center text-2xl md:text-3xl  text-white mb-8">
          <span className="font-semibold">Benefits</span> of Choosing Our{" "}
          <span className="text-blue-700 font-semibold">
            {service} Services
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                transform: hovered === index ? "scale(1.05)" : "scale(1)",
                transition: "transform 300ms ease-in-out",
                display: "flex",
                borderRadius: "8px",
              }}
              className="bg-glass-no-border z-50"
            >
              <div className="flex-1 p-6 pt-8">
                <h3 className="text-lg font-medium text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  {benefit.description}
                </p>
              </div>
              <div className="w-1/3 flex items-end">
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-full h-3/4 object-contain rounded-tr-lg rounded-br-lg pt-2 px-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-12 text-center">
          <span className="text-blue-700 text-xs mb-8">{service}</span>
          <h2 className="text-3xl md:text-3xl text-white mb-2 text-center">
            How Our{" "}
            <span className="font-bold text-blue-700">{service} Solutions</span>{" "}
            Work
          </h2>
          <p className="text-xs text-white">
            Our Step-by-Step Approach to {service} Service
          </p>
        </div>

        {/* Process Section */}
        <div className="relative flex flex-col w-full">
          {/* Background Ellipse */}
          <div className="absolute top-0 right-20 transform translate-x-1/2 -translate-y-1/2 w-full">
            <Image
              src="/background/effects/ellipse.png"
              alt="Centered Ellipse"
              layout="responsive"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Step 1 */}
          <div
            className="bg-glass-workflow rounded-md text-white p-2 z-10 flex items-center"
            style={{ width: "70%" }}
          >
            <Image
              src="/background/servicesPage/time.png"
              alt="Step 1"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            <h2>
              <span style={{ color: "#EBBC00" }} className="font-bold">
                {ourProcessData[0]?.heading}:
              </span>{" "}
              {ourProcessData[0]?.detail}
            </h2>
          </div>

          {/* Step 2 */}
          <div className="flex justify-end items-end text-white">
            <div
              className="bg-glass-workflow rounded-md flex justify-center items-center p-2 z-10 flex items-center"
              style={{ width: "52%", marginTop: "3rem" }}
            >
              <Image
                src="/background/servicesPage/letter.png"
                alt="Step 2"
                width={24}
                height={24}
                className="w-6 h-6 mr-2"
              />
              <h2>
                <span className="text-blue-700 font-bold">
                  {ourProcessData[1]?.heading}:
                </span>{" "}
                {ourProcessData[1]?.detail}
              </h2>
            </div>
          </div>

          {/* Step 3 */}
          <div
            className="bg-glass-workflow rounded-md text-white p-2 z-10 flex items-center"
            style={{ width: "60%", marginTop: "3rem" }}
          >
            <Image
              src="/background/servicesPage/mail.png"
              alt="Step 3"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            <h2>
              <span style={{ color: "#997AFF" }} className="font-bold">
                {ourProcessData[2]?.heading}:
              </span>{" "}
              {ourProcessData[2]?.detail}
            </h2>
          </div>

          {/* Step 4 */}
          <div className="flex justify-end items-end text-white">
            <div
              className="bg-glass-workflow rounded-md flex justify-center items-center p-2 z-10 flex items-center"
              style={{ width: "52%", marginTop: "3rem" }}
            >
              <Image
                src="/background/servicesPage/person.png"
                alt="Step 4"
                width={24}
                height={24}
                className="w-6 h-6 mr-2"
              />
              <h2>
                <span className="font-bold" style={{ color: "#00D72F" }}>
                  {ourProcessData[3]?.heading}:
                </span>{" "}
                {ourProcessData[3]?.detail}
              </h2>
            </div>
          </div>

          {/* Step 5 */}
          <div
            className="bg-glass-workflow rounded-md text-white p-2 z-10 flex items-center"
            style={{ width: "60%", marginTop: "3rem" }}
          >
            <Image
              src="/background/servicesPage/mail.png"
              alt="Step 5"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            <h2>
              <span style={{ color: "#FFB87A" }} className="font-bold">
                {ourProcessData[4]?.heading}:
              </span>{" "}
              {ourProcessData[4]?.detail}
            </h2>
          </div>
        </div>

        {/* Dashed Vertical Line */}
        <div className="relative">
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-gray-400 z-0"
            style={{
              height: "80vh",
              borderLeftWidth: "2px",
              borderLeftStyle: "dashed",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,1) 0, rgba(255,255,255,1) 80%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
            }}
          ></div>

          {/* End Dot */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full z-10"
            style={{ width: "10px", height: "10px", bottom: "50px" }}
          ></div>

          {/* Button */}
          <Link href={"/schedule-meeting"}>
            <button className="mt-10 bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-lg transition relative z-10 mt-20">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
