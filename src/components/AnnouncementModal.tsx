import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Announcement {
  title: string;
  description: string;
  link: string;
}

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
  announcements: Announcement[]; // Array of announcements
}



const AnnouncementModal: FC<AnnouncementModalProps> = ({ isOpen, onClose, announcements }) => {
  if (!isOpen) return null;


 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Announcements</h2>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
              <Image src="/favicon.png" alt="Announcement" width={300} height={300} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-medium">{announcement.title}</h3>
                <p className="text-sm text-gray-600">{announcement.description}</p>
                <Link href={announcement.link} className="text-blue-500 hover:underline">Read More</Link>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-[#A580FC] text-white px-4 py-2 rounded-lg w-full hover:bg-purple-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AnnouncementModal;
