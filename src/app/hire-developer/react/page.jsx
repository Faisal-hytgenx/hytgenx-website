import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import Link from "next/link";
import React from "react";

const page = () => {
  const jobCards = [
    {
      title: "AI/ML Engineer",
      description:
        "Join us in building cutting-edge AI and ML solutions that make an impact. Help us tackle real-world problems with technology.",
    },
    {
      title: "Full Stack Developer",
      description:
        "You will focus on running advanced algorithms, leading experiments, and pushing the boundaries of what's possible with data. You’ll be playing a fundamental role in driving innovation and ensuring that AI solutions are grounded in robust scientific methodologies.",
    },
    {
      title: "Product Manager",
      description:
        "Lead the development of innovative products and bring ideas to life. Work alongside our talented team to create solutions that matter.",
    },
  ];

  const industriesServed = [
    {
      id: 1,
      icon: "/icons/icon-1.svg",
      title: "Inquiry Request",
      description:
        "Empower your business with cutting-edge Artificial Intelligence and Machine Learning solutions. From automating process.",
    },
    {
      id: 2,
      icon: "/icons/icon-2.svg",
      title: "Requirement Analysis",
      description:
        "Empower your business with cutting-edge Artificial Intelligence and Machine Learning solutions. From automating process.",
    },
    {
      id: 3,
      icon: "/icons/icon-3.svg",
      title: "Connect with our Proffessionals",
      description:
        "Empower your business with cutting-edge Artificial Intelligence and Machine Learning solutions. From automating process.",
    },
    {
      id: 4,
      icon: "/icons/icon-3.svg",
      title: "Schedule a Meeting",
      description:
        "Empower your business with cutting-edge Artificial Intelligence and Machine Learning solutions. From automating process.",
    },
    {
      id: 5,
      icon: "/icons/icon-3.svg",
      title: "Onboarding",
      description:
        "Empower your business with cutting-edge Artificial Intelligence and Machine Learning solutions. From automating process.",
    },
  ];

  const cards = [
    {
      id: 1,
      title: "Fast Performance",
      description: "Optimized for speed and efficiency.",
    },
    {
      id: 2,
      title: "Lightning UI",
      description: "A smooth and interactive user experience.",
    },
    {
      id: 3,
      title: "Secure Platform",
      description: "Built with top-tier security measures.",
    },
    {
      id: 4,
      title: "Scalable System",
      description: "Designed to handle high traffic loads.",
    },
    {
      id: 5,
      title: "Modern Design",
      description: "Visually appealing and clean aesthetics.",
    },
    {
      id: 6,
      title: "Customizable",
      description: "Easily adaptable to different use cases.",
    },
  ];

  const pricingPlans = [
    {
      id: 1,
      icon: "/background/hire-developerPage/time.png",
      title: "Basic Plan",
      hourlyRate: "$20/hr",
      description: "Ideal for small projects and quick fixes.",
      buttonText: "Choose Plan",
    },
    {
      id: 2,
      icon: "/background/hire-developerPage/time.png",
      title: "Pro Plan",
      hourlyRate: "$40/hr",
      description: "Best for medium-sized projects and businesses.",
      buttonText: "Choose Plan",
    },
    {
      id: 3,
      icon: "/background/hire-developerPage/time.png",
      title: "Enterprise Plan",
      hourlyRate: "$80/hr",
      description: "Perfect for large-scale applications and teams.",
      buttonText: "Choose Plan",
    },
  ];

  const engage = [
    {
      id: 1,
      icon: "/background/hire-developerPage/time.png",
      title: "Fast Performance",
    },
    {
      id: 2,
      icon: "/background/hire-developerPage/case.png",
      title: "Lightning UI",
    },
    {
      id: 3,
      icon: "/background/hire-developerPage/bag.png",
      title: "Secure Platform",
    },
  ];

  return (
    <LayoutWrapper>
      <div className="text-white overflow-hidden max-w-7xl mx-auto lg:px-20 px-10">
        <div
          className="relative grid md:grid-cols-2 gap-8 items-center py-20  px-6 lg:px-20 bg-cover bg-center"
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
          <div className="space-y-6 px-6 md:px-12">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              React Developers{" "}
            </h4>
            <h2 className="text-4xl font-bold leading-snug">
              Hire Remote Developers
              <br /> Within <span className="text-blue-700">2 Days</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Transforming the healthcare experience through intelligent,
              human-centered solutions that prioritize patient care, operational
              efficiency, and innovation.
            </p>
            <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md shadow-lg transition">
              Hire Developer Now
            </button>
          </div>

          {/* Right Content - Image Section */}
          <div className="flex justify-end relative ">
            <img
              src="/background/hire-developerPage/hire-developer.png"
              alt="DevOps Lifecycle"
              className="w-full md:w-3/4 lg:w-3/4 rounded-lg shadow-xl"
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

        <div className="px-6 lg:px-20 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl">
              Why Should You Hire{" "}
              <span className="text-blue-700">ReactJS Developers</span> <br />{" "}
              From Us?
            </h2>
            <p className="text-md mt-4 max-w-3xl mx-auto">
              Choosing to hire ReactJS developers from us is a strategic
              decision that gives you access to a highly skilled team of
              professionals and ultimately benefits your project. Here’s why:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {jobCards.map((job, index) => (
              <div
                key={index}
                className="bg-glass p-6 rounded-lg shadow-lg text-white flex flex-col justify-between"
              >
                <h4 className="text-xl font-semibold text-start">
                  {job.title}
                </h4>
                <p className="mt-2 text-xs text-start">{job.description}</p>
                <button className="mt-8 px-8 py-2 bg-blue-700 rounded-md hover:bg-blue-600 transition duration-300 text-xs mr-auto">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 lg:px-20">
          <div className="relative bg-glass py-12 px-8 rounded-lg shadow-xl z-10">
            {/* Ellipse Background Effects */}
            <div className="absolute top-0 -left-80 transform -translate-y-1/2 w-4/5 opacity-60 z-0">
              <img
                src="/background/effects/ellipse.png"
                alt="Left Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-[60%] right-0 transform translate-x-1/2 w-3/4 opacity-60 z-0">
              <img
                src="/background/effects/ellipse.png"
                alt="Top Right Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-4/5 opacity-70 z-0">
              <img
                src="/background/effects/ellipse.png"
                alt="Bottom Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Heading */}
            <h2 className="text-center text-4xl text-white font-bold mb-12">
              <span className="text-blue-700">React</span> Onboarding Process
            </h2>

            {/* Grid of items */}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2">
              {industriesServed.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between items-start text-start rounded-lg min-h-[200px] space-y-4"
                >
                  {/* Circle with ID */}
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-full text-white text-xl font-bold">
                    {feature.id}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg text-white min-h-[50px] flex items-start justify-center">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm text-start">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl">
                Benefits of Hiring{" "}
                <span className="text-blue-700">React Developer</span>
              </h2>
              <p className="text-md mt-4 max-w-3xl mx-auto">
                Choosing to hire ReactJS developers from us is a strategic
                decision that gives you access to a highly skilled team of
                professionals and ultimately benefits your project. Here’s why:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-8">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-glass px-6 py-10 rounded-lg shadow-lg flex flex-col items-start text-center space-y-4"
                >
                  {/* Icon */}
                  <div className="w-8 h-8 flex items-center justify-center text-3xl text-white rounded-full shadow-md">
                    <img src="/background/hire-developerPage/circle-tick.png" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-md">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="py-12">
            <h2 className="text-center text-4xl text-white mb-12">
              How we <span className="text-blue-700 font-bold">Engage</span>{" "}
            </h2>

            {/* Grid Layout */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              {engage.map((card) => (
                <div
                  key={card.id}
                  className="bg-glass p-6 rounded-lg shadow-md flex flex-col items-start justify-center text-center w-full h-36"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                    <img src={card.icon} alt="logo" className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mt-3">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="py-12">
            <h2 className="text-center text-4xl text-white mb-12">
              Cost to Hire{" "}
              <span className="text-blue-700 font-bold">React Developers</span>{" "}
              <br /> as Per your Need
            </h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="flex flex-col justify-between items-center text-center bg-glass p-16 rounded-md shadow-lg space-y-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                    <img src={plan.icon} alt="logo" className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl text-white font-bold">{plan.title}</h3>
                  <p className="text-gray-400 text-md">{plan.description}</p>

                  <p className="text-white text-2xl font-semibold">
                    {plan.hourlyRate}
                  </p>

                  <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="px-6 lg:px-20 py-10"
          style={{
            backgroundImage: "url('/background/stars.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative bg-glass flex flex-col items-center justify-center text-center px-6 py-24 rounded-lg mt-20">
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
      </div>
    </LayoutWrapper>
  );
};

export default page;
