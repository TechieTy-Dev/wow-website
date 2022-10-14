import React from 'react'
import Sidebar from '../components/Sidebar'
import thrall from '../assets/thrall.png'
import emblem from '../assets/Horde-Emblem.png'
import orcs from '../assets/WoW-Orc-Crest.png'
import trolls from '../assets/WoW-Troll-Crest.png'
import undead from '../assets/WoW-Undead-Crest.png'
import tauren from '../assets/WoW-Tauren-Crest.png'
import bloodelf from '../assets/bloodelf.png'
import goblin from '../assets/goblin.png'
import panda from '../assets/Wow-Pandaria-Crest.png'

const Horde = () => {
  return (
    <div className='w-full h-[100vh] absolute bg-blend-overlay horde-bg'>
     <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[500px] ml-[400px] mt-32 fadeIn">
        <img src={thrall} className="h-[800px]" alt="Thrall" />
      </div>
      <div className="mt-[30px] ml-[165px] w-[600px] slide-in-right">
        <img src={emblem} alt="alliance emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl my-[20px] text-white text-center">Fight for the Horde</h3>
        <p className="mx-auto leading-6 text-center text-white w-80">The Horde, these diverse and powerful races strive to overcome their differences and unite as one in order to win freedom for their people and prosper in a land that has come to hate them.</p>

        <h1 className='my-[20px] text-center text-white'>Horde Races</h1>
        <ul className='flex flex-row w-[500px] mx-auto gap-2 leading-4'>
          <li>
            <p className="text-center text-white">Orcs</p><img className="w-[190px]" src={orcs} alt="orcs crest"/></li>
          <li>  <p className="text-center text-white mb-[-8px]">Undead</p><img src={undead} alt="undead crest" className="w-[200px]"/></li>
          <li>  <p className="text-center text-white">Tauren</p><img src={tauren} alt="tauren crest" className="w-[180px]"/></li>
          <li>  <p className="text-center text-white">Trolls</p><img src={trolls} alt="trolls crest" className="w-[210px]"/></li>
          <li>  <p className="text-center text-white whitespace-nowrap">Blood Elf</p><img src={bloodelf} alt="trolls crest" className="w-[50px] ml-2"/></li>
          <li>  <p className="text-center text-white">Goblin</p><img src={goblin} alt="trolls crest" className="w-[200px] mt-[2px]"/></li>
          <li>  <p className="text-center text-white">Pandarian</p><img src={panda} alt="trolls crest" className="w-[65px]"/></li>
        </ul>
        
        <button className="ml-[120px] px-6 py-4 text-3xl text-white border-2 mt-[50px] ">For The Horde</button>
      </div>
      
    </div>
    </div>
  )
}

export default Horde
