import React from 'react'
import rogue from '../../assets/image 29.png'
import emblem from '../../assets/Rogue-Icon.png'
import Sidebar from '../../components/Sidebar'

const Rogue = () => {
  return (
    
<div className="rogue-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
      <h1 className='text-3xl text-white'><span className='text-[#fff468] '>Rogues</span> - Prowling Cutpurses
</h1>
        <img src={rogue} className="h-[600px]   mt-[120px] " alt="Rogue" />
      </div>
      <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
        <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl text-center text-white mt-[-10px]">Class Info</h3>
        
        <p className="mt-8 leading-6 text-center text-white w-92 "><b className="text-[#fff468] text-xl">Rogues</b> often initiate combat with a surprise attack from the shadows, leading with vicious melee strikes.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[180px] right-[130px] '><b className="text-[#FFF468] text-xl" >Combat Role: </b> Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='my-4 text-white'><b className="text-[#FFF468] text-xl" >Melee Damage: </b> By skillfully wielding dual-wielded weapons, rogues can deliver catastrophic damage to their targets </p>
        <p className='my-4 text-white'><b className="text-[#FFF468] text-xl" >Poisons: </b> Rogues coat their weapons in poison, allowing them to quickly dispatch weakened foes. </p>
        <p className='my-4 text-white'><b className="text-[#FFF468] text-xl" >Stealth: </b> Rogues sneak about the battlefield, hiding from enemies and delivering surprise attacks to the unwary when opportunity arises. </p>
        <p className='my-4 text-white'><b className="text-[#FFF468] text-xl" >Combos: </b> By planning and combining successive melee attacks, rogues can build up combo points that allow them to deliver devastating finishing blows in combat.</p>
        <p className='my-4 text-white'><b className="text-[#FFF468] text-xl" >Resources: </b> Combo Points, Energy, Health </p>
      </div>
     
    </div>
    </div>
  )
}

export default Rogue