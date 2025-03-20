"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const toggleIndustries = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsIndustriesOpen(false);
  };

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);
    return () => window.removeEventListener("resize", checkWindowWidth);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > window.innerHeight * 0.5);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
      setIsServicesOpen(false);
      setIsIndustriesOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  // Service images mapping
  const serviceImages = {
    devops: {
      name: "DevOps",
      link: "/services/devops",
      image: "/background/servicesPage/devops-service.png",
    },
    "ai-development": {
      name: "AI Development",
      link: "/services/ai-development",
      image: "/background/servicesPage/ai-powered.png",
    },
    "mern-stack": {
      name: "MERN Stack",
      link: "/services/mern-stack",
      image: "/background/servicesPage/mern-service.png",
    },
    "machine-learning": {
      name: "Machine Learning",
      link: "/services/machine-learning",
      image: "/background/servicesPage/ml-service.png",
    },
    "python-django": {
      name: "Python Django",
      link: "/services/python-django",
      image: "/background/servicesPage/python-service.png",
    },
    "mobile-development": {
      name: "Mobile Development",
      link: "/services/mobile-development",
      image: "/background/servicesPage/mobile-service.png",
    },
    "cloud-services": {
      name: "Cloud Services",
      link: "/services/cloud-services",
      image: "/background/servicesPage/cloud-service.png",
    },
    "custom-development": {
      name: "Custom Development",
      link: "/services/custom-development",
      image: "/background/servicesPage/custom-service.png",
    },
  };

  const industryImages = {
    healthcare: {
      name: "Healthcare",
      link: "/industries/healthcare",
      image: "/background/servicesPage/industries.png",
      description:
        "Transforming healthcare with innovative digital solutions for patient care and management.",
    },
    education: {
      name: "Education",
      link: "/industries/education",
      image: "/background/servicesPage/header.png",
      description:
        "Empowering the future with e-learning, AI-powered education, and smart classroom solutions.",
    },
    "real-estate": {
      name: "Real Estate",
      link: "/industries/real-estate",
      image: "/background/servicesPage/real-estate-header.png",
      description:
        "Revolutionizing real estate with AI-driven property management and virtual tours.",
    },
    construction: {
      name: "Construction",
      link: "/industries/construction",
      image: "/background/servicesPage/construction-header.png",
      description:
        "Enhancing construction with cutting-edge software for project management and automation.",
    },
    retail: {
      name: "Retail",
      link: "/industries/retail",
      image: "/background/servicesPage/retail-header.png",
      description:
        "Driving sales with AI-powered e-commerce solutions, inventory management, and analytics.",
    },
    automotive: {
      name: "Automotive",
      link: "/industries/automotive",
      image: "/background/servicesPage/automotive-header.png",
      description:
        "Revolutionizing the automotive industry with IoT, smart vehicle tracking, and automation.",
    },
    "entertainment-media": {
      name: "Entertainment & Media",
      link: "/industries/entertainment-media",
      image: "/background/servicesPage/entertainment-header.png",
      description:
        "Creating next-gen entertainment experiences with streaming, gaming, and digital media innovations.",
    },
    telecommunication: {
      name: "Telecommunication",
      link: "/industries/telecommunication",
      image: "/background/servicesPage/telecommunication-header.png",
      description:
        "Optimizing network connectivity, AI-driven customer support, and 5G transformation.",
    },
    "finance-banking": {
      name: "Finance & Banking",
      link: "/industries/finance-banking",
      image: "/background/servicesPage/finance-header.png",
      description:
        "Transforming finance with secure digital banking, AI-powered risk analysis, and blockchain solutions.",
    },
  };

  const closeList = () => {
    setIsIndustriesOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    if (isServicesOpen || isIndustriesOpen) {
      document.addEventListener("click", closeList);
    }
    return () => {
      document.removeEventListener("click", closeList);
    };
  }, [isServicesOpen, isIndustriesOpen]);

  return (
    <motion.nav
      initial={{ y: 0, backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        y: isVisible ? 0 : "-100%",
        backgroundColor: isScrolled ? "rgba(0,0,0,1)" : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 w-full py-4 z-50 transition-transform"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-20">
        {/* Logo on the left */}
        <Link href="/">
          <img
            src="/logos/hytgenx-logo.png"
            alt="Logo"
            className="h-6 w-auto transition-all duration-300"
          />
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden md:flex space-x-6 text-white font-heading">
          {/* Services Dropdown - Clickable */}
          <div className="relative">
            {/* Services Button */}
            <button
              className="hover:text-gray-300 flex items-center gap-1"
              onClick={toggleServices}
            >
              Services
              <span
                className={`transform transition-transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              >
                <KeyboardArrowDownIcon />
              </span>
            </button>

            {/* Services Dropdown */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 bg-black rounded-md py-4 flex"
                  style={{ width: "450px", borderRadius: "20px" }}
                >
                  {/* Left Side: Image changes on hover */}
                  <motion.div
                    className="w-[40%] flex flex-col items-start justify-start p-4"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  >
                    <h3 className="text-white text-xs font-semibold text-start mb-4">
                      Service Preview
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Image
                        src={
                          hoveredService
                            ? hoveredService.image
                            : "/background/servicesPage/card4.png"
                        }
                        alt={
                          hoveredService
                            ? hoveredService.name
                            : "Default Service Image"
                        }
                        width={120}
                        height={80}
                        className="w-36 h-20 object-cover rounded-md"
                      />
                    </motion.div>
                    <p className="text-xs text-gray-400 mt-2">
                      {hoveredService
                        ? `Discover our top-notch ${hoveredService.name} services.`
                        : "Explore our various service offerings."}
                    </p>
                  </motion.div>

                  {/* Right Side: Service Links */}
                  <div className="w-[60%] p-4">
                    <div className="space-y-2 text-xs">
                      {Object.entries(serviceImages).map(([key, service]) => (
                        <Link
                          key={key}
                          href={service.link}
                          className="block text-sm hover:text-blue-700"
                          onMouseEnter={() => setHoveredService(service)}
                          onMouseLeave={() => setHoveredService(null)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative">
            {/* Industries Button */}
            <button
              className="hover:text-gray-300 flex items-center gap-1"
              onClick={toggleIndustries}
            >
              Industries
              <span
                className={`transform transition-transform ${
                  isIndustriesOpen ? "rotate-180" : ""
                }`}
              >
                <KeyboardArrowDownIcon />
              </span>
            </button>

            {/* Industries Dropdown */}
            <AnimatePresence>
              {isIndustriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 bg-black rounded-md py-4 shadow-lg flex"
                  style={{ width: "450px", borderRadius: "20px" }}
                >
                  {/* Left Side: Image changes on hover */}
                  <motion.div
                    className="w-[40%] flex flex-col items-start justify-start p-4"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  >
                    <h3 className="text-white text-xs font-semibold text-start mb-4">
                      Industry Preview
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <Image
                        src={
                          hoveredIndustry
                            ? hoveredIndustry.image
                            : "/background/servicesPage/industries.png"
                        }
                        alt={
                          hoveredIndustry
                            ? hoveredIndustry.name
                            : "Default Industry Image"
                        }
                        width={120}
                        height={80}
                        className="w-36 h-20 object-cover rounded-md"
                      />
                    </motion.div>
                    <p className="text-xs text-gray-400 mt-2">
                      {hoveredIndustry
                        ? `Discover how we serve the ${hoveredIndustry.name} sector.`
                        : "Explore the industries we specialize in."}
                    </p>
                  </motion.div>

                  {/* Right Side: Industry Links */}
                  <div className="w-[60%] p-4">
                    <div className="space-y-2 ">
                      {Object.entries(industryImages).map(([key, industry]) => (
                        <Link
                          key={key}
                          href={industry.link}
                          className="block text-sm hover:text-blue-700"
                          onMouseEnter={() => setHoveredIndustry(industry)}
                          onMouseLeave={() => setHoveredIndustry(null)}
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/portfolio" className="hover:text-gray-300">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/career" className="hover:text-gray-300">
            Career
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* "Book Free Consultation" Button */}
        <div className="md:block lg:block">
          {isLargeScreen && (
            <Link href="/schedule-meeting">
              <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-xs">
                Book a Free Consultation
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 px-10 bg-black text-white py-4 space-y-4"
          >
            <Link href="/" className="block">
              Home
            </Link>
            <Link href="/about" className="block">
              About
            </Link>

            {/* Services Dropdown - Mobile */}
            <div className="flex flex-col">
              <button
                className="flex justify-between w-full text-left"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <span
                  className={`transform transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <KeyboardArrowDownIcon />
                </span>
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 mt-2 space-y-2"
                  >
                    {Object.entries(serviceImages).map(([key, imageSrc]) => (
                      <Link
                        key={key}
                        href={`/services/${key}`}
                        className="block flex items-center gap-2"
                      >
                        {/* <Image
                          src={imageSrc}
                          alt={key}
                          width={20}
                          height={20}
                        /> */}
                        <span className="capitalize">
                          {key.replace("-", " ")}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex flex-col">
              <button
                className="flex justify-between w-full text-left"
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              >
                Industries
                <span
                  className={`transform transition-transform ${
                    isIndustriesOpen ? "rotate-180" : ""
                  }`}
                >
                  <KeyboardArrowDownIcon />
                </span>
              </button>
              <AnimatePresence>
                {isIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 mt-2 space-y-2"
                  >
                    {Object.entries(industryImages).map(([key, imageSrc]) => (
                      <Link
                        key={key}
                        href={`/industries/${key}`}
                        className="block flex items-center gap-2"
                      >
                        {/* <Image src={imageSrc} alt={key} width={20} height={20} /> */}
                        <span className="capitalize">
                          {key.replace("-", " ")}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/portfolio" className="block">
              Portfolio
            </Link>
            {/* <Link href="/blog" className="block">
              Blog
            </Link> */}
            <Link href="/contact" className="block">
              Contact
            </Link>

            {/* Mobile "Book Free Consultation" Button */}
            <div className="mt-4">
              <Link
                href="/consultation"
                className="block text-center bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
