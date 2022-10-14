import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/Hunter-Icon.png'
import hunter from '../../assets/Hunter.png'

const Hunter = () => {
  return (
    <div className="hunter-bg w-full h-[100vh] absolute bg-blend-overlay	">
    <Sidebar />
    <div className="flex flex-row mx-auto">
    <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
    <h1 className='text-3xl text-white'><span className='text-[#AAD372] '>Hunters</span> - Inescapable Stalkers</h1>
      <img  className="h-[600px] mt-[80px] " alt="Hunter" src={hunter} />
    </div>
    <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
      <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
      <h3 className="text-4xl text-center text-white">Class Info</h3>
      
      <p className="mt-6 leading-6 text-center text-white w-92 "><b className="text-[#AAD372] text-xl">Hunters</b>  battle their foes at a distance or up close, commanding their pets to attack while they nock their arrows, fire their guns, or ready their polearms.</p>
      <hr className="my-2 "/>
      <p className='absolute text-white top-[185px] right-[130px] '><b className="text-[#AAD372] text-xl" >Combat Role: </b> Damage Dealing</p>
      <h3 className="text-2xl text-center text-white">Features</h3>
     
      <p className='my-3 text-white'><b className="text-[#AAD372] text-xl" >Melee Damage: </b>Hunters are rugged trackers who can use venom, explosives and traps to damage enemies up close.</p>
      <p className='my-3 text-white'><b className="text-[#AAD372] text-xl" >Ranged Damage: </b> Whether wielding bows, guns, or crossbows, hunters are deadly with ranged weapons. They are capable of dishing out consistently high damage. </p>
      <p className='my-3 text-white'><b className="text-[#AAD372] text-xl" >Pets: </b>Hunters tame the beasts of the wild, and those beasts serve in return by assaulting their enemies and shielding them from harm. </p>
      <p className='my-3 text-white'><b className="text-[#AAD372] text-xl" >Solo Play: </b> Thanks to their pets and damage output, hunters are effective at completing quests and leveling quickly, even when they’re alone.</p>
      <p className='my-3 text-white'><b className="text-[#AAD372] text-xl" >Resources: </b> Focus, Health </p>
    </div>
   
  </div>
  </div>
  )
}

export default Hunter