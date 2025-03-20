import MainSection from "@/Components/Services/MainSection/MainSection";
import React from "react";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import IndustryMainSection from "@/Components/Industiries/IndustryMainSection";
import Link from "next/link";
import {
  automotiveCoreFeatures,
  automotiveCoreServices,
  automotiveWorkFlows,
} from "../../../../data/industriesData/automotive";
import Image from "next/image";

const page = () => {
  const cardData = [
    {
      icon: "https://via.placeholder.com/32", // Replace with your icon URLs
      description: "AWS SageMaker, Google Cloud AI, Azure Machine Learning.",
    },
    {
      icon: "https://via.placeholder.com/32",
      description: "AWS SageMaker, Google Cloud AI, Azure Machine Learning.",
    },
    {
      icon: "https://via.placeholder.com/32",
      description: "AWS SageMaker, Google Cloud AI, Azure Machine Learning.",
    },
    {
      icon: "https://via.placeholder.com/32",
      description: "AWS SageMaker, Google Cloud AI, Azure Machine Learning.",
    },
  ];

  const featuresData = [
    {
      icon: "/icons/icon-1.svg",
      title: "Predictive Analytics",
      description:
        "Anticipate trends and behaviors with powerful forecasting models.",
    },
    {
      icon: "/icons/icon-2.svg",
      title: "Natural Language Processing",
      description: "Understand and interpret human language effectively.",
    },
    {
      icon: "/icons/icon-3.svg",
      title: "Image Recognition",
      description: "Enable systems to identify and classify images accurately.",
    },
    {
      icon: "/icons/icon-4.svg",
      title: "Machine Learning Models",
      description: "Develop custom models tailored to your business needs.",
    },
    {
      icon: "/icons/icon-5.svg",
      title: "AI-Powered Insights",
      description: "Gain actionable insights with AI-driven analytics.",
    },
    {
      icon: "/icons/icon-5.svg",
      title: "AI-Powered Insights",
      description: "Gain actionable insights with AI-driven analytics.",
    },
    {
      icon: "/icons/icon-5.svg",
      title: "AI-Powered Insights",
      description: "Gain actionable insights with AI-driven analytics.",
    },
    {
      icon: "/icons/icon-5.svg",
      title: "AI-Powered Insights",
      description: "Gain actionable insights with AI-driven analytics.",
    },
  ];

  const industriesServed = [
    {
      icon: "/icons/icon-1.svg",
      title: "Healthcare",
      description: "Predict patient outcomes and optimize treatment plans.",
    },
    {
      icon: "/icons/icon-2.svg",
      title: "Finance",
      description:
        "Deliver personalized shopping experiences and manage inventory efficiently.",
    },
    {
      icon: "/icons/icon-3.svg",
      title: "Retail",
      description: "Predict equipment failures and optimize production lines.",
    },
  ];
  const workFlows = [
    {
      icon: "/icons/icon-1.svg",
      title: "Medical Practice Management Software",
      description:
        "Leverage the latest technologies to automate and simplify your everyday operations. From revenue cycle management and health insurance claims software to EHR management and patient portals, our development team will devote its full efforts to helping you achieve your maximum efficiency.",
    },
    {
      icon: "/icons/icon-2.svg",
      title: "Finance",
      description:
        "Leverage the latest technologies to automate and simplify your everyday operations. From revenue cycle management and health insurance claims software to EHR management and patient portals, our development team will devote its full efforts to helping you achieve your maximum efficiency.",
    },
    {
      icon: "/icons/icon-3.svg",
      title: "Retail",
      description: "Predict equipment failures and optimize production lines.",
    },
    {
      icon: "/icons/icon-3.svg",
      title: "Retail",
      description: "Predict equipment failures and optimize production lines.",
    },
  ];

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
              pageName={"Automotive"}
              heading={
                <>
                  {" "}
                  <h2 className="text-4xl font-bold leading-snug">
                    Driving Innovation in{" "}
                    <span className="text-blue-700">Automotive</span> with Smart
                    Technology
                  </h2>
                </>
              }
              desc={
                "Revolutionize your automotive business with solutions that enhance efficiency, improve customer experience, and drive future growth."
              }
              industryFeatureData={automotiveCoreServices}
              imageSrc={"/background/servicesPage/automotive-header.png"}
            />
          </div>

          <div className="relative max-w-7xl mx-auto lg:px-20 px-10">
            <div className="text-white py-20">
              <div className="grid md:grid-cols-2 gap-4 items-center">
                {/* Left Content - Image Section */}
                <div className="flex justify-center">
                  <div className="w-full flex justify-center">
                    <Image
                      src="/background/servicesPage/automotive-about.png"
                      alt="DevOps Lifecycle"
                      width={900}
                      height={900}
                      className="w-[90%] h-[80%] rounded-md shadow-xl"
                    />
                  </div>
                </div>

                {/* Right Content - Text Section */}
                <div className="space-y-6 self-start mt-8">
                <h5 className="text-xs font-semibold uppercase text-blue-700">
                    Technology
                  </h5>
                  <h2 className="text-4xl font-bold leading-snug">
                    Transforming the{" "}
                    <span className="text-blue-700">Automotive Industry</span>{" "}
                    with Smart Solutions
                  </h2>
                  <p className="text-gray-400 text-base">
                    As the automotive sector evolves, adopting technology is key
                    to staying competitive. From intuitive mobile apps to
                    real-time data integration and AI-powered insights, we help
                    businesses make smarter decisions, improve operations, and
                    provide a superior customer experience. Our solutions
                    support fleet management, vehicle tracking, and customer
                    relationship management
                  </p>
                </div>
              </div>
            </div>

            {/* Section with Ellipses */}
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
                Enhance Operational Efficiency with{" "}
                <span className="text-blue-700 font-bold">
                  Advanced Technology
                </span>
              </h2>

              {/* Four Parts */}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {automotiveCoreFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-start text-start rounded-lg"
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
            <div className="max-w-7xl mx-auto lg:px-20 px-10">
              <h2 className="text-3xl text-white mb-4 text-start">
                Streamlining{" "}
                <span className="text-blue-700  font-bold">
                  Automotive Workflows
                </span>{" "}
                with Smart Systems
              </h2>
              <p className="w-full md:w-[70%] lg:w-[50%] text-gray-400 mb-8 text-sm">
                Boost productivity and reduce downtime with intelligent
                solutions that simplify operations across all aspects of your
                automotive business. From inventory management to customer
                service, we provide the tools you need to stay competitive in a
                fast-moving industry.
              </p>
              <div className="space-y-6">
                {automotiveWorkFlows.map((industry, index) => (
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
                      <p className="text-gray-400 text-sm">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
                  Unlock the Future of Automotive with hytGenX
                </h1>
                <p className="mt-4 text-sm sm:text-lg text-gray-300">
                  Empower your automotive business with smart solutions that
                  drive growth and improve customer experiences. Contact us
                  today to explore how we can help you take your business to the
                  next level.
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
