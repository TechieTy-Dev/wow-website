import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/Warlock-Icon.png'
import warlock from '../../assets/image 25.png'

const Warlock = () => {
  return (
    <div className="warlock-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
      <h1 className='text-3xl text-white'><span className="text-[#8788EE]">Warlocks</span> - Channelers of Forbidden Powers</h1>
        <img  className="h-[600px]  mt-[80px] " alt="Warlock" src={warlock} />
      </div>
      <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
        <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl mt-[-10px] text-center text-white">Class Info</h3>
        
        <p className="mt-8 text-sm leading-6 text-center text-white w-92 "><b className="text-[#8788EE] text-xl">Warlocks </b>burn and destroy weakened foes with a combination of crippling illnesses and dark magic.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[180px] right-[130px] '><b className="text-[#8788EE] text-xl" >Combat Role: </b> Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='my-4 text-sm text-white'><b className="text-[#8788EE] text-xl" >Ranged Damage: </b> Warlocks deliver fire and shadow damage with their spells, and they’re able to hurt others both instantly and with ongoing afflictions.</p>
        <p className='my-4 text-sm text-white'><b className="text-[#8788EE] text-xl" >Summoning: </b>Warlocks are adept at summoning their allies to their presence, whether said allies are other heroes or bloodthirsty demons. </p>
        <p className='my-4 text-sm text-white'><b className="text-[#8788EE] text-xl" >Demons: </b> Warlocks bind demons to their will; these infernal denizens defend their masters with their lives or rain death upon their enemies. </p>
        <p className='my-4 text-sm text-white'><b className="text-[#8788EE] text-xl" >Curses: </b> Warlocks make use of debilitating curses to weaken and disable enemies, reducing their ability to fight back.</p>
        <p className='my-4 text-sm text-white'><b className="text-[#8788EE] text-xl" >Resources: </b> Health, Mana, Soul Shards </p>
      </div>
     
    </div>
    </div>
  )
}

export default Warlock