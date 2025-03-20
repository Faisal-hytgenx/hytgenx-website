"use client";
import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import Link from "next/link";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    phone: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!formData.resume) {
    //   alert("Please upload your resume before submitting.");
    //   return;
    // }

    const form = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      jobTitle: formData.jobTitle,
      phoneNumber: formData.phone,
      message: formData.message,
      resumeLink: formData.resume,
    };

    try {
      const response = await fetch("http://localhost:8000/apply-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          phone: "",
          message: "",
          resume: null,
        });
      } else {
        alert("Error submitting application. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting application. Please check your network.");
    }
  };

  return (
    <LayoutWrapper>
      <div className="relative text-white  overflow-hidden">
        {/* Hero Section */}
        <div
          className="h-[80vh] relative bg-cover bg-no-repeat flex items-center py-12"
          style={{
            backgroundImage: "url(/background/frame.png)",
          }}
        >
          <div className="flex flex-wrap items-center max-w-7xl mx-auto px-10 pt-20 sm:pt-40">
            <div className="absolute top-[10%] right-20 transform translate-x-1/4 w-full z-[-1]">
              <img
                src="/background/effects/ellipse.png"
                alt="Bottom Right Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-[150%] left-0 transform -translate-x-1/2 w-full z-[-1]">
              <img
                src="/background/effects/ellipse.png"
                alt="Left Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Ellipse on the Right */}
            <div className="absolute top-[160%] right-0 transform translate-x-1/2 w-full z-[-1]">
              <img
                src="/background/effects/ellipse.png"
                alt="Right Ellipse"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Left Side Content */}
            <div className="w-full md:w-1/2  mt-30 px-0 lg:px-10 sm:mt-0">
              <div className="mb-4 text-gray-300 text-xs">WE ARE hytGenX</div>
              <h1 className="text-3xl font-bold mt-2">
                Make an Impact Where{" "}
                <span className="text-blue-700">Innovation</span> Meets
                Opportunity
              </h1>
              <p className="text-[15px] mt-2">
                At hytGenX, we don’t just work on technology—we transform
                industries. Join a team of forward-thinkers passionate about
                solving real-world problems with AI and ML. Step into a
                workplace where your ideas matter, your skills grow, and every
                day brings new opportunities to thrive.
              </p>
              {/* <button className="mt-6 px-6 py-2 bg-blue-700 rounded-md hover:bg-blue-600 transition duration-300 text-sm">
                View Open Positions
              </button> */}
            </div>

            {/* Right Side Image */}
            <div className="w-full md:w-1/2 px-6 mt-8 md:mt-0 z-[-1]">
              <Image
                src="/background/career/career-bg1.png"
                alt="Career Background"
                width={1200} 
                height={800} 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="relative max-w-7xl mx-auto lg:px-20 px-10">
          <div className="bg-glass-no-border text-white py-12 rounded-md shadow-lg relative overflow-hidden min-h-[500px]">
            {/* Ellipse on the Left */}

            {/* Card Heading and Description */}
            <div className="text-center mb-8 ">
              <h2 className="text-3xl font-bold">
                At <span className="text-blue-700">hytGenX</span>, Values Shape{" "}
                <br /> Everything We Do
              </h2>
              <p className="text-md text-gray-300 mt-4">
                We believe a strong foundation of principles drives not just
                success but also meaningful <br /> growth, for our team, our
                clients, and the world around us. Here’s what defines us:
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="text-start px-6 lg:px-12 py-12">
                <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mb-4 z-[-1]">
                  <img
                    src="/background/career/stats.png"
                    alt="Deliver Impact"
                    className="w-8 h-8 object-cover"
                  />
                </div>
                <h4 className="font-semibold">Deliver Impact That Matters</h4>
                <p className="mt-2 text-gray-300">
                  Every action we take is focused on creating measurable,
                  lasting results. From solving complex challenges to driving
                  business success, we ensure our work makes a real difference.
                </p>
              </div>
              <div className="text-start px-6 lg:px-12 py-12">
                <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mb-4 z-[-1]">
                  <img
                    src="/background/career/heart.png"
                    alt="Commit to Excellence"
                    className="w-8 h-8 object-cover"
                  />
                </div>
                <h4 className="font-semibold">Commit to Excellence</h4>
                <p className="mt-2 text-gray-300">
                  We hold ourselves to the highest standards in everything we
                  do, constantly striving to exceed expectations and deliver
                  exceptional value.
                </p>
              </div>
              <div className="text-start px-6 lg:px-12 py-12">
                <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mb-4 z-[-1]">
                  <img
                    src="/background/career/tick.png"
                    alt="Build Meaningful Connections"
                    className="w-8 h-8 object-cover"
                  />
                </div>
                <h4 className="font-semibold">Build Meaningful Connections</h4>
                <p className="mt-2 text-gray-300">
                  Relationships are at the heart of innovation. We foster trust,
                  respect, and collaboration to create partnerships that fuel
                  long-term success.
                </p>
              </div>
              <div className="text-start px-6 lg:px-12 py-12">
                <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center mb-4 z-[-1]">
                  <img
                    src="/background/career/handshake.png"
                    alt="Empower Teamwork"
                    className="w-8 h-8 object-cover"
                  />
                </div>
                <h4 className="font-semibold">Empower Teamwork</h4>
                <p className="mt-2 text-gray-300">
                  We believe in the collective power of a united team. By
                  bringing diverse perspectives together, we achieve more and
                  overcome challenges with strength and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto lg:px-20 px-10 mt-24 z-[-1]">
          <div className="text-center mb-12">
            <h2 className="text-3xl">
              Explore <span className="font-bold">Opportunities at </span>{" "}
              <span className="text-blue-700 font-bold">hytGenX</span>{" "}
            </h2>
            <p className="text-md mt-4 max-w-3xl mx-auto">
              Join hytGenX and be part of a team driving innovation and impact.
              Explore opportunities <br /> to grow, thrive, and shape
              groundbreaking solutions in a collaborative environment.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto bg-black mt-10 mb-10 p-8 rounded-lg z-50"
          >
            {/* First and Last Name */}
            <div className="mb-6 flex space-x-4">
              <div className="w-full">
                <label className="block text-white mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                />
              </div>
              <div className="w-full">
                <label className="block text-white mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                required
              />
            </div>

            {/* Job Title */}
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                placeholder="Enter Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                required
              />
            </div>

            {/* Cover Letter / Message */}
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="message">
                Cover Letter / Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about yourself and why you're a great fit for this role."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Resume Upload */}
            <div className="mb-6">
              <label className="block text-white mb-2" htmlFor="resume">
                Upload Your Resume (PDF, Word, or Image)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="w-full px-4 py-2 rounded-md text-white"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-700 text-white font-medium text-lg rounded-md hover:bg-blue-600"
              >
                Submit Application
              </button>
            </div>
          </form>

          {/* Job Cards Section */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {jobCards.map((job, index) => (
              <div
                key={index}
                className="bg-glass p-6 rounded-md shadow-lg text-white flex flex-col justify-between"
              >
                <h4 className="text-xl font-semibold text-start">
                  {job.title}
                </h4>
                <p className="mt-2 text-xs text-start">{job.description}</p>
                <button className="mt-8 px-8 py-2 bg-blue-700 rounded-md hover:bg-blue-600 transition duration-300 text-xs mr-auto">
                Apply Now</button>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <div
        className="max-w-7xl mx-auto lg:px-20 px-10 py-10"
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
    </LayoutWrapper>
  );
};

export default Page;
