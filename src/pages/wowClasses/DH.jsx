import React from 'react'
import emblem from '../../assets/DH-Icon.png'
import Sidebar from '../../components/Sidebar'
import dh from '../../assets/image 24.png'
const DH = () => {
  return (
<div className="dh-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto ">
      <div className="w-[800px] ml-[400px] mt-20 fadeIn">
      <h1 className='text-3xl text-white'><span className='text-[#A330C9] '>Demon Hunters</span> - Unforgiving Predators</h1>
        <img src={dh} className="h-[600px] mt-[100px] " alt="DH" />
      </div>
      <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
        <img src={emblem} alt="DH emblem" className=" mx-auto w-[100px]" />
        <h3 className="text-4xl text-center text-white">Class Info</h3>
        
        <p className="mt-8 leading-6 text-center text-white w-92 "><b className="text-[#A330C9] text-xl">Demon Hunters</b> forgo heavy armor, capitalize on speed, closing the distance quickly to strike enemies with one-handed weapons.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[140px] right-[90px] '><b className="text-[#A330C9] text-xl" >Combat Role: </b> Tanking, Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='px-2 my-4 text-white w-92'><b className="text-[#A330C9] text-xl" >Melee Damage: </b> Demon Hunters can double jump, vault in and out of combat, and unfold their monstrous wings, surprising enemies from above with devastating attacks.</p>
        <p className='px-2 my-4 text-white w-92'><b className="text-[#A330C9] text-xl" >Tank: </b>The chaotic energy that flows within Demon Hunters gifts them with unparalleled durability. </p>
        <p className='px-2 my-4 text-white w-92'><b className="text-[#A330C9] text-xl" >Metamorphosis: </b> Demon Hunters transform into hellish forms, enhancing their chosen role: damage-focused Illidari can teleport into combat, while those who prize defense can grant powerful supportive Auras. </p>
       
        <p className='px-2 my-4 text-white w-92'><b className="text-[#A330C9] text-xl" >Resources: </b> Rage, Health </p>
      </div>
     
    </div>
    </div>
   
  )
}

export default DH