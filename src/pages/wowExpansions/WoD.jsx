import React from 'react'
import Sidebar from '../../components/Sidebar'

const WoD = () => {
  return (
    <div>
    <div className="wod-bg w-full h-[100vh] absolute bg-blend-overlay">
    <Sidebar />
    <div className='absolute right-0 p-4 text-center sidebar slide-in-right'>
    <h1 className="text-3xl">Expansion Updates</h1>
    <p className='my-2 text-lg'>6th Expansion of Wow</p>
      <p className='my-2 text-lg'>Release Date - December 2014</p>
        <p className='my-2 text-lg'>Increased Max Level from 90 to 100</p>
        <p className='my-2 text-lg'>Added New Zone: Draenor</p>
        <p className='my-2 text-lg'>Add New PVP Zone: Ashran</p>
        <p className='my-2 text-lg'>Added New Feature: Garrisons</p>
        <p className='my-2 text-lg'>New Raiding Difficulty: Mythic</p>
        <p className='my-2 text-lg'>Added 8 New Dungeons</p>
        
      </div>
    </div>
  </div>
  )
}

export default WoD