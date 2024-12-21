import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import TeamSection from '@/components/TeamSection';


const Staff = () => {
  const teamMembers = [
    { name: 'Muhammad faizan akram', role: 'Country Head Pakistan', image: '/fai1.png' },
    { name: 'Muhammad Ali Raza', role: 'Project Head Pakistan', image: '/69.jpg' },
   
    
  ];

  return (
    <div className='flex flex-col md:h-[1400px] w-full  justify-center items-center text-center bg-slate-50'>
      <div className='mt-16 md:mt-0'>
        <h1 className='text-lg text-[#A580FC] font-bold'>
          TEAM & STAFF<br />
          <span className='text-5xl text-black font-semibold'>Elite Innovator</span>
        </h1>
      </div>
      <div className='flex flex-col md:flex-row gap-16 mt-8'>
        {teamMembers.map((member, index) => (
          <div key={index} className='relative group'>
            {/* Image */}
            <Image
              src={member.image}
              alt={member.name}
              width={300} // Adjust width as needed
              height={100} // Adjust height as needed
              className='h-[300px] rounded-2xl'
            />

            {/* Social Media Icons */}
            <div className='absolute top-5 mt-[20px] left-5 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <Link href="#" className='text-white bg-gray-800 p-2 rounded-full hover:text-blue-500'>
                <FaTwitter size={20} />
              </Link >
              <Link  href="#" className='text-white bg-gray-800 p-2 rounded-full hover:text-blue-600'>
                <FaFacebook size={20} />
              </Link >
              <Link  href="#" className='text-white bg-gray-800 p-2 rounded-full hover:text-pink-500'>
                <FaInstagram size={20} />
              </Link >
            </div>

            {/* Name and Role with Hover Background */}
            <div className='bg-gray-800 h-[130px] w-full flex flex-col justify-center items-center rounded-b-2xl transition-colors duration-300 group-hover:bg-[#A580FC]'>
              <h1 className='pt-2 text-white text-2xl font-bold Gilroy-bold'>{member.name}</h1>
              <h4 className='pt-3 text-white text-lg Gilroy-bold'>{member.role}</h4>
            </div>
          </div>
        ))}
      </div>
      <TeamSection/>
   
    </div>
  );
};

export default Staff; 