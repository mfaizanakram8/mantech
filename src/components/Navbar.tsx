"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full shadow">
      {/* Main Navbar */}
      <div className="flex justify-between items-center bg-white h-[80px] px-4 md:px-10">
        {/* Logo */}
        <div className="ml-2 md:ml-5 flex items-center space-x-1">
          <Image src="/HO1.png" alt="image" height={250} width={200} />
        </div>

        {/* Button and Links */}
        <div className="hidden md:flex items-center space-x-6">
          {/* "Announcement" Button */}
          <Link
            href={"#"}
            className="bg-[#A580FC] text-white px-4 py-2 rounded-md font-semibold"
          >
            FEP5.0.1
          </Link>

          {/* Links */}
          <Link
            href="/About"
            className="text-black font-medium hover:text-gray-600"
          >
            About Us
          </Link>
          <Link
            href="/Courses"
            className="text-black font-medium hover:text-gray-600"
          >
            New Courses
          </Link>

       
          <Link href="/apply-now">
            <button className="border border-red-600 text-red-500 px-6 py-2 hover:bg-red-600 hover:text-white rounded-md font-semibold text-lg">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} aria-label="Open menu">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 bg-white w-64 h-full shadow-lg">
            {/* Close Icon */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={toggleSidebar} aria-label="Close menu">
                <FaTimes size={24} />
              </button>
            </div>

            {/* Sidebar Links */}
            <div className="flex flex-col p-4 space-y-4 text-center">
              <Link
                href="#"
                className="bg-[#A580FC] text-white px-4 py-2 rounded-md font-semibold"
              >
                FEP5.0.1
              </Link>
              <Link href="/About" className="text-lg">
                About Us
              </Link>
              <Link href="/new-courses" className="text-lg">
                New Courses
              </Link>
              <Link
                href="/apply-now"
                className="border border-red-600 text-red-500 px-6 py-2 hover:bg-red-600 hover:text-white rounded-md font-semibold text-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
