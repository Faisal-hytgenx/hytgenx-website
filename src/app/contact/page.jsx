"use client";

import LayoutWrapper from "@/Components/Layout/LayoutWrapper";
import { setLazyProp } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";

const page = () => {
  const [divHeight, setDivHeight] = useState("1600px");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+92");

  useEffect(() => {
    const updateHeight = () => {
      setDivHeight(window.innerWidth < 962 ? "2000px" : "1400px");
    };

    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    description: "",
    attachment: null,
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file attachment change
  // const handleFileChange = (e) => {
  //   const { files } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     attachment: files[0],
  //   }));
  // };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      companyName,
      phoneNumber,
      description,
    };

    console.log("form data", formData);

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      alert("Email Send successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setCompanyName("");
      setPhoneNumber("");
      setDescription("");
      setLoading(false);
    } catch (error) {
      alert("Failed to submit the form. Please try again.");
    }
  };

  const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+92", country: "Pakistan" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+7", country: "Russia" },
    { code: "+55", country: "Brazil" },
    { code: "+27", country: "South Africa" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+971", country: "UAE" },
    { code: "+20", country: "Egypt" },
    { code: "+62", country: "Indonesia" },
    { code: "+234", country: "Nigeria" },
    { code: "+63", country: "Philippines" },
    { code: "+31", country: "Netherlands" },
    { code: "+41", country: "Switzerland" },
    { code: "+46", country: "Sweden" },
    { code: "+47", country: "Norway" },
    { code: "+358", country: "Finland" },
    { code: "+32", country: "Belgium" },
    { code: "+43", country: "Austria" },
    { code: "+351", country: "Portugal" },
    { code: "+45", country: "Denmark" },
    { code: "+90", country: "Turkey" },
  ];

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
        <div className="absolute top-[1150px] right-[2%]">
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
          <span className="text-blue-700 p-4">Contact Us</span>
          <div className="w-full px-10 lg:px-20 lg:w-[70%] text-center">
            <h2 className="text-5xl text-white mb-6">
              💬 How can we{" "}
              <span className="text-blue-700 font-bold">Help?</span>
            </h2>
            <p className="text-gray-300 text-sm">
              At hytGenX, we’re dedicated to providing you with the best
              solutions for your business needs.
              <br /> Whether you have questions about our services, want to
              discuss a project, or need support, we’re just a message or a
              phone call away!
            </p>
          </div>

          <div className="w-[100%] max-w-3xl bg-black p-8 rounded-lg shadow-lg mt-12 z-40">
            {/* Calendly Inline Widget */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-xs mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs"
                    placeholder="Enter First Name..."
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-xs mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs"
                    placeholder="Enter Last Name..."
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-xs mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-xs mb-2">
                    Phone Number
                  </label>
                  <div className="flex">
                    {/* Country Code Dropdown */}
                    <select
                      className="p-3 bg-gray-700 text-white rounded-l-md focus:outline-none text-xs"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.country} ({country.code})
                        </option>
                      ))}
                    </select>

                    {/* Phone Number Input */}
                    <input
                      type="text"
                      className="w-full p-3 bg-gray-700 text-white rounded-r-md focus:outline-none text-xs"
                      placeholder="Enter Phone Number..."
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-white text-xs mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs"
                  placeholder="Enter Company Name..."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-white text-xs mb-2">
                  Description
                </label>
                <textarea
                  rows="4"
                  className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none text-xs"
                  placeholder="Enter Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full p-3 bg-blue-700 rounded-md hover:bg-blue-800 transition text-white font-bold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          {/* <div className="flex justify-center items-center">
            <h1 className="text-gray-500 text-center w-full xl:text-[13rem] md:text-[8rem] opacity-20">
              {" "}
              CONTACT US
            </h1>
          </div> */}
          <div
            className="relative mx-auto lg:px-20 px-10"
            style={{ height: "1000px" }}
          >
            <div className="absolute bottom-0 w-full opacity-70">
              <img
                src="/background/effects/ellipse.png"
                alt="Bottom Right Ellipse"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-glass-no-border rounded-lg px-8 py-12 text-center w-full h-full flex flex-col justify-center items-center border border-transparent hover:border-[#fa9f17] transition-all duration-300">
                  <div className="flex justify-center items-center text-6xl mb-4">
                    <img
                      src="/background/contact-us/phone.png"
                      alt="phone-logo"
                    />
                  </div>
                  <h2 className="text-2xl text-white mb-2 break-words">
                    +1-206-665-5160
                  </h2>
                  <p className="text-sm text-gray-300 break-words">
                    Phone call
                  </p>
                </div>

                {/* Card 2 - Email (Blue Border on Hover) */}
                <div className="bg-glass-no-border rounded-lg px-8 py-12 text-center w-full h-full flex flex-col justify-center items-center border border-transparent hover:border-green-500 transition-all duration-300">
                  <div className="flex justify-center items-center text-6xl mb-4">
                    <img
                      src="/background/contact-us/contact.png"
                      alt="contact-logo"
                    />
                  </div>
                  <h2 className="text-2xl text-white mb-2 break-words">
                    business@hytgenx.com
                  </h2>
                  <p className="text-sm text-gray-300 break-words">
                    Quick chat
                  </p>
                </div>

                {/* Card 3 - Location (Red Border on Hover) */}
                <div className="bg-glass-no-border rounded-lg px-8 py-12 text-center w-full h-full flex flex-col justify-center items-center border border-transparent hover:border-[#056fd2] transition-all duration-300">
                  <div className="flex justify-center items-center text-6xl mb-4">
                    <img
                      src="/background/contact-us/location.png"
                      alt="location-logo"
                    />
                  </div>
                  <h2 className="text-2xl text-white mb-2 break-words">
                    522 W Riverside Ave <br /> Spokane, WA, 99201
                  </h2>
                  <p className="text-sm text-gray-300 break-words">
                    Physical Address
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default page;
