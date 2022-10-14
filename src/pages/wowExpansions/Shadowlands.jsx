import React from 'react'
import Sidebar from '../../components/Sidebar'

const Shadowlands = () => {
  return (
    <div>
    <div className="shadowlands-bg w-full h-[100vh] absolute bg-blend-overlay">
    <Sidebar />
    
    <div className='absolute right-0 p-4 text-center sidebar slide-in-right'>
    <h1 className="text-3xl">Expansion Updates</h1>
    <p className='my-2 text-lg'> 8th Expansion of Wow</p>
      <p className='my-2 text-lg'>Release Date - November 2020</p>
      <p className='my-2 text-lg'>8th Expansion of Wow</p>
        <p className='my-2 text-lg'>Decreased Level to 60</p>
        <p className='my-2 text-lg'>Added New Zones: Bastion, Ardenweald, Revendreth, Maldraxxus, The Maw</p>
        <p className='my-2 text-lg'>Added Features: Covenants</p>
        
      </div>
  </div>
  </div>
  )
}

export default Shadowlands