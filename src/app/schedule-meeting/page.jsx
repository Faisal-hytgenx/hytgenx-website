"use client";

import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";

const ScheduleMeeting = () => {
  const [divHeight, setDivHeight] = useState("1500px");

  useEffect(() => {
    const updateHeight = () => {
      setDivHeight(window.innerWidth < 962 ? "1250px" : "1000px");
    };

    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <LayoutWrapper>
      <div
        className="relative text-white overflow-hidden"
        style={{ height: divHeight }}
      >
        <div
          className="h-[600px] bg-center relative rounded-b-[130px] overflow-hidden"
          style={{
            backgroundImage:
              "url('/background/contact-us/map-pattern-lite.png')",
          }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#262c3f", opacity: 0.111 }}
          ></div>
        </div>
        <div className="absolute -left-[50%] top-40 transform -translate-y-1/2 opacity-90">
          <img
            src="/background/effects/ellipse.png"
            alt="Left Ellipse"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -right-[50%] top-40 transform -translate-y-1/2 opacity-90">
          <img
            src="/background/effects/ellipse.png"
            alt="Left Ellipse"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-[600px] -left-[20%] -translate-y-1/2 w-full opacity-70">
          <img
            src="/background/ellipse-purple.png"
            alt="Bottom Left Ellipse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[60%] left-[0%]">
          <img
            src="/background/contact-us/half-circle.png"
            alt="Bottom Left Ellipse"
            className="w-12 h-auto object-cover"
          />
        </div>
        <div className="absolute top-[80%] right-[5%]">
          <img
            src="/background/contact-us/yellow-circle.png"
            alt="Bottom Left Ellipse"
            className="w-4 h-auto object-cover"
          />
        </div>

        <div className="absolute top-[0%] -right-[10%] w-full opacity-80">
          <img
            src="/background/effects/ellipse.png"
            alt="Bottom Right Ellipse"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-[0%] -right-[40%] w-full opacity-70">
          <img
            src="/background/effects/ellipse.png"
            alt="Bottom Right Ellipse"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-start items-center flex-col absolute inset-0 mt-20">
          <span className="text-blue-700 p-4">Book a Slot</span>
          <div className="w-full px-10 lg:px-20 lg:w-[70%] text-center">
            <h2 className="text-5xl text-white mb-6">
              💬 Book A Free{" "}
              <span className="text-blue-700 font-bold">Consultation</span>
            </h2>
            <p className="text-gray-300 text-xs">
              At hytGenX, we’re dedicated to providing you with the best
              solutions for your business needs. Whether you have questions
              about our services, want to discuss a project, or need support,
              we’re just a message or a phone call away!
            </p>
          </div>
          <div className="w-[100%] rounded-lg py-6 px-10">
            {/* Calendly Inline Widget */}
            <InlineWidget
              url="https://calendly.com/business-hytgenx/discovery-session"
              styles={{
                height: "700px",
                color: "white",
              }}
              hideEventTypeDetails={false}
            />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default ScheduleMeeting;
