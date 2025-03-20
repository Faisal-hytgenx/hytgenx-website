"use client";
import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";

const HireByRole = () => {
  const [selectedRole, setSelectedRole] = useState("Frontend Developer");

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "Mobile App Developer",
    "Database Engineer",
    "CMS Developer",
  ];

  const content = {
    "Frontend Developer":
      "We provide skilled Frontend Developers to craft stunning, responsive user interfaces.",
    "Backend Developer":
      "Our Backend Developers ensure your application's logic and server-side operations run smoothly.",
    "DevOps Engineer":
      "Hire experienced DevOps Engineers to streamline your development and deployment pipelines.",
    "Mobile App Developer":
      "Get Mobile App Developers who specialize in creating seamless and user-friendly applications.",
    "Database Engineer":
      "Our Database Engineers design and maintain efficient, scalable database solutions.",
    "CMS Developer":
      "Hire CMS Developers to build and customize content management systems tailored to your needs.",
  };

  return (
    <>
      <h1 className="text-3xl text-center mb-2">
         Our Comprehensive{" "}
        <span className="text-blue-700 font-bold">Services</span> <br /> That
        Are Here To Stay
      </h1>
      <p className="text-md text-center mb-8">
        We stand stalwart in the market with our comprehensive services because
        for us you are not just another client but a <br /> partner. Check out
        our versatile services ready to cater for your every need.
      </p>

      <div className="flex flex-col md:flex-row min-h-screen text-white">
        <div className="flex flex-col md:flex-row flex-1 w-full gap-6">
          {/* Left Sidebar */}
          <div className="lg:w-1/4 mb-0 sm:mb-6 flex flex-col gap-8 md:h-full">
            {roles.map((role) => (
              <div
                key={role}
                className={`cursor-pointer p-4 rounded-md shadow-md flex-grow flex items-center justify-center transition-all duration-300 h-full ${
                  selectedRole === role
                    ? "bg-glass-no-border text-blue-700"
                    : "bg-glass-no-border text-white hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setSelectedRole(role)}
              >
                <h3 className="text-lg font-medium flex justify-between items-center w-full">
                  <span>{role}</span>
                  <EastIcon />
                </h3>
              </div>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="flex-1 p-6 bg-glass-no-border h-auto md:h-full">
            <h2 className="text-2xl font-bold mb-4">{selectedRole}</h2>
            <p className="text-lg text-gray-300">{content[selectedRole]}</p>
            <div className="mt-6">
              <button className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-all">
                Hire Developer Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HireByRole;
