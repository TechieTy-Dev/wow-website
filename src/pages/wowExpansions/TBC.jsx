import React from 'react'
import Sidebar from '../../components/Sidebar';

const TBC = () => {
  return (
    <div>
      <div className="tbc-bg w-full h-[100vh] absolute bg-blend-overlay">
      <Sidebar />
      <div className='absolute right-0 p-4 text-center sidebar slide-in-right'>
      <h1 className="text-3xl">Expansion Updates</h1>
      <p className='my-2 text-lg'>2nd Expansion of Wow</p>
        <p className='my-2 text-lg'>Release Date - January 2007</p>
        <p className='my-2 text-lg'>Increased Max Level from 60 to 70</p>
        <p className='my-2 text-lg'>Two New Races in Draenei and Blood Elves</p>
        <p className='my-2 text-lg'>Added Shamans to Alliances</p>
        <p className='my-2 text-lg'>Added Paladins to Horde </p>
        <p className='my-2 text-lg'>Added New Zone: Outlands</p>
        <p className='my-2 text-lg'>New Battleground: Eye of the Storm</p>
        <p className='my-2 text-lg'>New Arena Structure: 2v2, 3v3, 5v5</p>
        
      </div>
      </div>
    </div>
  )
}

export default TBC