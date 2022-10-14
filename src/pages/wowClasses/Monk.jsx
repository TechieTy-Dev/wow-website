import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/Monk-Icon.png'
import monk from '../../assets/image 28.png'

const Monk = () => {
  return (
    <div className="monk-bg w-full h-[100vh] absolute bg-blend-overlay	">
    <Sidebar />
    <div className="flex flex-row mx-auto">
    <div className="w-[1000px] ml-[400px] mt-20 fadeIn">  <h1 className='text-3xl text-white'><span className='text-[#00FF98] '>Monks</span> - Musing Brawlers</h1>
      <img src={monk}  className="h-[600px] mt-[80px] " alt="Monk" />
    </div>
    <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
      <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
      <h3 className="text-4xl mt-[-10px] text-center text-white">Class Info</h3>
      
      <p className="mt-8 leading-6 text-center text-white w-92 "><b className="text-[#00FF98] text-xl">Monks</b>   rely mainly on their hands and feet to do the talking, and on strong connection with their inner chi to power their abilities.</p>
      <hr className="my-2 "/>
      <p className='absolute text-white top-[180px] right-[70px] '><b className="text-[#00FF98] text-xl" >Combat Role: </b> Tanking, Healing, Damage Dealing</p>
      <h3 className="text-2xl text-center text-white">Features</h3>
     
      <p className='my-4 text-white'><b className="text-[#00FF98] text-xl" >Melee Damage: </b> Monks are true zen masters, and strike with precision and grace to inflict maximum damage to their enemies. </p>
      <p className='my-4 text-white'><b className="text-[#00FF98] text-xl" >Tank: </b>Stalwart monks defend their allies by distracting enemies with their dizzying brews and uncanny elusiveness. </p>
      <p className='my-4 text-white'><b className="text-[#00FF98] text-xl" >Healing: </b> Monks can channel mystical powers to heal and restore injured allies.</p>
      <p className='my-4 text-white'><b className="text-[#00FF98] text-xl" >Celestials: </b> The August Celestials are four Wild Gods who watch over Pandaria, and lend Monks some of their power.</p>
      <p className='my-4 text-white'><b className="text-[#00FF98] text-xl" >Resources: </b>Chi, Energy, Health, Mana </p>
    </div>
   
  </div>
  </div>
  )
}

export default Monk