"use client"
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const TransformingBusiness = () => {
  const stats = [
    { value: 2, description: "Years of continual excellence" },
    { value: 150, description: "Change makers driving revolution" },
    { value: 10, description: "Countries with our presence and clientele" },
    { value: 28, description: "Active clients across the globe" },
  ];

  const Counter = ({ to }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" }); // Trigger near viewport

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const increment = Math.ceil(to / 50);
        const interval = setInterval(() => {
          start += increment;
          if (start >= to) {
            setCount(to);
            clearInterval(interval);
          } else {
            setCount(start);
          }
        }, 50);

        return () => clearInterval(interval);
      }
    }, [isInView, to]);

    return (
      <h2 ref={ref} className="text-4xl font-semibold text-white">
        {count}+
      </h2>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-card rounded-lg shadow-lg p-6">
        <h1 className="text-4xl text-white text-center mt-10">
          Transforming{" "}
          <span style={{ color: "#0084ff" }} className="font-bold">
            Businesses
          </span>
          <br />
          with Intelligent Solutions
        </h1>
        <p className="mt-2 text-gray-500 text-center text-md">
          Combining technology and strategic expertise to create solutions that
          drive meaningful change.
        </p>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-lg p-4 shadow-md text-center"
            >
              <Counter to={stat.value} />
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransformingBusiness;
