import React from 'react'
import Sidebar from '../../components/Sidebar'
const Legion = () => {
  return (
    <div>
    <div className="legion-bg w-full h-[100vh] absolute bg-blend-overlay">
    <Sidebar />
    
    <div className='absolute right-0 p-4 text-center sidebar slide-in-right'>
      <h1 className="text-3xl">Expansion Updates</h1>
      <p className='my-2 text-lg'>6th Expansion of WoW</p>
      <p className='my-2 text-lg'>Release Date - August 2016</p>
 
        <p className='my-2 text-lg'>Increased Max Level from 100 to 110</p>
        <p className='my-2 text-lg'>Added New Class: Demon Hunters</p>
        <p className='my-2 text-lg'>Added Artifact Weapons</p>
        <p className='my-2 text-lg'>Added New Feature: Order Halls</p>
        <p className='my-2 text-lg'>Added New Zone: Antorus</p>
        <p className='my-2 text-lg'>New Dungeon Difficulty Added: Mythic Plus</p>
        
        
      </div>
  </div>
  </div>
  )
}

export default Legion