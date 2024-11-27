'use client';

import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { FaUsers, FaEye, FaLink } from 'react-icons/fa';

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" bg-cover bg-center bg-[url('/uo.png')] text-white py-12 flex flex-col items-center"
    >
      <h2 className="text-2xl font-bold mb-8">
        PAKISTAN MOST LOVED CODING COMMUNITY ❤️
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-16">
        {/* Happy Learners */}
        <div className="flex flex-col items-center mb-8 sm:mb-0">
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            <FaUsers className="text-4xl" />
            {startCounting ? <CountUp start={0} end={10000} duration={2.5} /> : 0}+ 
          </h3>
          <p className="mt-1 text-sm uppercase">Happy Learners</p>
        </div>

        {/* Monthly Views */}
        <div className="flex flex-col items-center mx-28 mb-8 sm:mb-0">
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            <FaEye className="text-4xl" />
            {startCounting ? <CountUp start={0} end={1} duration={2.5} decimals={2} /> : '0.00'} CRORE+
          </h3>
          <p className="mt-1 text-sm uppercase">Monthly Engagements</p>
        </div>

        {/* New Monthly Subscribers */}
        <div className="flex flex-col items-center mb-8 sm:mb-0">
          <h3 className="text-3xl font-semibold flex items-center gap-2">
            <FaLink className="text-4xl" />
            {startCounting ? <CountUp start={0} end={500} duration={2.5} /> : 0}+
          </h3>
          <p className="mt-1 text-sm uppercase">Monthly New Joiners</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
