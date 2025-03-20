import MainSection from "@/Components/Services/MainSection/MainSection";
import React from "react";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import IndustryMainSection from "@/Components/Industiries/IndustryMainSection";
import Link from "next/link";

import {
  telecomCoreServices,
  telecomCoreFeatures,
  telecomWorkFlows,
} from "../../../data/industriesData/telecommunication";

const page = () => {
  return (
    <LayoutWrapper>
      <div className="relative overflow-hidden px-6 lg:px-20">
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
              pageName={"Automotive"}
              heading={
                <>
                  {" "}
                  <h2 className="text-4xl font-bold leading-snug">
                    Shaping the Future of{" "}
                    <span className="text-blue-700"> Entertainment </span> with
                    Smart Digital Solutions. Automotive with Smart
                  </h2>
                </>
              }
              desc={
                "Empowering media companies with technology that enhances content delivery, improves user experiences, and drives industry growth."
              }
              industryFeatureData={telecomCoreServices}
            />
          </div>

          <div className="relative">
            <div className="text-white py-20">
              <div className="grid md:grid-cols-2 gap-4 items-center">
                {/* Left Content - Image Section */}
                <div className="flex justify-center">
                  <img
                    src="/background/industries.png"
                    alt="DevOps Lifecycle"
                    className="w-full md:w-[100%] lg:w-[100%] xl:w-[90%] rounded-md shadow-2xl"
                  />
                </div>

                {/* Right Content - Text Section */}
                <div className="space-y-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Technology
                  </h4>
                  <h2 className="text-4xl font-bold leading-snug">
                    Revolutionizing{" "}
                    <span className="text-blue-700">Content Delivery</span> with
                    Smart Technology
                  </h2>
                  <p className="text-gray-400 text-base">
                    The entertainment and media industry is constantly evolving,
                    and technology plays a key role in shaping its future. At
                    HytGenX, we help you leverage the latest advancements in AI,
                    streaming, and social media to provide exceptional content
                    experiences. From personalized recommendations to real-time
                    streaming, our platforms enhance engagement and push the
                    boundaries of entertainment
                  </p>
                </div>
              </div>
            </div>

            {/* Section with Ellipses */}
            <div className="relative bg-glass py-12 px-8 rounded-md shadow-xl z-10">
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
                Unleash the{" "}
                <span className="text-blue-700 font-bold">Power of AI </span> to
                Enhance User Engagement Advanced
              </h2>

              {/* Four Parts */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {telecomCoreFeatures.map((feature, index) => (
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

            {/* Content Section */}
            <h2 className="text-3xl text-white mb-4 text-start">
              Making{" "}
              <span className="text-blue-700  font-bold">Healthcare</span>{" "}
              Workflows Effective{" "}
            </h2>
            <p className="w-full md:w-[70%] lg:w-[50%] text-gray-400 mb-8 text-sm">
              Optimize your media operations and improve content management with
              solutions that simplify workflows, reduce manual effort, and
              foster better collaboration across teams. Our technology helps
              scale your business, improve content delivery, and keep your
              audience engaged with minimal effort.
            </p>
            <div className="space-y-6">
              {telecomWorkFlows.map((industry, index) => (
                <div
                  key={index}
                  className="flex bg-glass-no-border items-start px-4 py-10 rounded-md shadow-md"
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
                    <p className="text-gray-400 text-sm">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="py-10"
            style={{
              backgroundImage: "url('/background/stars.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex flex-col items-center justify-center text-center py-16 rounded-md mt-20 bg-glass">
              {/* Content */}
              <div className="relative z-10 w-[80%] ">
                <h1 className="text-2xl sm:text-4xl text-white font-bold">
                  Lead the Future of Entertainment with HytGenX
                </h1>
                <p className="mt-4 text-sm sm:text-lg text-gray-300">
                  Unlock your full potential in the entertainment and media
                  industry with technology that enhances user experience and
                  operational efficiency. Contact us today to explore how we can
                  help you grow and elevate your brand.
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
