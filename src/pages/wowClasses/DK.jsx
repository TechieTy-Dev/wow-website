import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/DK-Icon.png'
import dk from '../../assets/DK.png'

const DK = () => {
  return (
    <div className="dk-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
      <h1 className='text-3xl text-white'><span className='text-[#C41E3A]'>Death Knights</span> - Heralds of Doom</h1>
        <img  className="h-[600px] md:h-[600px] mt-[70px] " alt="DK" src={dk} />
      </div>
      <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
        <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl text-center text-white">Class Info</h3>
        
        <p className="mt-8 leading-6 text-center text-white w-92 "><b className="text-[#C41E3A] text-xl">Death Knights</b> engage their foes up-close, supplementing swings of their weapons with dark magic that renders enemies vulnerable or damages them with unholy power.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[190px] right-[90px] '><b className="text-[#C41E3A] text-xl" >Combat Role: </b> Tanking, Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='px-2 my-4 text-white w-92'><b className="text-[#C41E3A] text-xl" >Tank: </b> To protect themselves and their fellows from death in battle, death knights gird themselves in heavy armor and parry attacks with their blades. </p>
        <p className='px-2 my-4 text-white w-92 '><b className="text-[#C41E3A] text-xl" >Melee Damage: </b> Death knight runeblades are empowered with dark magic; they can expend the power of their runes for vicious attacks.</p>
        <p className='px-2 my-4 text-white w-92'><b className="text-[#C41E3A] text-xl" >Runeforging: </b>Death knights have a personal connection with their blades, and can forge runes into them in order to increase their power. </p>
      
        <p className='px-2 my-4 text-white w-92'><b className="text-[#C41E3A] text-xl" >Resources: </b> Health, Runes, Runic Power </p>
      </div>
     
    </div>
    </div>
  )
}

export default DK