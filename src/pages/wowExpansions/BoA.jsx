import React from 'react'
import Sidebar from '../../components/Sidebar'

const BoA = () => {
  return (
    
<div>
    <div className="boa-bg w-full h-[100vh] absolute bg-blend-overlay">
    <Sidebar />
    
    <div className='absolute right-0 p-4 text-center sidebar slide-in-right'>
    <h1 className="text-3xl">Expansion Updates</h1>
    <p className='my-2 text-lg'>7th Expansion of Wow</p>
      <p className='my-2 text-lg'>Release Date - August 2018</p>
      
        <p className='my-2 text-lg'>Increased Max Level from 110 to 120</p>
        <p className='my-2 text-lg'>New Added Zones: Kul Tiras & Zandalar</p>
        <p className='my-2 text-lg'>New Allied Horde Races:Nightborne, Highmountain Tauren,Mag'har Orcs, Zandalari, Vulpera</p>
        <p className='my-2 text-lg'>New Allied Alliance Races:Void Elves, Dark Iron Dwarves, Kul Tiran, Mechagnomes, Lightforged Draenei</p>
        
        <p className='my-2 text-lg'>New 3 player scenario: Expeditions</p>
        <p className='my-2 text-lg'>New PVE Feature: Warfront</p>
        
      </div>
  </div>
  </div>
  
  )
}

export default BoA