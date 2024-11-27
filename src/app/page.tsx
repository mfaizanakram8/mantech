import JobAchievementSection from '@/components/achievements'
import HeroSection from '@/components/HeroSection'
import MissionSection from '@/components/MissionSection'
import ServiceSwipe from '@/components/ServiceSwipe'
import NewBadge from '@/components/NewBadge'
import StatsSection from '@/components/StatsSection'

import React from 'react'


const page = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <NewBadge/>
      <ServiceSwipe/>
      <JobAchievementSection/>
   
      <MissionSection/>
   
    </div>
  )
}

export default page
