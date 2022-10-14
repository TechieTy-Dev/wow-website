import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/Warrior-Icon.png'
import warrior from '../../assets/Warrior.png'

const Warrior = () => {
  return (
    <div className="warrior-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
      <h1 className='text-3xl text-white text-wrap'> <span className="text-[#C69B6D] ">Warriors</span> - Lords of War</h1>
        <img className="h-[700px]  mt-[100px]" src={warrior} alt="Warrior" />
      </div>
      <div className="pl-6 opacity-80 bg-black ml-[165px] w-[800px] slide-in-right">
        
        <img src={emblem} alt="Warrior emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl text-center text-white">Class Info</h3>
        
        <p className="mt-8 leading-6 text-center text-white w-92 "><b className="text-[#C69B6D] text-xl">Warriors</b>  equip themselves carefully for combat and engage their enemies head-on, letting attacks glance off their heavy armor.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[190px] right-[60px] '><b className="text-[#C69B6D] text-xl" >Combat Role: </b> Tanking, Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='my-4 text-white'><b className="text-[#C69B6D] text-xl" >Melee Damage: </b> By skillfully wielding dual-wielded weapons, rogues can deliver catastrophic damage to their targets </p>
        <p className='my-4 text-white'><b className="text-[#C69B6D] text-xl" >Tank: </b> Mighty warriors depend on their heavy armor, shields, and battle prowess to defend themselves and ensure enemies don’t focus on their softer-skinned allies. </p>
        <p className='my-4 text-white'><b className="text-[#C69B6D] text-xl" >Rage: </b>As warriors deal or take damage, their rage grows, allowing them to deliver truly crushing attacks in the heat of battle. </p>
       
        <p className='my-4 text-white'><b className="text-[#C69B6D] text-xl" >Resources: </b> Health, Rage </p>
      </div>
     
    </div>
    </div>
  )
}

export default Warrior