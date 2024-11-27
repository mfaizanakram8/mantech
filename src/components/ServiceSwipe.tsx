import Image from 'next/image';
import Link from 'next/link';

const ServiceSwipe = () => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-red-700  bg-cover bg-fixed p-12 bg-[url('/bg.jpg')]" >
      <div className="w-full text-center">
        <p className="text-5xl py-5 text-white">Services</p>
      </div>

      <Link href="/subjects/computer_courses">
        <div className="flex flex-col items-center justify-center w-72 h-48 m-5 p-5 bg-white bg-opacity-10 rounded-xl shadow-lg transition-transform duration-300 ease-in-out cursor-pointer text-center text-white hover:translate-y-[-10px] hover:shadow-2xl hover:bg-opacity-15">
          <Image src="/HO1.PNG" alt="Computer Courses" width={100} height={100} />
          <p className="mt-3 text-lg font-medium">UMS</p>
        </div>
      </Link>

      <Link href="/Courses">
        <div className="flex flex-col items-center justify-center w-72 h-48 m-5 p-5 bg-white bg-opacity-10 rounded-xl shadow-lg transition-transform duration-300 ease-in-out cursor-pointer text-center text-white hover:translate-y-[-10px] hover:shadow-2xl hover:bg-opacity-15">
          <Image src="/HO1.PNG" alt="Brainbooster" width={100} height={100} />
          <p className="mt-3 text-lg font-medium">Our Courses</p>
        </div>
      </Link>

      <Link href="/Dreams">
        <div className="flex flex-col items-center justify-center w-72 h-48 m-5 p-5 bg-white bg-opacity-10 rounded-xl shadow-lg transition-transform duration-300 ease-in-out cursor-pointer text-center text-white hover:translate-y-[-10px] hover:shadow-2xl hover:bg-opacity-15">
          <Image src="/HO1.PNG" alt="Online Tutorials" width={100} height={100} />
          <p className="mt-3 text-lg font-medium">Our Dreams</p>
        </div>
      </Link>

      <Link href="/About">
        <div className="flex flex-col items-center justify-center w-72 h-48 m-5 p-5 bg-white bg-opacity-10 rounded-xl shadow-lg transition-transform duration-300 ease-in-out cursor-pointer text-center text-white hover:translate-y-[-10px] hover:shadow-2xl hover:bg-opacity-15">
          <Image src="/HO1.PNG" alt="Next.js" width={100} height={100} />
          <p className="mt-3 text-lg font-medium">About Us</p>
        </div>
      </Link>

      <Link href="#makeitfull">
        <div className="flex flex-col items-center justify-center w-72 h-48 m-5 p-5 bg-white bg-opacity-10 rounded-xl shadow-lg transition-transform duration-300 ease-in-out cursor-pointer text-center text-white hover:translate-y-[-10px] hover:shadow-2xl hover:bg-opacity-15">
          <Image src="/HO1.PNG" alt="Discussion" width={100} height={100} />
          <p className="mt-3 text-lg font-medium">Contact Us</p>
        </div>
      </Link>

    
    </div>
  );
};

export default ServiceSwipe;