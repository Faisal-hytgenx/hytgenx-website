import HireByRole from "@/Components/HireaDev/HireByRole";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import Link from "next/link";
import React from "react";

const page = () => {
  const cards = [
    {
      icon: "🔧",
      title: "Hassle-free hiring",
      description:
        "After you have made up your mind, start immediately. There are no unnecessary delays, just hire remote developers that suit you best and get your project started",
    },
    {
      icon: "⚙️",
      title: "Top talented pre-vetted engineers",
      description:
        "Backed by a team of pre-vetted and pre-screened remote developers, we proudly offer our remote development services to meet your specific tech needs.",
    },
    {
      icon: "📦",
      title: "Hassle-free hiring",
      description:
        "After you have made up your mind, start immediately. There are no unnecessary delays, just hire remote developers that suit you best and get your project started.",
    },
    {
      icon: "📱",
      title: "Hassle-free hiring",
      description:
        "After you have made up your mind, start immediately. There are no unnecessary delays, just hire remote developers that suit you best and get your project started.",
    },
    {
      icon: "💻",
      title: "Top talented pre-vetted engineers",
      description:
        "Backed by a team of pre-vetted and pre-screened remote developers, we proudly offer our remote development services to meet your specific tech needs.",
    },
    {
      icon: "📦",
      title: "Hassle-free hiring",
      description:
        "After you have made up your mind, start immediately. There are no unnecessary delays, just hire remote developers that suit you best and get your project started.",
    },
  ];
  return (
    <LayoutWrapper>
      <div className="relative text-white overflow-hidden">
        <div
          className="relative grid md:grid-cols-1 gap-8 items-center py-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/background/dna-bg.png')" }}
        >
          <div className="absolute -top-30 left-20 transform translate-x-1/2 w-4/5 z-0">
            <img
              src="/background/effects/ellipse.png"
              alt="Right Ellipse"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute top-40 left-0 transform translate-x-1/2 w-full z-0">
            <img
              src="/background/effects/ellipse.png"
              alt="Right Ellipse"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-[130%] left-0 transform translate-x-1/2 w-full z-0">
            <img
              src="/background/effects/ellipse.png"
              alt="Right Ellipse"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-[130%] right-0 transform -translate-x-1/2 w-full z-0">
            <img
              src="/background/effects/ellipse.png"
              alt="Right Ellipse"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-[210%] right-30 transform  w-full z-0">
            <img
              src="/background/effects/ellipse.png"
              alt="Right Ellipse"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Left Content */}
          <div className="max-w-7xl mx-auto lg:px-20 px-10 flex">
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
              Healthcare and Pharmaceuticals
            </h4>
            <h2 className="text-4xl font-bold leading-snug">
              Hire Remote Developers
              <br /> Within <span className="text-blue-700">2 Days</span>
            </h2>
            <p className="text-gray-400 text-sm w-[80%]">
              Transforming the healthcare experience through intelligent,
              human-centered solutions that prioritize patient care, operational
              efficiency, and innovation.
            </p>
            <Link href={"/contact"}>
              <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-lg transition relative z-10 mt-4">
                Hire Developer Now
              </button>
            </Link>
          </div>

          <div className="flex justify-end relative">
            <img
              src="/background/hire-developerPage/hire-developer.png"
              alt="DevOps Lifecycle"
              className="w-full rounded-md shadow-xl"
            />

            <div className="absolute top-10 -left-[110%] transform -translate-x-1/2 w-full z-0 opacity-70">
              <img
                src="/background/effects/ellipse.png"
                alt="Right Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          </div>
        </div>
        <div className=" max-w-7xl mx-auto lg:px-20 px-10">
          {/* <HireByRole /> */}
          <div className="py-12 text-white">
            <div className="text-center py-12">
              <h1 className="text-3xl text-center mb-2">
                Pros Of Hiring a Dedicated{" "}
                <span className="font-bold">
                  Remote <br /> Developer
                </span>{" "}
                From <span className="text-blue-700">hytGenX</span>{" "}
              </h1>
              <p className="text-md text-center mb-8">
                We know that the future is in the Remote World! Therefore, we
                provide you with the most skilled remote developers <br /> that
                will skyrocket your brand’s success in no time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-glass p-6 rounded-[20px] shadow-lg"
                  >
                    <img
                      src="/background/hire-developerPage/circle-tick.png"
                      alt="tick-icon"
                      className="w-8 h-8 mb-4"
                    />
                    <h4 className="text-lg text-start font-bold mb-2">
                      {card.title}
                    </h4>
                    <p className="text-gray-300 text-xs text-start">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto lg:px-20 px-10 py-10"
        style={{
          backgroundImage: "url('/background/stars.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative bg-glass flex flex-col items-center justify-center text-center px-6 py-24 rounded-md mt-20">
          {/* Content */}
          <div className="relative z-10 w-[80%]">
            <h1 className="text-2xl sm:text-5xl text-white font-bold">
              Let’s Create the{" "}
              <span className="text-blue-700">Future Together!</span>{" "}
            </h1>
            <p className="mt-4 sm:text-lg text-md text-gray-300">
              Ready to transform ideas into impactful solutions? Connect with
              hytGenX and join us in driving innovation and achieving
              extraordinary results.
            </p>
            <Link href={"/contact"}>
              <button className="mt-6 px-10 py-3 bg-blue-700 text-white font-medium text-md rounded-md shadow-lg hover:bg-blue-600">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default page;
