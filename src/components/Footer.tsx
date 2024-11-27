// components/Footer.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-start space-y-8 md:space-y-0 md:flex-nowrap px-5">
        
        {/* Logo and Slogan */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">
          <Image src="/HO1.png" alt=""  width={171} height={171}/>
          </h2>
          <p className="mt-2 text-gray-600">Where education meets real-world needs.</p>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">HELPFUL LINKS</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/courses"  className="text-[#A580FC] hover:underline">
             Courses
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy"  className="text-[#A580FC] hover:underline">
             Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/refund-policy"  className="text-[#A580FC] hover:underline">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="text-[#A580FC] hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-lg mb-4">GET IN TOUCH</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="mailto:support@mantech.pk" className="text-[#A580FC] hover:underline">AIGEN@support@mantech.pk</a>
            </li>
            <li>
              <a href="mailto:support@mantech.pk" className="text-[#A580FC] hover:underline">FEP@support@mantech.pk</a>
            </li>
            <li>
              <a href="mailto:support@mantech.pk" className="text-[#A580FC] hover:underline">+92 333 7414152</a>
            </li>
            <li>Support Team: 10am - 6pm</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">CONNECT WITH US</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitter</a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">YouTube</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instagram</a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500 text-sm">
        &copy; 2024 MANTECH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
