import React from "react";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const projects = [
    {
      id: 1,
      name: "SalesBot AI",
      description:
        "The Sales Chatbot with Dynamic Interaction by hytGenX automates and enhances customer engagement through real-time voice-to-text and text-to-speech processing. Powered by Whisper, GPT-based LLMs, and LangGraph, it delivers natural, dynamic conversations with seamless workflow execution. The chatbot features website integration and an interactive avatar, improving user experience, conversion rates, and operational efficiency. Built using FastAPI, React, and Streamlit, with Azure Integration, it is a cutting-edge solution for modernizing sales communication.",
      imageUrl: "/images/mobile-1.png",
      demolink: "https://restaurantbot.hytgenx.co/",
    },
    {
      id: 2,
      name: "Health Chatbot",
      description: `The "hytGenX" project introduces a health chatbot designed to enhance patient care through real-time emotion detection and personalization. This chatbot analyzes emotions using face and audio detection, tailoring recommendations to individual needs. It offers tailored medical advice, health strategies, and issue resolution, supported by a dashboard that provides alerts, summaries, and insights to improve patient engagement and streamline healthcare decision-making.`,
      imageUrl: "/images/mobile-2.png",
      demolink: "https://restaurantbot.hytgenx.co/",
    },
    {
      id: 3,
      name: "Exercise Monitoring System",
      description:
        "Introducing the hytGenX Exercise Monitoring System: Elevate your workouts with our cutting-edge technology. This system uses computer vision to accurately identify exercises, count repetitions, and assess posture. Integrated with mobile apps, it provides personalized workout plans and real-time feedback from our voice-based chatbot. Powered by OpenCV, MediaPipe, PyTorch, and TensorFlow Lite, hytGenX enhances workout efficiency and engagement.",
      imageUrl: "/images/mobile-3.png",
      demolink: "https://restaurantbot.hytgenx.co/",
    },
    {
      id: 4,
      name: "AI Agent for Social Media Campaign Management",
      description:
        "An advanced AI-powered social media marketing assistant that automates content creation, scheduling, and posting across multiple platforms. It leverages machine learning to analyze engagement metrics, optimize posting times, and generate high-quality text, image, and video content tailored for each platform. The system also integrates with analytics tools to provide data-driven insights, allowing businesses to refine their marketing strategies. Additionally, it features sentiment analysis and automated response generation to interact with users and improve brand engagement.",
      imageUrl: "/images/project-4.png",
      demolink: "https://restaurantbot.hytgenx.co/",
    },
    {
      id: 5,
      name: "AI Agent for Job Application",
      description:
        "A powerful AI-driven job application assistant designed to streamline the job search process. This intelligent tool scans multiple job portals in real time to find the most relevant listings based on user preferences. It automatically optimizes resumes, crafts personalized cover letters, and tracks application statuses. Additionally, it provides interview preparation tips using AI-based insights and sends real-time notifications about new job openings. Users can also receive career suggestions and skill improvement recommendations to increase their chances of landing their dream job.",
      imageUrl: "/images/project-3.png",
      demolink: "https://restaurantbot.hytgenx.co/",
    },
    {
      id: 4,
      name: "AI-Enabled HR Management System",
      description:
        "A cutting-edge AI-powered HR management system that revolutionizes workforce administration by automating key HR functions such as recruitment, attendance tracking, payroll management, and employee engagement. The system uses AI algorithms to analyze candidate resumes, conduct automated interviews, and shortlist top talent. It also includes a self-service portal for employees to submit requests, track leaves, and manage personal records. Additionally, the platform offers AI-powered analytics to provide valuable insights into workforce performance, retention strategies, and HR decision-making.",
      imageUrl: "/images/project-hr.png",
      demolink: "https://restaurantbot.hytgenx.co/",
    },
    {
      id: 6,
      name: "AI Image Generation Tool",
      description:
        "An AI-powered image generation platform that transforms simple text prompts into high-quality, realistic images. This tool leverages deep learning and neural networks to generate artwork in various styles, including photorealistic, abstract, and cartoon. It offers users advanced customization options, allowing them to modify colors, textures, and elements to suit their creative needs. Ideal for graphic designers, marketers, and content creators, this AI tool streamlines the creative process and provides an endless array of visually stunning images within seconds.",
      imageUrl: "/images/project-2.png",
      demolink: "https://restaurantbot.hytgenx.co/",
    },
    {
      id: 7,
      name: "AI Booking Management System",
      description:
        "A smart AI-driven booking management system designed to automate appointment scheduling and optimize business operations. This intelligent system integrates seamlessly with calendars, CRMs, and messaging apps to handle appointment bookings, rescheduling, and cancellations effortlessly. It features an AI-powered chatbot that interacts with users to confirm appointments, send reminders, and offer real-time availability updates. Additionally, the system includes analytics to track booking trends, customer preferences, and overall business efficiency, ensuring seamless appointment management for service-based industries.",
      imageUrl: "/images/project-1.png",
      demolink: "https://restaurantbot.hytgenx.co/",
    },
  ];

  // const projects = [
  //   {
  //     id: 4,
  //     name: "AI Agent for Social Media Campaign Management",
  //     description:
  //       "An advanced AI-powered social media marketing assistant that automates content creation, scheduling, and posting across multiple platforms. It leverages machine learning to analyze engagement metrics, optimize posting times, and generate high-quality text, image, and video content tailored for each platform. The system also integrates with analytics tools to provide data-driven insights, allowing businesses to refine their marketing strategies. Additionally, it features sentiment analysis and automated response generation to interact with users and improve brand engagement.",
  //     imageUrl: "/images/project-2.png",
  //     demolink: "https://www.hytgenx.com/",
  //   },
  //   {
  //     id: 4,
  //     name: "AI Agent for Job Application",
  //     description:
  //       "A powerful AI-driven job application assistant designed to streamline the job search process. This intelligent tool scans multiple job portals in real time to find the most relevant listings based on user preferences. It automatically optimizes resumes, crafts personalized cover letters, and tracks application statuses. Additionally, it provides interview preparation tips using AI-based insights and sends real-time notifications about new job openings. Users can also receive career suggestions and skill improvement recommendations to increase their chances of landing their dream job.",
  //     imageUrl: "/images/job-search-ai.png",
  //     demolink: "https://www.hytgenx.com/",
  //   },
  //   {
  //     id: 3,
  //     name: "AI-Enabled HR Management System",
  //     description:
  //       "A cutting-edge AI-powered HR management system that revolutionizes workforce administration by automating key HR functions such as recruitment, attendance tracking, payroll management, and employee engagement. The system uses AI algorithms to analyze candidate resumes, conduct automated interviews, and shortlist top talent. It also includes a self-service portal for employees to submit requests, track leaves, and manage personal records. Additionally, the platform offers AI-powered analytics to provide valuable insights into workforce performance, retention strategies, and HR decision-making.",
  //     imageUrl: "/images/hr-management-ai.png",
  //     demolink: "https://www.hytgenx.com/",
  //   },
  //   {
  //     id: 4,
  //     name: "AI Image Generation Tool",
  //     description:
  //       "An AI-powered image generation platform that transforms simple text prompts into high-quality, realistic images. This tool leverages deep learning and neural networks to generate artwork in various styles, including photorealistic, abstract, and cartoon. It offers users advanced customization options, allowing them to modify colors, textures, and elements to suit their creative needs. Ideal for graphic designers, marketers, and content creators, this AI tool streamlines the creative process and provides an endless array of visually stunning images within seconds.",
  //     imageUrl: "/images/image-generation-ai.png",
  //     demolink: "https://www.hytgenx.com/",
  //   },
  //   {
  //     id: 5,
  //     name: "AI Booking Management System",
  //     description:
  //       "A smart AI-driven booking management system designed to automate appointment scheduling and optimize business operations. This intelligent system integrates seamlessly with calendars, CRMs, and messaging apps to handle appointment bookings, rescheduling, and cancellations effortlessly. It features an AI-powered chatbot that interacts with users to confirm appointments, send reminders, and offer real-time availability updates. Additionally, the system includes analytics to track booking trends, customer preferences, and overall business efficiency, ensuring seamless appointment management for service-based industries.",
  //     imageUrl: "/images/booking-management-ai.png",
  //     demolink: "https://www.hytgenx.com/",
  //   },
  // ];
  // const projects = [

  // ];
  return (
    <>
      <LayoutWrapper>
        <div className="relative text-white overflow-hidden">
          <div className="absolute -top-60 right-0 transform translate-x-1/3 w-full">
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
          <div className="absolute top-0 -left-40 transform -translate-x-1/2 translate-y-1/2 w-[150%]">
            <img
              src="/background/effects/ellipse.png"
              alt="Top Left Ellipse"
              className="w-full h-auto object-cover"
            />
          </div>

          <div
            className="h-[350px] shadow-lg rounded-md mx-10 rounded-b-[30px] flex items-center"
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
              className="w-full max-w-7xl mx-auto px-10 custom:px-10 lg:px-20"
              style={{
                transform: "skewY(3deg)",
                transformOrigin: "bottom right",
              }}
            >
               <span
            className="text-white border border-blue-700 bg-blue-600 p-2 rounded-md"
            style={{ fontSize: "12px" }}
          >
            Portfolio
          </span>
              <h1 className="text-4xl sm:text-4xl md:text-3xl font-bold mt-6">
                From ideas to impact:
              </h1>
              <p className="text-lg sm:text-2xl font-bold md:text-4xl">
                The all-in-one platform for private and{" "}
                <span className="text-blue-700 font-bold">secure AI</span>
              </p>
              <p className="text-[15px] sm:text-[15px] md:text-[15px] mt-2 text-gray-300 hidden sm:block">
                Take a closer look at the projects we've delivered and see why
                our clients value our work.
                <br /> Dive into solutions that bring tangible benefits, driving
                growth, innovation, and <br /> success through exceptional
                design and custom features.
              </p>
            </div>
          </div>

          <section className="text-white pt-40 relative max-w-7xl mx-auto px-10 lg:px-10">
            <h1 className="text-3xl font-bold text-center mb-2">
              Our <span className="text-blue-700">Portfolio</span>
            </h1>
            <p className="text-gray-300 text-md text-center mb-8">
              Learn how we have helped our clients overcome challenges, gain a
              competitive edge, and <br />
              enhance their user satisfaction and business performance.
            </p>

            <div className="relative space-y-6 max-w-7xl mx-auto">
              {/* Ellipse Backgrounds */}
              <img
                src="/background/effects/ellipse.png"
                alt="Ellipse Effect"
                className="absolute -left-[40%] -top-40 w-full h-auto opacity-50"
              />
              <img
                src="/background/effects/ellipse.png"
                alt="Ellipse Effect"
                className="absolute -left-[40%] top-60 w-full h-auto opacity-50"
              />
              <img
                src="/background/effects/ellipse.png"
                alt="Ellipse Effect"
                className="absolute -left-[40%] top-[50%] w-full h-auto opacity-50"
              />
              <img
                src="/background/effects/ellipse.png"
                alt="Ellipse Effect"
                className="absolute -right-[40%] top-[50%] w-full h-auto opacity-70"
              />

              {projects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.demolink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    id={`project-${project.id}`}
                    className="px-6 flex flex-col lg:flex-row items-center justify-between bg-glass-no-border h-auto lg:h-[380px] cursor-pointer transition gap-6 py-6"
                  >
                    <div className="text-start flex-1 px-6">
                    <div className="w-30 h-30 rounded-full flex flex-col sm:flex-row items-center justify-start text-white font-bold mb-8">
                        <Image
                          src={"/logos/hytgenx.svg"}
                          width={120}
                          height={180}
                          className="mr-2"
                          alt="Project Logo"
                        />
                        <div className="text-lg font-semibold text-blue-700">
                          {project.name}
                        </div>
                      </div>
                      <p className="text-md">{project.description}</p>
                    </div>

                    {/* Conditional Image Size for First 3 Items */}
                    <div className="w-full md:w-[40%] flex justify-center lg:justify-end">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.name}`}
                        width={index < 3 ? 150 : 300} // Small for first 3, larger for others
                        height={index < 3 ? 150 : 300} // Small for first 3, larger for others
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>

        <div
          className="px-6 max-w-7xl mx-auto lg:px-20 py-10"
          style={{
            backgroundImage: "url('/background/stars.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative bg-glass flex flex-col items-center justify-center text-center px-6 py-16 rounded-lg mt-20">
            {/* Content */}
            <div className="relative z-10 w-[80%]">
              <h1 className="text-2xl sm:text-5xl text-white font-bold">
                hytGenX help you harness the power of DevOps to drive
                innovation.
              </h1>
              <p className="mt-4 sm:text-lg text-md text-gray-300">
                Trusted by 90% of the Fortune 100, GitHub helps millions of
                developers and companies collaborate, build, and deliver secure
                software faster. And with thousands of DevOps integrations,
                developers can build smarter from day one with the tools you
                know and love—or discover new ones.
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
    </>
  );
};

export default Page;
