import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/Mage-Icon.png'
import mage from '../../assets/Mage.png'

const Mage = () => {
  return (
    <div className="mage-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
        <h1 className='text-3xl text-white'><span className='text-[#3FC7EB]'>Mages</span> - Masters of Time and Space</h1>
        <img className="h-[600px] mt-[100px] " alt="Mage" src={mage} />
      </div>
      <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
        <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl mt-[-20px] text-center text-white">Class Info</h3>
        
        <p className="mt-8 text-sm leading-6 text-center text-white w-92"><b className="text-[#3FC7EB] text-xl">Mages</b> wield powerful Arcane, Frost, and Fire offensive spells, mages are fragile and lightly armored, making them particularly vulnerable to close-range attacks.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[170px] right-[130px] '><b className="text-[#3FC7EB] text-xl" >Combat Role: </b> Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='my-3 text-sm text-white'><b className="text-[#3FC7EB] text-xl" >Ranged Damage: </b> Mages can expend mana in order to deal high amounts of damage with amazing speed, though they must be wary of exhausting themselves. </p>
        <p className='my-4 text-sm text-white'><b className="text-[#3FC7EB] text-xl" >Area of Effect Spells: </b>By calling upon sheets of ice, columns of flame, and waves of arcane power, mages can effectively attack multiple foes at the same time. </p>
        <p className='my-4 text-sm text-white'><b className="text-[#3FC7EB] text-xl" >Teleportation: </b>Mages possess the ability to transport themselves and their allies between cities and can summon replenishing food and water. </p>
        <p className='my-4 text-sm text-white'><b className="text-[#3FC7EB] text-xl" >Control: </b> A mage has many options for controlling the battlefield, from freezing enemies in place to transforming them into helpless critters.</p>
        <p className='my-4 text-sm text-white'><b className="text-[#3FC7EB] text-xl" >Resources: </b> Health, Mana </p>
      </div>
     
    </div>
    </div>
  )
}

export default Mage