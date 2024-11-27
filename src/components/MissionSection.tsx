import React from 'react'
import Image from 'next/image'

const MissionSection = () => {
  return (
    <div className="flex flex-col items-center my-10">
    <h2 className="text-2xl font-bold text-center mb-6">ON A MISSION TO TEACH <span className='text-[#A580FC]'>MILLIONS</span></h2>
    <div className="w-full max-w-4xl">
      <Image 
        src="/wh.png" 
        alt="Group holding trophies" 
        className="w-full rounded-lg"
        width={900}
        height={400}
      />
    </div>
  </div>
  )
}

export default MissionSection
