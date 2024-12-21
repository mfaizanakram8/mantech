'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const creators = [
    {
      name: 'Zeeshan',
      imageSrc: '/alif1.png', 
      quote: '“Education is a journey that helps us grow, explore, and achieve our full potential.”',
      linkedin: 'https://www.linkedin.com',
      buttonColor: 'bg-[#A580FC]',
    },
    {
      name: 'Jahanzaib Tayyab',
      imageSrc: '/alif.png',
      quote: '“Learning opens doors to new opportunities and allows us to make a difference in the world.”',
      linkedin: 'https://www.linkedin.com',
      buttonColor: 'bg-[#A580FC]',
    },
  
    {
      name: 'Mubbara Naz',
      imageSrc: '/alif3.png',
      quote: '“True education draws out the best in each individual, creating paths for lifelong learning.”',
      linkedin: 'https://www.linkedin.com',
      buttonColor: 'bg-[#A580FC]',
    },
  ];
  
const TeamSection = () => {
  return (
    <div className="py-16" id="team_section">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-bold mb-12">Guiding Minds Behind the <span className='text-[#A580FC]'>Learning</span> </h2>

      {/* Card Container */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {creators.map((creator, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 w-72 md:w-80">
            {/* Profile Image with Hover Effect */}
            <div className="flex justify-center mb-4">
              <div className="overflow-hidden rounded-full transition-transform duration-300 hover:scale-150 hover:shadow-lg">
                <Image
                  src={creator.imageSrc}
                  alt={`${creator.name} Image`}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-center text-xl font-semibold mb-2">{creator.name}</h3>

            {/* Quote */}
            <p className="text-center text-gray-600 mb-4 italic">
              {creator.quote}
            </p>

            {/* Follow Button */}
            <div className="flex justify-center">
              <Link href={creator.linkedin} target="_blank" rel="noopener">
                <button className={`px-4 py-2 rounded text-white font-medium ${creator.buttonColor}`}>
                  Follow +
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
