import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/Druid-Icon.png'
import druid from '../../assets/Druid.png'

const Druid = () => {
  return (
    <div className="druid-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
        <h1 className="text-3xl text-white"><span className='text-[#ff7c0a] '>Druids</span> - Savage Shapshifters</h1>
        <img  className="h-[600px] md:h-[600px] mt-[100px] " alt="Druid" src={druid} />
      </div>
      <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
        <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl mt-[-8px] text-center text-white">Class Info</h3>
        
        <p className="mt-8 text-sm leading-6 text-center text-white w-92 "><b className="text-[#ff7c0a] text-xl">Druids</b>  harness the vast powers of nature to preserve balance and protect life.  It’s critical that druids tailor the form they choose to the situation.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[182px] right-[50px] text-sm '><b className="text-[#FF7C0A] text-xl" >Combat Role: </b> Tanking, Healing,Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='my-4 text-sm text-white'><b className="text-[#FF7C0A] text-xl" >Melee and Ranged Damage: </b>Druids can take on the form of a savage cat in order to claw and bite their enemies up close, or that of a wild moonkin to blast enemies from afar.</p>
        <p className='my-4 text-sm text-white'><b className="text-[#FF7C0A] text-xl" >Healing: </b> By calling upon the powers of nature, druids are able to swiftly restore health to their injured allies. </p>
        <p className='my-4 text-sm text-white'><b className="text-[#FF7C0A] text-xl" >Tank: </b> When shapeshifted into their bear form, druids possess a thick skin and imposing presence that makes them ideal front-line protectors of weaker party members. </p>
        <p className='my-4 text-sm text-white w-92'><b className="text-[#FF7C0A] text-xl" >Shapeshifting: </b>Druids’ changing forms let them assume different roles and focus on either tanking, healing, or damage. They can also shapeshift to travel faster on land, sea, and air.</p>
        <p className='my-4 text-white'><b className="text-[#FF7C0A] text-xl" >Resources: </b> Astral Power, Energy, Health, Mana, Rage </p>
      </div>
     
    </div>
    </div>
  )
}

export default Druid