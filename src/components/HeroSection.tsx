'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    const rotatingTexts = [
      "AI Generative developer", 
   
      "Web developer", 
      "Next.js developer", 
      "Data Science developer", 
      "Cyber Security Expert"
    ];
    const typingSpeed = 100; // Adjust the speed of typing (in milliseconds)
    let typingTimeout;

    if (displayedText.length < rotatingTexts[textIndex].length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(rotatingTexts[textIndex].slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayedText(""); // Reset displayedText to start typing the next text
        setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
      }, 2000); // Pause before moving to the next word

      return () => clearTimeout(pauseTimeout);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, textIndex]); // Dependencies only on displayedText and textIndex

  return (
    <div className="bg-gradient-to-tr from-white via-white to-[#DBCCFD] w-full min-h-[758px]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side - Heading, Text, and Button */}
        <div className="flex items-center w-full md:w-1/2 p-8">
          <div className="ml-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              We’re Empowering the Top 1% of Pakistan’s{" "} <br />
              <span className="text-[#A580FC]">{displayedText}</span>{" "}
            </h1>
            <p className="text-sm md:text-lg mb-8 md:mb-14">
              Join us and become part of an exclusive network where innovation, knowledge, and cutting-edge skills converge. Lead Pakistan’s transformation into a global AI hub, where ideas and technology weave together to create the future.
            </p>
            <Link
              href="#"
              className="mr-8 border border-transparent px-4 md:px-16 rounded-xl py-2 md:py-3 text-xl md:text-lg bg-[#A580FC] text-sky-100 w-40 md:w-60 h-10 md:h-14"
            >
              <span className="text-yellow-100">Apply</span> now
            </Link>
          </div>
        </div>

        {/* Right Side - Main Image */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center mt-12 md:mt-24">
          <Image src="/hero0.png" alt="Main image" width={422} height={422} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
