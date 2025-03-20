"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const OurServices = () => {
  const [hoveredImage, setHoveredImage] = useState("/images/ourservices.png");
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = (imgSrc) => {
    setHoveredImage(imgSrc);
  };

  const handleMouseLeave = () => {
    setHoveredImage("/background/servicesPage/ai.png");
    setHoveredLeftIndex(null);
    setHoveredRightIndex(null);
  };

  const [hoveredLeftIndex, setHoveredLeftIndex] = useState(null);
  const [hoveredRightIndex, setHoveredRightIndex] = useState(null);

  const leftSideServices = [
    {
      href: "/services/ai-development",
      imgSrc: "/icons/our-1.svg",
      alt: "Ai-logo",
      title: "AI-Powered Development Solutions",
      hoverImg: "/background/servicesPage/ai.png",
      description:
        "Revolutionize your operations with advanced AI technologies that enhance efficiency and performance.",
    },
    {
      href: "/services/mern-stack",
      imgSrc: "/icons/our-2.svg",
      alt: "MERN Stack Development",
      hoverImg: "/background/servicesPage/Mern.png",
      title: "MERN Stack Development",
      description:
        "Build scalable and dynamic web applications with our expertise in MongoDB, Express.js, React, and Node.js.",
    },
    {
      href: "/services/python-django",
      imgSrc: "/icons/our-3.svg",
      hoverImg: "/background/servicesPage/python.png",
      alt: "Python/Django Development",
      title: "Python/Django Development",
      description:
        "Develop robust, secure, and high-performance web applications with Python and Django frameworks.",
    },
    {
      href: "/services/mobile-development",
      imgSrc: "/icons/our-4.svg",
      hoverImg: "/background/servicesPage/app.png",
      alt: "Mobile App Development",
      title: "Mobile App Development",
      description:
        "Create engaging and user-friendly mobile applications tailored for iOS, Android, or cross-platform use.",
    },
  ];
  const rightServices = [
    {
      href: "/services/machine-learning",
      imgSrc: "/icons/our-5.svg",
      hoverImg: "/background/servicesPage/ml.png",
      alt: "Machine Learning",
      title: "Machine Learning & AI Solutions",
      description:
        "Unlock the power of your data with intelligent machine learning models and AI solutions.",
    },
    {
      href: "/services/cloud-services",
      imgSrc: "/icons/our-6.svg",
      hoverImg: "/background/servicesPage/cloud.png",
      alt: "Cloud Services",
      title: "Cloud Infrastructure Services",
      description:
        "Optimize your operations with flexible, secure, and scalable cloud solutions.",
    },
    {
      href: "/services/custom-development",
      imgSrc: "/icons/our-7.svg",
      hoverImg: "/background/servicesPage/custom.png",

      alt: "Custom Development",
      title: "Custom Software Development",
      description:
        "Design software solutions that meet your unique business requirements and drive innovation.",
    },
    {
      href: "/services/devops",
      imgSrc: "/icons/our-8.svg",
      hoverImg: "/background/servicesPage/devops.png",

      alt: "DevOps Services",
      title: "DevOps Services",
      description:
        "Accelerate development and operational efficiency with DevOps practices for faster deployment and collaboration.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto lg:px-20 px-10 py-10 overflow-x-hidden">
      <h1 className="text-4xl text-white text-center">
        <span className="font-bold">Driving</span> Innovation with{" "}
        <span style={{ color: "#0084ff" }} className="font-bold">
          Our Services
        </span>
      </h1>
      <p className="mt-6 text-gray-400 text-center text-md">
        Discover AI-driven solutions for your business's growth and success.
      </p>
      <div className="flex flex-wrap justify-center items-stretch gap-6 py-12">
        {/* Left & Right Columns */}
        <div className="flex flex-col gap-4 flex-1 min-w-[300px] md:flex-col">
          {leftSideServices.map((service, index) => (
            <Link key={index} href={service.href}>
              <div
                className="flex bg-glass transition-all duration-300 ease-in-out hover:bg-blue-700 text-white p-6 rounded-2xl shadow-lg flex-grow w-full"
                style={{ height: "162px" }}
                onMouseEnter={() => {
                  handleMouseEnter(service.hoverImg);
                  setHoveredLeftIndex(index);
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  style={{
                    backgroundColor:
                      hoveredLeftIndex === index ? "white" : "#0084ff",
                    padding: "8px",
                    borderRadius: "10px",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Image
                    src={service.imgSrc}
                    alt={service.alt}
                    width={40}
                    height={40}
                    style={{
                      transition: "all 0.000001s ease-in-out",
                      filter:
                        hoveredLeftIndex === index
                          ? "invert(31%) sepia(88%) saturate(5445%) hue-rotate(206deg) brightness(94%) contrast(92%)"
                          : "none",
                    }}
                  />
                </div>
                <div className="ml-4 w-4/5">
                  <h3 className="text-lg font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {service.title}
                  </h3>
                  <p className="text-sm overflow-hidden text-ellipsis">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Center Image (Changes on Hover) */}
        <div className="flex justify-center items-center flex-1 min-w-[250px] md:flex-col">
          <motion.div
            className="w-full h-[690px] rounded-lg overflow-hidden shadow-lg relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={hoveredImage} // Triggers animation when image changes
          >
            <Image
              src={hoveredImage}
              alt="App Development"
              priority={true}
              layout="fill"
              objectFit="cover"
              className="w-full h-full transition-all duration-300 ease-in-out"
            />
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 flex-1 min-w-[300px] md:flex-col">
          {rightServices.map((service, index) => (
            <Link key={index} href={service.href}>
              <div
                className="flex bg-glass transition-all duration-300 ease-in-out hover:bg-blue-700 text-white p-6 rounded-2xl shadow-lg flex-grow w-full"
                style={{ height: "162px" }}
                onMouseEnter={() => {
                  handleMouseEnter(service.hoverImg);
                  setHoveredRightIndex(index);
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="flex items-center justify-center rounded-full w-1/5 h-16"
                  style={{
                    backgroundColor:
                      hoveredRightIndex === index ? "white" : "#0084ff",
                    padding: "8px",
                    borderRadius: "10px",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                >
                  <Image
                    src={service.imgSrc}
                    alt={service.alt}
                    width={40}
                    height={40}
                    style={{
                      transition: "all 0.000001s ease-in-out",
                      filter:
                        hoveredRightIndex === index
                          ? "invert(31%) sepia(88%) saturate(5445%) hue-rotate(206deg) brightness(94%) contrast(92%)"
                          : "none",
                    }}
                  />
                </div>
                <div className="ml-4 w-4/5">
                  <h3 className="text-lg font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                    {service.title}
                  </h3>
                  <p className="text-sm overflow-hidden text-ellipsis">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
