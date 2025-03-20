"use client";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TechSolutionSlider = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Business Process Automation",
      heading: "Business Process Optimization",
      description:
        "Automate workflows to enhance efficiency, reduce costs, and allow your team to focus on strategic growth.",
      image: "/images/1.png",
    },
    {
      title: "Scalable Systems",
      heading: "Future-Ready Technology",
      description:
        "Develop adaptable solutions that evolve with your business to meet tomorrow's demands.",
      image: "/images/2.jpg",
    },
    {
      title: "Integration with Existing Systems",
      heading: "Effortless Integrations",
      description:
        "Connect AI capabilities with existing tools and systems to improve overall operations.",
      image: "/images/3.jpg",
    },
    {
      title: "Tailored User Experience (UX/UI)",
      heading: "Exceptional User Experience",
      description:
        "Create intuitive interfaces that engage users and simplify complex processes.",
      image: "/images/4.jpg",
    },
    {
      title: "Competitive Advantage",
      heading: "Innovative Edge",
      description:
        "Stay ahead with AI tools designed to solve unique business challenges and provide a competitive advantage.",
      image: "/images/5.jpg",
    },
    {
      title: "Data Security & Compliance",
      heading: "Uncompromising Security",
      description:
        "Implement AI solutions with strong data protection, compliance, and secure operations.",
      image: "/images/2.jpg",
    },
  ];

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  return (
    <div className="max-w-7xl mx-auto lg:px-20 px-10">
      <div className="w-full rounded-lg shadow-lg px-10 py-10 bg-glass">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              AI <span className="text-blue-700">Solutions</span>
            </h2>
            <p className="text-sm text-white">
              Empowering Your Business with Smarter AI Innovations
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="px-1 py-1 bg-glass text-white rounded-full hover:bg-blue-700"
              onClick={handlePrev}
            >
              <ArrowBackIcon />
            </button>
            <button
              className="px-1 py-1 bg-glass text-white rounded-full hover:bg-blue-700 "
              onClick={handleNext}
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </div>

        {/* Buttons in one row */}
        <div className="flex flex-wrap justify-start items-center lg:flex-row mt-6 gap-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-1 py-3 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-100 ease-in-out blur-50 ${
                activeTab === index
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-glass-tab-button text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row lg:justify-between gap-6">
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold text-white">
              {tabs[activeTab].heading}
            </h3>
            <p className="mt-2 text-gray-400 text-sm">
              {tabs[activeTab].description}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-2/5 p-2 bg-gray-500 rounded-[20px]">
            <img
              src={tabs[activeTab].image}
              alt={`Image for ${tabs[activeTab].title}`}
              className="w-full rounded-md shadow-md"
              style={{ height: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutionSlider;
