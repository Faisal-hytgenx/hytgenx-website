"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const videos = [
  {
    video: "/background/slider-video-2.mp4",
    title: "Innovating with AI for a Smarter Future",
    description:
      "AI is reshaping industries—leverage our expertise to stay ahead. Let’s build a smarter, more connected world together.",
    link: "/services",
    buttonText: "Explore Services",
    overlayOpacity:"60%"
  },
  {
    video: "/background/slider-video-1.mp4",
    title: "Empowering Tomorrow with Cutting-Edge AI Solutions Today",
    description:
      "Transform your business with AI-driven innovations. Partner with hytGenX for intelligent solutions that inspire growth and success.",
    link: "/contact",
    buttonText: "Get in Touch",
    overlayOpacity:"50%"

  },
];

const MainSlider = () => {
  const swiperRef = useRef(null);
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.allowTouchMove = false; // Disable manual swiping
    }

    playVideo(0);
  }, []);

  const playVideo = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].currentTime = 0;
      videoRefs.current[index].play();
    }
  };

  const handleVideoEnd = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      if (swiper.isEnd) {
        swiper.slideTo(0);
        setCurrentIndex(0);
        playVideo(0);
      } else {
        swiper.slideNext();
        setCurrentIndex((prev) => prev + 1);
        playVideo(currentIndex + 1);
      }
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={0}
      slidesPerView={1}
      loop={false}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      onSlideChange={(swiper) => {
        setCurrentIndex(swiper.activeIndex);
        playVideo(swiper.activeIndex);
      }}
      style={{ height: "100vh" }}
    >
      {videos.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full flex justify-center items-center">
          <div
              className="absolute inset-0 bg-black z-10"
              style={{ opacity: slide.overlayOpacity }}
            ></div>            <video
              ref={(el) => (videoRefs.current[index] = el)}
              muted
              playsInline
              className="absolute w-full h-full object-cover"
              onEnded={handleVideoEnd}
            >
              <source src={slide.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
            className="max-w-7xl z-20 text-white px-6 sm:px-10 lg:px-20 w-full"
          >
            <h2 className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl 2xl:text-5xl font-bold">
              Empowering Tomorrow with <br />
              Cutting-Edge <span className="text-blue-700">
                AI Solutions
              </span>{" "}
              Today
            </h2>
            <p className="text-sm sm:text-md md:text-lg mt-2 hidden sm:block">
              Transform your business with AI-driven innovations. Partner with
              hytGenX for <br /> intelligent solutions that inspire growth and
              success.
            </p>
            <button className="mt-4 px-6 sm:px-4 py-2 bg-white text-black rounded-md hover:bg-blue-700 hover:text-white text-xs">
              <Link href={"/contact"}>Get in Touch</Link>
            </button>
          
          </div></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;
