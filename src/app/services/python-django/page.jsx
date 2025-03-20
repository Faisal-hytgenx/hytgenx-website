import MainSection from "@/Components/Services/MainSection/MainSection";
import React from "react";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import {
  featuresData,
  subservicesData,
  industriesServed,
  benefitsData,
  TechnologiesData,
  ourProcessData,
} from "../../../../data/servicesData/python";
import Link from "next/link";

const page = () => {
  return (
    <LayoutWrapper>
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('/patterns/services-page-pattern.svg')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.5,
          }}
        ></div>

        <div className="relative z-10">
          <MainSection
            pageName={"Python/Django Development Solutions"}
            heading={
              <>
                Build Secure, Scalable, and High-Performance{" "}
                <span className="text-blue-700">Applications</span>
              </>
            }
            desc={
              "Empower your business with flexible and reliable web solutions powered by Python and Django."
            }
            featuresData={featuresData}
            subservicesData={subservicesData}
            industriesServed={industriesServed}
            benefitsData={benefitsData}
            service={"Python/Django"}
            ourProcessData={ourProcessData}
            headerImage={"/background/servicesPage/python-service.png"}
          />

          <div
            className="relative"
            style={{
              backgroundImage: "url('/background/stars.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Ellipses on this section as well */}
            <div className="absolute top-0 -left-80 transform translate-y-1/3 w-full opacity-40">
              <img
                src="/background/effects/ellipse.png"
                alt="Bottom Left Ellipse"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-40 -right-80 transform translate-y-1/3 w-3/4 opacity-40">
              <img
                src="/background/effects/ellipse.png"
                alt="Bottom Left Ellipse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-[120%] -left-80 transform translate-y-1/3 w-3/4 opacity-80">
              <img
                src="/background/effects/ellipse.png"
                alt="Bottom Left Ellipse"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl text-white font-bold text-center">
              <span className="text-blue-700">
                {" "}
                Tools & Technologies
              </span>{" "}
              We use
            </h1>
            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-6 py-12 max-w-7xl mx-auto lg:px-20 px-10">
              {TechnologiesData.map((card, index) => (
                <div
                  key={index}
                  className="relative bg-glass-tool flex flex-col justify-center items-center text-center w-full py-20 rounded-lg shadow-md"
                 
                >
                  {/* Circle with Icon */}
                  <div className="absolute top-0 left-10 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-glass-workflow rounded-full flex items-center justify-center border-2 border-black blur-80" style={{  backdropFilter: "blur(20px)" }}>
                    <img
                      src={card.circleIcon}
                      alt={`Icon for card ${index + 1}`}
                      className="w-auto h-6"
                    />
                  </div>

                  {/* Card Content */}
                  <h3 className="text-lg font-semibold text-blue-700 mt-2">
                    {card.title}
                  </h3>
                  <p className="text-white text-md mt-1">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Second Section */}
          <div
            className="py-10 max-w-7xl mx-auto lg:px-20 px-10"
            style={{
              backgroundImage: "url('/background/stars.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative bg-glass flex flex-col items-center justify-center text-center py-36 rounded-lg mt-20">
              <div className="z-10 w-[80%]">
                <h1 className="text-2xl sm:text-5xl text-white font-bold">
                  Develop Smarter Applications with{" "}
                  <span className="text-blue-700">hytGenX</span>
                </h1>
                <p className="mt-4 text-sm sm:text-lg text-gray-300">
                  Whether you’re building from the ground up or optimizing an
                  existing system, our Python/Django development services can
                  help you achieve your goals. Let’s collaborate to create
                  solutions that drive innovation and growth.
                </p>
                <Link href={"/contact"}>
                  <button className="mt-6 px-10 py-3 bg-blue-700 text-white font-medium text-md rounded-md shadow-lg hover:bg-blue-600">
                    📞 Let’s Build Together or 📧 Email us for a free
                    consultation.{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default page;
