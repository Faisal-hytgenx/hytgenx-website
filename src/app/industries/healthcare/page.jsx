import MainSection from "@/Components/Services/MainSection/MainSection";
import React from "react";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import IndustryMainSection from "@/Components/Industiries/IndustryMainSection";
import Link from "next/link";
import {
  healthcareCoreServices,
  healthcareFeatures,
  healthcareWorkFlows,
} from "../../../../data/industriesData/healthcare";
import Image from "next/image";

const page = () => {
  return (
    <LayoutWrapper>
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `url('/background/dna-bg.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
          }}
        ></div>

        {/* Content Section */}
        <div className="relative z-10">
          <div className="relative">
            {/* Ellipse at Bottom Left */}
            <div className="absolute bottom-10 left-60 transform translate-x-1/2 translate-y-1/2 w-4/5 opacity-70">
              <img
                src="/background/effects/ellipse.png" // Replace with your ellipse image path
                alt="Bottom Left Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Ellipse at Top Right */}
            <div className="absolute top-56 right-10 transform translate-x-1/2 -translate-y-1/2 w-3/4 opacity-70">
              <img
                src="/background/effects/ellipse.png" // Replace with your ellipse image path
                alt="Top Right Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-80 -left-80 transform -translate-y-1/2 w-3/4 opacity-70">
              <img
                src="/background/effects/ellipse.png"
                alt="Top Right Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>
            <IndustryMainSection
              pageName={"Healthcare"}
              heading={
                <>
                  {" "}
                  <h2 className="text-4xl font-bold leading-snug">
                    Innovating <span className="text-blue-700">Healthcare</span>{" "}
                    with Technology That Puts People First
                  </h2>
                </>
              }
              desc={
                "Transforming the healthcare experience through intelligent, human-centered solutions that prioritize patient care, operational efficiency, and innovation."
              }
              industryFeatureData={healthcareCoreServices}
              imageSrc={"/background/servicesPage/industries.png"}
            />
          </div>

          {/* section 3 */}
          <div className="relative max-w-7xl mx-auto lg:px-20 px-10">
            <div className="text-white py-20">
              <div className="grid md:grid-cols-2 items-start">
                <div className="flex justify-center">
                  <div className="w-full flex justify-center">
                    <Image
                      src="/background/servicesPage/healtcare-about.png"
                      alt="healthcare-about"
                      width={900}
                      height={900}
                      className="w-[90%] h-[80%] rounded-lg shadow-xl"
                    />
                  </div>
                </div>
                {/* Right Content - Text Section */}
                <div className="space-y-6 self-start mt-8">
                  <h5 className="text-xs font-semibold uppercase text-blue-700">
                    Technology
                  </h5>
                  <h2 className="text-4xl font-bold leading-snug">
                    Revolutionizing Care Through{" "}
                    <span className="text-blue-700">Innovative</span> Technology
                  </h2>
                  <p className="text-gray-400 text-base">
                    The future of healthcare lies in the fusion of technology
                    and care. Our approach focuses on delivering precision,
                    security, and user-centric functionality. By harnessing
                    emerging technologies like AI, telemedicine, and wearable
                    integration, we design platforms that address today’s
                    healthcare challenges and prepare you for tomorrow’s
                    opportunities.
                  </p>
                </div>

                {/* Left Content - Image Section */}
              </div>
            </div>

            {/* Section 4 */}
            <div className="relative bg-glass py-12 px-8 rounded-lg shadow-xl z-10">
              {/* Ellipse 1 */}
              <div className="absolute top-0 -left-80 transform -translate-y-1/2 w-4/5 opacity-60 z-0">
                <img
                  src="/background/effects/ellipse.png"
                  alt="Left Ellipse"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Ellipse 2 */}
              <div className="absolute top-20 right-0 transform translate-x-1/2 w-3/4 opacity-60 z-0">
                <img
                  src="/background/effects/ellipse.png"
                  alt="Top Right Ellipse"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Ellipse 3 */}
              <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-4/5 opacity-70 z-0">
                <img
                  src="/background/effects/ellipse.png"
                  alt="Bottom Ellipse"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Heading */}
              <h2 className="text-center text-4xl text-white font-bold mb-12">
                Unlock the{" "}
                <span className="text-blue-700 font-bold">Power of AI</span> for
                Smarter, Secure Healthcare Solutions
              </h2>

              {/* Four Parts */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {healthcareFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-start text-start rounded-md"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-10 h-10 mt-6 mb-6"
                    />
                    <h3 className="text-xl text-white font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-md mt-2">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative py-20">
            {/* Ellipse 1 - Center Left */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-full">
              <img
                src="/background/effects/ellipse.png"
                alt="Center Left Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Ellipse 2 - Bottom Right */}
            <div className="absolute bottom-40 right-0 transform translate-x-1/2 translate-y-1/2 w-full">
              <img
                src="/background/effects/ellipse.png"
                alt="Bottom Right Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* section 5 */}
            <div className="max-w-7xl mx-auto lg:px-20 px-10">
              <h2 className="text-3xl text-white mb-4 text-start">
                Streamlining{" "}
                <span className="text-blue-700 font-bold">Healthcare</span>{" "}
                Workflows with Smart Solutions
              </h2>
              <p className="w-full md:w-[70%] lg:w-[50%] text-gray-400 mb-8 text-sm">
                Enhance operational efficiency and improve patient care by
                optimizing healthcare workflows. With our intelligent solutions,
                we enable quick access to information and streamlined processes
                that allow healthcare teams to focus on delivering quality care.
              </p>
              <div className="space-y-6">
                {healthcareWorkFlows.map((industry, index) => (
                  <div
                    key={index}
                    className="flex bg-glass-no-border items-start px-4 py-10 rounded-lg shadow-md transition-all duration-300 text-gray-400 ease-in-out hover:shadow-lg hover:scale-105"
                  >
                    {/* Icon Section */}
                    <div className="w-[5%] flex justify-center items-center">
                      <img
                        src={industry.icon}
                        alt={industry.title}
                        className="w-12 h-12"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="w-[90%] pl-2">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-sm">{industry.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  section 6 */}
          <div
            className="py-10 max-w-7xl mx-auto lg:px-20 px-10"
            style={{
              backgroundImage: "url('/background/stars.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex flex-col items-center justify-center text-center py-16 rounded-lg mt-20 bg-glass">
              {/* Content */}
              <div className="relative z-10 w-[80%] ">
                <h1 className="text-2xl sm:text-4xl text-white font-bold">
                  Unleash the Future of Healthcare with hytGenX
                </h1>
                <p className="mt-4 text-sm sm:text-lg text-gray-300">
                  Empower your healthcare journey with advanced solutions that
                  redefine patient care and operational efficiency. Contact us
                  today and let’s create meaningful change together.
                </p>
                <Link href={"/contact"}>
                  <button className="mt-6 px-10 py-3 bg-blue-700 text-white font-medium text-md rounded-md shadow-lg hover:bg-blue-600">
                    Contact us
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
