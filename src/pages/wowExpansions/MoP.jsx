import React from 'react'
import Sidebar from '../../components/Sidebar'

const MoP = () => {
  return (
    <div>
      <div className="mop-bg w-full h-[100vh] absolute bg-blend-overlay">
      <Sidebar />
      
      <div className='absolute right-0 p-4 text-center sidebar slide-in-right'>
      <h1 className="text-3xl">Expansion Updates</h1>
      <p className='my-2 text-lg'>5th Expansion of Wow</p>
        <p className='my-2 text-lg'>Release Date - September 2012</p>
        <p className='my-2 text-lg'>Increased Max Level from 85 to 90</p>
        <p className='my-2 text-lg'>Add New Race: Pandaren</p>
        <p className='my-2 text-lg'>Added New Class: Monks</p>
       
        <p className='my-2 text-lg'>Added New Zone: Pandaria</p>
        <p className='my-2 text-lg'>New Pet Battle Feature</p>
        <p className='my-2 text-lg'>New 3 player instance mode: Scenarios</p>
        
      </div>
    </div>
    </div>
  )
}

export default MoP