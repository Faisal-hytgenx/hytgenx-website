"use client";
import React, { useEffect, useState, useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Marquee from "react-fast-marquee";
import { useInView } from "framer-motion";

const Counter = ({ to }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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
    <span ref={ref} className="text-blue-700">
      {count}+
    </span>
  );
};

const TrustedPartners = () => {
  const logos = [
    "/background/servicesPage/company-1.png",
    "/background/servicesPage/company-2.png",
    "/background/servicesPage/company-3.png",
    "/background/servicesPage/company-4.png",
    "/background/servicesPage/company-5.png",
    "/background/servicesPage/company-6.png",
    "/background/servicesPage/company-7.png",
  ];

  return (
    <section className="py-20 text-center max-w-7xl mx-auto px-10 lg:px-20">
      <p className="text-white text-4xl">
        Trusted by <Counter to={20} />{" "}
        <span className="text-blue-700">Companies</span> around the world
      </p>
      <div className="py-10 relative">
        <Marquee
          speed={50}
          gradient={true}
          gradientWidth={100}
          gradientColor={[0, 0, 0, 0]}
        >
          {logos.map((logo, index) => (
            <div key={index} className="mx-6">
              <img
                src={logo}
                alt="Brand Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TrustedPartners;
