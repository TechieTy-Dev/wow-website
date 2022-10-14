import React from 'react'
import Sidebar from '../../components/Sidebar'

const WoTLK = () => {
  return (
    <div>
    <div className="wotlk-bg w-full h-[100vh] absolute bg-blend-overlay">
    <Sidebar />
    
    <div className='absolute right-0 p-4 text-center sidebar slide-in-right'>
    <h1 className="text-3xl">Expansion Updates</h1>
    <p className='my-2 text-lg'>3rd Expansion of Wow</p>
      <p className='my-2 text-lg'>Release Date - November 2008</p>
        <p className='my-2 text-lg'>Increased Max Level from 70 to 80</p>
        <p className='my-2 text-lg'>Added New Class: Death Knights</p>
        <p className='my-2 text-lg'>Death Knights start at level 55</p>
        <p className='my-2 text-lg'>Added New Zone: Northrend</p>
        <p className='my-2 text-lg'>Added PVP Zone: WinterSpring</p>
        
      </div>
  </div>
  </div>
  )
}

export default WoTLK