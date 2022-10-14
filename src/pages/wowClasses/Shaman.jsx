import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/Shaman-Icon.png'
import shaman from '../../assets/image 26.png'

const Shaman = () => {
  return (
    <div className="shaman-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
      <h1 className='text-3xl text-white'><span className='text-[#0070DD] '>Shamans</span> - Adepts of the Elements</h1>
        <img  className="h-[600px] mt-[120px] " alt="Shaman" src={shaman} />
      </div>
      <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
        <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl mt-[-10px] text-center text-white">Class Info</h3>
        
        <p className="mt-8 text-sm leading-6 text-center text-white w-92 "><b className="text-[#0070DD] text-xl">Shamans</b> are versatile enough to battle foes up close or at range, but wise shaman choose their avenue of attack based on their enemies’ strengths and weaknesses.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[180px] right-[90px] '><b className="text-[#0070DD] text-xl" >Combat Role: </b> Healing, Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='my-4 text-sm text-white'><b className="text-[#0070DD] text-xl" >Melee Damage: </b> Shaman enhance their weapons with elemental effects, empowering their blows with the power of fire, wind, or ice. </p>
        <p className='my-4 text-sm text-white'><b className="text-[#0070DD] text-xl" >Healing: </b> By calling on their spiritual power, shaman can restore health to injured allies. </p>
        <p className='my-4 text-sm text-white'><b className="text-[#0070DD] text-xl" >Ranged Damage: </b> The elemental force of the shaman can be used to damage enemies from afar with lightning strikes, earthquakes, and lava bursts. </p>
        <p className='my-4 text-sm text-white'><b className="text-[#0070DD] text-xl" >Totems: </b>Shaman can choose to deploy a wide array of different totems, each with unique effects from improved restoration to greater damage, enhanced crowd control, and more.</p>
        <p className='my-4 text-sm text-white'><b className="text-[#0070DD] text-xl" >Resources: </b> Health, Maelstrom Mana,  </p>
      </div>
     
    </div>
    </div>
  )
}

export default Shaman