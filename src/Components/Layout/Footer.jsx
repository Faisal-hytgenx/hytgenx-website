import Image from "next/image";
import React from "react";
import Link from "next/link"; // Importing Next.js Link component

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto lg:px-20 px-10">
        {/* Newsletter Section */}
        <div className="text-center mb-6 flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-lg font-semibold mb-4 sm:mb-0">
            Join our newsletter to keep up to date with us!
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-end sm:ml-auto">
            <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
              <img
                src="/icons/person.svg" // Replace with your actual icon path
                alt="Person Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
              />
              <input
                type="email"
                placeholder=" Enter your email" // Extra spaces to push placeholder right
                className="bg-black border border-gray-500 rounded-md p-2 pl-10 w-full text-white font-heading text-xs py-3 placeholder-gray-600"
              />
            </div>

            <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-6 rounded-md sm:ml-4">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start mb-6 py-10"
          style={{
            borderTop: "1px solid #525252",
            borderBottom: "1px solid #525252",
          }}
        >
          {/* Left Side: hytGenX Logo and Description */}
          <div className="flex flex-col mb-8 sm:mb-0 w-full sm:w-1/3 items-start">
            <img
              alt="Your Company"
              src="/logos/hytgenx-logo.png"
              className="h-5 w-auto"
            />
            <p className="text-gray-400 mt-4 text-xs">
              Choosing hytGenX means choosing innovation and a fresh <br />{" "}
              perspective in Artificial Intelligence Solutions.
            </p>
          </div>

          {/* Right Side: Footer Links */}
          <div className="md:w-2/5 flex flex-col sm:flex-row justify-between sm:justify-end gap-2 text-start">
            <div className="sm:w-1/3">
              <h3 className="font-semibold text-xs">Platform</h3>
              <ul className="mt-2 text-gray-400">
                <li>
                  <Link href="/about">
                    <span className="text-xs hover:text-blue-700">About</span>
                  </Link>
                </li>
                <li style={{ marginTop: "6px" }}>
                  <Link href="services/devops">
                    <span className="text-xs hover:text-blue-700">
                      Services
                    </span>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/">
                    <span className="text-xs hover:text-blue-700">Solutions</span>
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="sm:w-1/3">
              <h3 className="font-semibold text-xs">Company</h3>
              <ul className="mt-2 text-gray-400">
                {/* <li>
                  <Link href="/blog">
                    <span className="text-xs hover:text-blue-700">Blog</span>
                  </Link>
                </li> */}
                <li>
                  <Link href="/career">
                    <span className="text-xs hover:text-blue-700">Careers</span>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/blog">
                    <span className="text-xs hover:text-blue-700">News</span>
                  </Link>
                </li> */}
              </ul>
            </div>

            <div className="sm:w-1/3">
              <h3 className="font-semibold text-xs">Contact Us</h3>
              <ul className="mt-3 text-xs text-gray-400 space-y-4">
                <li
                  className="hover:text-blue-700"
                  style={{ textDecorationLine: "underline", marginTop: "6px" }}
                >
                  +1-206-665-5160
                </li>
                <li className="">
                  522 W RIVERSIDE AVE
                  <br />
                  Spokane, WA 99201
                </li>
                <li>
                  <Link href="mailto:business@hytgenx.com">
                    <span
                      className="text-xs text-gray-400 hover:text-blue-700"
                      style={{
                        textDecorationLine: "underline",
                        marginTop: "6px",
                      }}
                    >
                      business@hytgenx.com
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="flex justify-between items-center text-sm text-gray-400 mt-8">
          <div className="text-center">
            © Copyright 2025 hytGenX, All Rights Reserved
          </div>

          <div className="text-center mt-4 sm:mt-0 space-x-6">
            <Link href="#">
              <span
                className="text-xs text-muted hover:text-blue-700"
                style={{ marginRight: "18px" }}
              >
                Terms of Service
              </span>
            </Link>
            <Link href="#">
              <span className="text-xs text-muted hover:text-blue-700">
                Privacy Policy
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Simple Circular Radial Gradient Effect */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -100,
          width: "25rem", // Adjust size
          height: "25rem", // Adjust size
          background:
            "radial-gradient(circle, rgba(0, 132, 255, 0.1) 0%, rgba(0, 132, 255, 0) 70%)", // Smooth fade
          borderRadius: "50%",
          zIndex: 0,
        }}
      ></div>
    </footer>
  );
};

export default Footer;
