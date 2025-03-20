"use client";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jack",
      company: "LUCA CO.",
      feedback:
        "Worked with hytGenX on a React app—efficient, skilled, and easy to communicate with. Highly recommend!",
      image: "/images/client.png",
      stars: 5,
    },
    {
      id: 2,
      name: "Lisa",
      company: "OMEGA CORP.",
      feedback:
        "Great team! They deliver excellent work, adapt quickly, and communicate well. A pleasure to work with!",
      image: "/images/client.png",
      stars: 5,
    },
    {
      id: 3,
      name: "David",
      company: "ALPHA INC.",
      feedback:
        "hytGenX delivered a top-notch AI solution with precision and great communication. Highly recommend!",
      image: "/images/client.png",
      stars: 5,
    },
    {
      id: 4,
      name: "Mark",
      company: "BETA TECH.",
      feedback:
        "Highly skilled team! Took our project from concept to completion smoothly. Professional and reliable!",
      image: "/images/client.png",
      stars: 5,
    },
    {
      id: 5,
      name: "Emily",
      company: "GAMMA SOLUTIONS.",
      feedback:
        "hytGenX's AI solutions transformed our business. Super responsive and exceeded expectations!",
      image: "/images/client.png",
      stars: 5,
    },
  ];
  return (
    <section className="relative bg-black py-10 overflow-hidden">
      <div className="absolute bottom-40 -left-1 w-auto h-auto">
        <img
          src="/background/effects/box.png"
          alt="Bottom Left Ellipse"
          className="w-12 h-auto object-cover"
        />
      </div>
      <div className="absolute bottom-80 -left-40 w-auto h-auto">
        <img
          src="/background/effects/ellipse.png"
          alt="Bottom Left Ellipse"
          className="w-96 h-auto object-cover opacity-30"
        />
      </div>
      <div className="absolute bottom-0 -right-40 w-auto h-auto">
        <img
          src="/background/effects/ellipse.png"
          alt="Bottom Left Ellipse"
          className="w-96 h-auto object-cover opacity-30"
        />
      </div>
      <div className="max-w-7xl mx-auto lg:px-20 px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Heading Card */}
        <div className="text-white bg-black p-6 flex flex-col justify-between h-full">
          <span
            className="text-sm uppercase bg-blue-700 text-white py-1 px-3 rounded-lg"
            style={{ width: "7.5rem" }}
          >
            Testimonial
          </span>
          <h2 className="text-5xl mt-4">
            WHAT <span className="text-blue-700 font-bold">PEOPLE</span> SAY
            ABOUT US
          </h2>
          <div className="flex-grow"></div>{" "}
          {/* This pushes the paragraph to the bottom */}
          <p className="mt-2 text-gray-300">
            20+ companies trust us for their business growth.
          </p>
        </div>

        {/* Testimonial Cards */}
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-900 text-white px-6 py-16 min-h-[300px] shadow-lg flex flex-col"
            style={{ borderRadius: "20px" }}
          >
            {/* Stars */}
            <div className="flex mb-2">
              {Array.from({ length: testimonial.stars }).map((_, index) => (
                <span
                  key={index}
                  className="text-yellow-700 text-3xl hover:scale-110 transform transition-all duration-300"
                >
                  ★
                </span>
              ))}
            </div>

            {/* Feedback */}
            <p className="text-gray-200 text-lg mb-10">
              {testimonial.feedback}
            </p>
            {/* User Info */}
            <div className="flex items-center mt-auto">
              {/* <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-lg mr-4"
              /> */}
              <div>
                <p className="font-semibold text-2xl">{testimonial.name}</p>
                {/* <p className="text-md">{testimonial.company}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
