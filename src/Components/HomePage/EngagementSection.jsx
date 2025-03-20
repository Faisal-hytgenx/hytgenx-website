"use client";
import Image from "next/image";
import React, { useState } from "react";

const EngagementSection = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHoveredcenter, setIsHoveredCenter] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <>
      <div className="relative max-w-7xl mx-auto px-10 lg:px-20">
        {/* Small Bluish Circle */}
        <div
          className="absolute -top-10 w-12 h-12 bg-blue-700 rounded-full shadow-lg z-10 opacity-40"
          style={{ left: "300px" }}
        ></div>
        <div
          className="absolute top-20 left-4 w-6 h-6 bg-blue-700 rounded-full shadow-lg opacity-40"
          style={{ left: "330px" }}
        ></div>
        <div
          className="absolute -top-10 w-4 h-4 bg-blue-700 rounded-full shadow-lg z-10 opacity-40"
          style={{ left: "500px" }}
        ></div>
        <div
          className="absolute top-40 w-3 h-3 bg-blue-700 rounded-full shadow-lg opacity-40"
          style={{ left: "450px" }}
        ></div>

        <div
          className="absolute -top-10 w-4 h-4 bg-blue-700 rounded-full shadow-lg z-10 opacity-40"
          style={{ right: "240px" }}
        ></div>
        <div
          className="absolute top-10 w-12 h-12 bg-blue-700 rounded-full shadow-lg opacity-40"
          style={{ right: "50px" }}
        ></div>
        <div
          className="absolute top-20 w-3 h-3 bg-blue-700 rounded-full shadow-lg z-10 opacity-40"
          style={{ right: "210px" }}
        ></div>
        <div
          className="absolute top-40 w-48 h-48 rounded-full shadow-lg opacity-20"
          style={{
            right: "10px",
            background: "linear-gradient(to bottom, #3b82f6, #000)",
          }}
        ></div>

        <div
          className="absolute top-1/2 w-64 h-64 rounded-full shadow-lg opacity-20"
          style={{
            left: "10px",
            background: "linear-gradient(to bottom, #3b82f6, #000)",
          }}
        ></div>

        <div className="px-6 lg:px-20">
          <h1 className="text-5xl text-white text-center mt-10 z-50">
            Flexible{" "}
            <span style={{ color: "#0084ff" }} className="font-bold">
              Engagement Models
            </span>{" "}
            For Every Need
          </h1>
          <p className="mt-6 text-gray-400 text-center text-md">
            Select an engagement model that aligns with your goals and project
            requirements.
          </p>
        </div>

        <div className="flex justify-center items-stretch py-12">
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-4 flex-1 min-w-[300px] max-w-md md:flex-col">
              <div className="flex flex-col gap-4 w-full">
                {/* Card 1 */}
                <div
                  className="relative rounded-lg shadow-lg overflow-hidden transition-transform duration-300 z-20"
                  style={{
                    height: "280px",
                    width: "100%",
                    transform: isHovered1 ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={() => setIsHovered1(true)}
                  onMouseLeave={() => setIsHovered1(false)}
                >
                  {/* Background Image */}
                  <Image
                    src="/background/servicesPage/card1.png"
                    alt="AI-Powered Development Solutions"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                    style={{
                      filter: isHovered1 ? "blur(5px)" : "blur(0px)",
                      transition:
                        "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
                      transform: isHovered1 ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-60"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end text-white p-6 h-full">
                    <h3 className="text-lg font-bold mb-2">
                      Fixed-Price Model
                    </h3>
                    <p className="text-sm">
                      Ideal for well-defined projects with clear goals,
                      providing predictable costs and timelines.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="flex flex-col justify-end bg-gray-800 text-white rounded-lg shadow-lg relative p-4 overflow-hidden"
                  style={{
                    height: "280px",
                    width: "100%",
                    transform: isHovered2 ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                >
                  {/* Background Image */}
                  <Image
                    src="/background/servicesPage/card4.png"
                    alt="AI-Powered Development Solutions"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                    style={{
                      filter: isHovered2 ? "blur(5px)" : "blur(0px)",
                      transition:
                        "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
                      transform: isHovered2 ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-50"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2">
                      Dedicated Team Model
                    </h3>
                    <p className="text-sm">
                      Access a dedicated team of experts focused exclusively on
                      your long-term projects and evolving needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Card */}
            <div
              className="flex flex-col justify-end bg-gray-800 text-white rounded-lg shadow-lg relative p-4 flex-1 min-w-[300px] max-w-md z-20"
              style={{
                height: "570px",
                width: "100%",
                transform: isHoveredcenter ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={() => setIsHoveredCenter(true)}
              onMouseLeave={() => setIsHoveredCenter(false)}
            >
              <Image
                src="/background/engagement-bg.jpg"
                alt="AI-Powered Development Solutions"
                layout="fill"
                objectFit="cover"
                className="absolute rounded-lg"
                style={{
                  filter: isHoveredcenter ? "blur(5px)" : "blur(0px)",
                  transition:
                    "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
                  transform: isHoveredcenter ? "scale(1.00001)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">
                  Agile or Scrum-Based Model
                </h3>
                <p className="text-sm">
                  Adapt to changing requirements with iterative development,
                  delivering incremental improvements.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 flex-1 min-w-[250px] max-w-md md:flex-col">
              <div className="flex flex-col gap-4 w-full">
                {/* Card 1 */}
                {/* <div
                  className="flex flex-col justify-end bg-gray-800 text-white rounded-lg shadow-lg relative p-4"
                  style={{
                    height: "280px",
                    width: "100%",
                    transform: isHovered3 ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                >
                  <Image
                    src="/background/servicesPage/card2.png"
                    alt="AI-Powered Development Solutions"
                    layout="fill"
                    objectFit="cover"
                    className="absolute rounded-lg"
                    style={{
                      filter: isHovered3 ? "blur(5px)" : "blur(0px)",
                      transition:
                        "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
                      transform: isHovered3 ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>

                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2">
                      Staff Augmentation Model
                    </h3>
                    <p className="text-sm">
                      Extend your in-house capabilities with experienced
                      developers and technical specialists.
                    </p>
                  </div>
                </div> */}
                <div
                  className="relative rounded-lg shadow-lg overflow-hidden transition-transform duration-300"
                  style={{
                    height: "280px",
                    width: "100%",
                    transform: isHovered3 ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={() => setIsHovered3(true)}
                  onMouseLeave={() => setIsHovered3(false)}
                >
                  {/* Background Image */}
                  <Image
                    src="/background/servicesPage/card2.png"
                    alt="AI-Powered Development Solutions"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                    style={{
                      filter: isHovered3 ? "blur(5px)" : "blur(0px)",
                      transition:
                        "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
                      transform: isHovered3 ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-60"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end text-white p-6 h-full">
                    <h3 className="text-lg font-bold mb-2">
                      {" "}
                      Staff Augmentation Model
                    </h3>
                    <p className="text-sm">
                      Extend your in-house capabilities with experienced
                      developers and technical specialists.{" "}
                    </p>
                  </div>
                </div>

                {/* card 2 */}
                <div
                  className="flex flex-col justify-end bg-gray-800 text-white rounded-lg shadow-lg relative p-4 overflow-hidden"
                  style={{
                    height: "280px",
                    width: "100%",
                    transform: isHovered4 ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s",
                  }}
                  onMouseEnter={() => setIsHovered4(true)}
                  onMouseLeave={() => setIsHovered4(false)}
                >
                  {/* Background Image */}
                  <Image
                    src="/background/servicesPage/card3.png"
                    alt="AI-Powered Development Solutions"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                    style={{
                      filter: isHovered4 ? "blur(5px)" : "blur(0px)",
                      transition:
                        "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
                      transform: isHovered4 ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-50"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-2">Hybrid Model </h3>
                    <p className="text-sm">
                      Combine different approaches to achieve flexibility and
                      control for complex projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngagementSection;
