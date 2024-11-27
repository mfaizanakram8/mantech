'use client';
import React, { useState, useEffect } from "react";
import AnnouncementModal from "./AnnouncementModal";
import Link from 'next/link';

const NewsTicker = () => {
  const [isAnnouncementOpen, setIsAnnouncementOpen] = useState(false);


  useEffect(() => {
    setIsAnnouncementOpen(true);
  }, []);

  const openAnnouncement = () => {
    setIsAnnouncementOpen(true);
  };

  const closeAnnouncement = () => {
    setIsAnnouncementOpen(false);
  };

  const announcements = [
    {
      title: "Launch of New Course",
      description: "We're excited to announce our new course lineup for 2024!",
      image: "/favicon.png", 
      link: "/new-courses",
    },
    {
      title: "Scholarships Available",
      description: "Apply for our coding scholarships and start your learning journey.",
      image: "/favicon.png",
      link: "/scholarships",
    },
  ];

  return (
    <div className="flex items-center bg-[#A580FC] py-2">
    
      <button
        onClick={openAnnouncement}
        className="font-semibold mr-4 ml-4"
      >
        Latest Announcement📢:
      </button>
      
      {/* News Ticker */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee space-x-10">
          <Link href="#" className="text-white hover:underline">
            NEW badge FEP GENAI 5.0.2
          </Link>
          <Link href="#" className="text-white hover:underline">
            Another Important Announcement
          </Link>
          <Link href="#" className="text-white hover:underline">
            New Vacancy Alert
          </Link>
          <Link href="#" className="text-white hover:underline">
            Upcoming Exam Schedule
          </Link>
       
        </div>
      </div>

    
      <AnnouncementModal 
        isOpen={isAnnouncementOpen} 
        onClose={closeAnnouncement} 
        announcements={announcements} 
      />
    </div>
  );
};

export default NewsTicker;
