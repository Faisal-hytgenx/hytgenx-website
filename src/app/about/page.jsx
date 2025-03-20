import React from "react";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const projects = [
    {
      id: 1,
      name: "Project Name 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
      imageUrl: "/images/mobile-1.png",
    },
    {
      id: 2,
      name: "Project Name 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
      imageUrl: "/images/mobile-2.png",
    },
    {
      id: 3,
      name: "Project Name 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
      imageUrl: "/images/mobile-3.png",
    },
    {
      id: 4,
      name: "Project Name 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .",
      imageUrl: "/images/laptop.png",
    },
  ];

  const featuresData = [
    {
      icon: "/icons/icon-1.svg",
      title: "Diverse Perspectives, Stronger Ideas",
      description:
        "Great ideas come from different perspectives. We embrace inclusivity to create an environment where creativity and innovation thrive.",
    },
    // {
    //   icon: "/icons/icon-2.svg",
    //   title: "Breaking Barriers, Driving Innovation",
    //   description:
    //     "Staying ahead means thinking boldly. We are constantly exploring new possibilities to provide solutions that meet your unique needs.",
    // },
    {
      icon: "/icons/icon-3.svg",
      title: "Working Together, Achieving More",
      description:
        "Success is a team effort. We build strong partnerships with our clients, collaborating to reach meaningful goals.",
    },
    {
      icon: "/icons/icon-4.svg",
      title: "Adapting to Change, Moving Forward",
      description:
        "The digital world moves fast, and so do we. Our solutions evolve with your business to help you stay ahead in a dynamic landscape.",
    },
    {
      icon: "/icons/icon-5.svg",
      title: "Sustainability and Responsibility",
      description:
        "We are committed to ethical, responsible, and sustainable growth, using technology as a force for good to positively impact our clients and communities.",
    },
  ];

  const founders = [
    {
      name: "Daniyal Abbas",
      position: "CEO / Founder",
      message:
        "hytGenX was born out of a passion for using technology to help businesses succeed. We focus on delivering innovative.",
      imgSrc: "/images/founders/amnan.png",
    },
    {
      name: "Amnan Hussain",
      position: "Co-Founder / CMO",
      message:
        "hytGenX was born out of a passion for using technology to help businesses succeed. We focus on delivering innovative.",
      imgSrc: "/images/founders/amnan.png",
    },
    {
      name: "Mustafa Abdul Rahman",
      position: "Co-Founder",
      message:
        "hytGenX was born out of a passion for using technology to help businesses succeed. We focus on delivering innovative.",
      imgSrc: "/images/founders/amnan.png",
    },
    {
      name: "Khizar Sultan",
      position: "Co-Founder / CBO",
      message:
        "hytGenX was born out of a passion for using technology to help businesses succeed. We focus on delivering innovative.",
      imgSrc: "/images/founders/amnan.png",
    },
  ];

  return (
    <>
      <LayoutWrapper>
        <div className="relative text-white overflow-hidden">
          <div className="absolute -top-60 right-0 transform translate-x-1/2 w-full">
            <img
              src="/background/effects/ellipse.png"
              alt="Bottom Right Ellipse"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-40 right-0 transform translate-x-1/2 translate-y-1/2 w-full">
            <img
              src="/background/effects/ellipse.png"
              alt="Bottom Right Ellipse"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-80 left-0 transform -translate-x-1/2 translate-y-[85%] w-full">
            <img
              src="/background/effects/ellipse.png"
              alt="Bottom Right Ellipse"
              className="w-full h-auto object-cover"
            />
          </div>

          <div
            className="h-[350px] shadow-lg shadow-blue-700 mx-10 rounded-b-[30px] relative flex items-center"
            style={{
              backgroundImage: "url(/background/dna-bg.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              transform: "skewY(-3deg)",
              transformOrigin: "bottom right",
              boxShadow: "0px 10px 20px rgba(0, 132, 255, 0.4)",
            }}
          >
            <div
              className="w-full flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto px-10 custom:px-10 lg:px-20 md:py-20"
              style={{
                transform: "skewY(3deg)",
                transformOrigin: "bottom right",
              }}
            >
              {/* Left Section - Text Content */}
              <div className="w-full">
                <span
                  className="text-white border border-blue-700 bg-blue-600 p-2 rounded-md"
                  style={{ fontSize: "12px" }}
                >
                  About Us
                </span>

                {/* <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold mt-6"> */}
                <h1 className="text-4xl sm:text-4xl md:text-3xl mt-2 font-bold mt-6">
                  Redefining the Future <br />
                  with <span className="text-blue-700">AI-Driven</span>{" "}
                  Excellence
                </h1>

                <p className="text-[15px] sm:text-[15px] md:text-[15px] text-gray-300 hidden sm:block mt-2">
                  Transform your business with hytGenX’s innovative AI
                  solutions. We design smart tools to simplify complexities,
                  drive growth, and keep you ahead in a rapidly evolving world.
                </p>
              </div>

              {/* Right Section - Image */}
              <div className="hidden md:flex md:w-1/2 justify-end">
                <Image
                  src="/background/about/hytgenx-logo.png" // Replace with actual image path
                  alt="AI Driven Excellence"
                  width={300} // Adjust width as needed
                  height={300} // Adjust height as needed
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-10 lg:px-20">
            <div className="text-white py-20 mt-20">
              <div className="grid md:grid-cols-2 gap-4 items-center">
                {/* Left Content - Image Section */}
                <div className="flex justify-center sm:justify-start">
                  <Image
                    src="/background/about-1.png" // Replace with actual image path
                    alt="DevOps Lifecycle"
                    width={400} // Ensure the image size remains consistent
                    height={280}
                    className="w-[100%] sm:[90%] h-auto rounded-md shadow-2xl object-cover"
                  />
                </div>

                {/* Right Content - Text Section */}
                <div className="space-y-6">
                  <h2 className="text-4xl leading-snug">
                    Shaping the <span className="font-bold">Future</span> with{" "}
                    <br />
                    <span className="text-blue-700 font-bold">
                      Cutting-Edge AI
                    </span>{" "}
                    Research
                  </h2>
                  <p className="text-gray-400 text-md">
                    At hytGenX, innovation is at the core of everything we do.
                    Born from a passion for technology, we are committed to
                    delivering advanced AI solutions that empower businesses to
                    stay ahead in a fast-paced digital world. Our mission is to
                    transform challenges into opportunities and create
                    meaningful impact through tailored, future-ready strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-20 w-full">
              <h1 className="text-2xl text-start text-white">
                Our Core Values: The <span className="font-bold">Heart</span> of{" "}
                <span className="font-bold text-blue-700">hytGenX</span>
              </h1>
              <p className="w-full md:w-[70%] lg:w-[60%] text-gray-400 mb-8 text-xs">
                At hytGenX, our values aren’t just principles—they’re the
                foundation of how we innovate, collaborate, and create value for
                our clients. Here’s what drives us every day:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                {featuresData.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center text-center w-full"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-8 h-8 mb-4"
                    />
                    <h3 className="text-lg font-medium text-white min-h-[48px] flex items-center justify-center text-center px-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 min-h-[48px] flex items-center justify-center text-center px-2">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <section
              className="relative text-white py-10 mt-20 rounded-md"
              style={{
                backgroundImage: `url('/background/stars.png'), url('/background/about/hytgenx-vector.png'), linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))`,
                backgroundSize: "cover, cover",
                backgroundPosition: "center",
              }}
            >
              <div className="px-12 py-6 rounded-md">
                <div>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <p className="text-md text-blue-700">Our Vision</p>
                      <h2 className="text-3xl leading-snug">
                        <span className="font-bold">Redefining</span>{" "}
                        Possibilities
                        <br /> with{" "}
                        <span className="text-blue-700 font-bold">AI</span>
                      </h2>
                      <p className="text-gray-400 text-md">
                        Our vision is to lead the global transformation of
                        technology by delivering AI-powered, data-driven
                        solutions that empower businesses to innovate, scale,
                        and achieve sustainable growth. We envision a world
                        where technology is not just a tool, but a catalyst for
                        unlocking human potential and driving societal progress.
                        At hytGenX, we’re not just shaping the future of
                        technology, we’re empowering a smarter, more connected
                        world.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/background/about-3.png"
                        alt="DevOps Lifecycle"
                        className="w-full md:w-[90%] lg:w-[80%] xl:w-[80%] rounded-md shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="py-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Content - Image Section */}
                    <div className="flex justify-center">
                      <img
                        src="/background/about-2.png"
                        alt="DevOps Lifecycle"
                        className="w-full md:w-[90%] lg:w-[80%] xl:w-[80%] rounded-md shadow-2xl"
                      />
                    </div>

                    {/* Right Content - Text Section */}
                    <div className="space-y-6">
                      <p className="text-md text-blue-700">Our Mission</p>
                      <h2 className="text-3xl leading-snug">
                        Empowering Progress <br /> Through{" "}
                        <span className="font-bold text-blue-700">
                          Innovation
                        </span>
                      </h2>
                      <p className="text-gray-400 text-md">
                        Our mission is to empower organizations worldwide
                        through AI-driven software solutions, advanced cloud
                        infrastructure, and cutting-edge development practices.
                        By focusing on customer success, innovation, and
                        collaboration, we strive to deliver scalable,
                        tailor-made solutions that meet the evolving needs of
                        businesses in every industry. At hytGenX, we believe
                        that technology should always be pushing boundaries, and
                        we are dedicated to helping our clients stay ahead of
                        the curve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* founders section */}
          <div className="max-w-7xl mx-auto px-10 lg:px-20">
            <div className="mt-20 py-12 ">
              <div className="flex justify-between items-center">
                <div>
                  <img src="/logos/person.png" alt="Person" />
                </div>
                <div className="text-right">
                  <h1 className="text-4xl">Founders</h1>
                </div>
              </div>
              <div className="flex flex-wrap justify-around mt-10 gap-6">
                {founders.map((founder, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-md shadow-lg flex-grow basis-[200px] max-w-[250px]"
                  >
                    {/* Founder Image (Uncomment when needed) */}
                    {/* <img
        src={founder.imgSrc}
        alt={founder.name}
        className="w-52 h-auto object-cover mb-4"
      /> */}

                    <h2 className="text-3xl font-bold whitespace-nowrap">
                      {founder.name}
                    </h2>
                    <p className="text-blue-700 text-md">{founder.position}</p>

                    {/* Optional Founder Message */}
                    {/* <p className="text-gray-400 mt-2 text-center text-sm">
        {founder.message}
      </p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-7xl mx-auto px-10 lg:px-20 py-10"
          style={{
            backgroundImage: "url('/background/stars.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative bg-glass flex flex-col items-center justify-center text-center px-6 py-16 rounded-lg mt-10">
            {/* Content */}
            <div className="relative z-10 w-[80%]">
              <h1 className="text-2xl sm:text-5xl text-white font-bold">
                Partner with <span className="text-blue-700">hytGenX</span>
              </h1>
              <p className="mt-4 text-sm text-gray-300">
                Use AI to solve challenges and unlock growth. Together, we’ll
                achieve your goals and build a better future for your business.
              </p>
              <Link href={"/contact"}>
                <button className="mt-6 px-8 py-2 bg-blue-700 text-white font-medium text-md rounded-md shadow-lg hover:bg-blue-600">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </>
  );
};

export default Page;
