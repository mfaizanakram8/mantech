'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonialPages = [
  [
    {
      name: "Innovation",
      imageUrl: "/favicon.png",
      text: "We inspire innovation by equipping learners with resources and guidance to transform unique ideas into reality.",
      highlight: false,
    },
    {
      name: "Empowerment",
      imageUrl: "/favicon.png",
      text: "Our mission empowers individuals to grow, achieve, and pursue endless possibilities through dedicated support and education.",
      highlight: true,
    },
    {
      name: "Global Reach",
      imageUrl: "/favicon.png",
      text: "Connecting learners globally, we create a vibrant community that thrives on shared knowledge and insight.",
      highlight: false,
    },
  ],
  [
    {
      name: "Collaboration",
      imageUrl: "/favicon.png",
      text: "We foster collaboration, building communities where learners and mentors unite to drive progress and innovation forward.",
      highlight: false,
    },
    {
      name: "Excellence",
      imageUrl: "/favicon.png",
      text: "With a commitment to excellence, we deliver a high-quality learning experience for all students.",
      highlight: true,
    },
    {
      name: "Continuous Learning",
      imageUrl: "/favicon.png",
      text: "Championing a spirit of lifelong learning, we stay adaptable in our fast-evolving world together.",
      highlight: false,
    },
  ],
  [
    {
      name: "Creativity",
      imageUrl: "/favicon.png",
      text: "We nurture creativity by encouraging learners to explore beyond conventions and embrace imaginative new perspectives.",
      highlight: false,
    },
    {
      name: "Integrity",
      imageUrl: "/favicon.png",
      text: "Integrity forms our foundation, ensuring a trustworthy and respectful environment for learners and mentors alike.",
      highlight: true,
    },
    {
      name: "Vision ",
      imageUrl: "/favicon.png",
      text: "Our vision shapes tomorrow's learning by adapting to the evolving needs of society today.",
      highlight: false,
    },
  ],
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % testimonialPages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePageChange = (index:number) => {
    setCurrentPage(index);
  };

  return (
    <section className="py-12 bg-gray-100 flex flex-col items-center justify-center">
      {/* Centered Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        Our Dreams
      </h2>

      <div className="flex items-center justify-center w-full">
        {/* Left side - Image */}
        <div className="w-1/2 ml-20">
          <Image
            src="/lo.png"
            alt="Side Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Cards */}
        <div className="w-1/2 flex flex-col items-center justify-center space-y-6 mr-32">
          <div className="flex flex-col space-y-6">
            {testimonialPages[currentPage].map((testimonial, index) => (
              <div
                key={index}
                className={`group relative w-full p-6 pt-16 rounded-lg shadow-lg transition-colors duration-300 animate-slideUp ${
                  testimonial.highlight
                    ? "bg-white text-black hover:bg-[#A580FC] hover:text-white"
                    : "bg-white text-gray-900 hover:bg-[#A580FC] hover:text-white"
                }`}
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                  />
                </div>
                <div className="text-center mt-12">
                  <h4 className="font-bold text-xl sm:text-2xl md:text-3xl">
                    {testimonial.name.toUpperCase()}
                  </h4>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-center mt-4">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonialPages.map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`h-2 w-6 rounded-full transition-colors duration-300 ${
                  currentPage === index ? "bg-[#A580FC]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial page ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
