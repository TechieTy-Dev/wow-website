import React from 'react'
import Sidebar from '../../components/Sidebar'

const Cata = () => {
  return (
    <div>
    <div className="cata-bg w-full h-[100vh] absolute bg-blend-overlay">
    <Sidebar />
      <div className='absolute right-0 p-4 text-center sidebar slide-in-right'>
      <h1 className="text-3xl">Expansion Updates</h1>
      <p className='my-2 text-lg'> 4th Expansion of Wow</p>
        <p className='my-2 text-lg'>Release Date - December 2010</p>
       
        <p className='my-2 text-lg'>Increased Max Level from 80 to 85</p>
        <p className='my-2 text-lg'>Added New Races: Worgen for Alliance - Goblins for Horde</p>
        <p className='my-2 text-lg'>New Talent System</p>
        <p className='my-2 text-lg'>Changes to Stormwind and Orgirmmar</p>
        <p className='my-2 text-lg'>New Secondary Skill: Archaeology</p>
        <p className='my-2 text-lg'>New Zones added to Kalimdor and Eastern Kingdoms: Mount Hyjal, Twilight Highlands, Uldum, Deepholm, Vashj'ir</p>
        
      </div>
  </div>
  </div>
  )
}

export default Cata