import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/Pally-Icon.png'
import pally from '../../assets/Pally.png'

const Paladin = () => {
  return (
    <div className="pally-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
      <h1 className="text-3xl text-white"><span className='text-[#F48CBA]'>Paladins</span> - Paragons of Justice </h1>
        <img  className="h-[600px] mt-[100px] " alt="Paladin" src={pally} />
      </div>
      <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
      
        <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl text-center text-white">Class Info</h3>
        
        <p className="mt-8 leading-6 text-center text-white w-92 "><b className="text-[#F48CBA] text-xl">Paladins</b> stand directly in front of their enemies, relying on heavy armor and healing in order to survive incoming attacks. Whether with massive shields or crushing two-handed weapons.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[190px] right-[60px] '><b className="text-[#F48CBA] text-xl" >Combat Role: </b> Tanking, Healing, Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='my-2 text-white'><b className="text-[#F48CBA] text-xl" >Melee Damage: </b>Paladins charge their weapons with holy might, allowing them to deal additional damage with their strikes. </p>
        <p className='my-2 text-white'><b className="text-[#F48CBA] text-xl" >Healing: </b> Paladins’ potent healing abilities can ensure that they and their allies remain in fighting shape. </p>
        <p className='my-2 text-white'><b className="text-[#F48CBA] text-xl" >Tank: </b> Stalwart paladins are trained to use the heaviest armor and shields, and can utilize their skill to ensure that enemies focus on them, defending weaker members of their group. </p>
        <p className='my-2 text-white'><b className="text-[#F48CBA] text-xl" >Blessings and Auras: </b> As champions of order, paladins are extremely potent in a group, their blessings and auras can improve damage and survivability for both themselves and their party.</p>
        <p className='my-2 text-white'><b className="text-[#F48CBA] text-xl" >Resources: </b> Health, Holy Power, Mana </p>
      </div>
     
    </div>
    </div>
  )
}

export default Paladin