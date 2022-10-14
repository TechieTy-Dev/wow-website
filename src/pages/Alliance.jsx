import React from 'react'
import emblem from '../assets/Alliance-Emblem.png'
import Sidebar from '../components/Sidebar'
import Ally from '../assets/king.png'
import human from '../assets/WoW-Human-Crest.png'
import dwarf from '../assets/WoW-Dwarf-Crest.png'
import nightelf from '../assets/WoW-Night-Elf-Crest.png'
import gnome from '../assets/WoW-Gnome-Crest.png'
import draenei from '../assets/draenei.png'
import panda from '../assets/Wow-Pandaria-Crest.png'
import worgen from '../assets/worgen.png'


const Alliance = () => {
  return (
    <div className="ally-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="fadeIn-3 hidden md:block lg:block ml-[400px] mt-20">
        <img src={Ally} className="  md:h-[600px] md:w-[600px] lg:h-[800px]" alt="King Varian" />
      </div>
      <div className="mt-[30px] ml-[165px] w-[600px] slide-in-right">
        <img src={emblem} alt="alliance emblem" className=" mx-auto w-[150px] " />
        <h3 className="text-4xl my-[20px] text-white text-center">Fight for the Alliance</h3>
        <p className="mx-auto leading-6 text-center text-white w-80">The Alliance consists of powerful cultures and groups bound not by desperation or necessity, but by their deep commitments to abstract concepts like nobility and honor.</p>

        <h1 className='my-4 text-center text-white'>Alliance Races</h1>
        <ul className='flex flex-row w-[500px] mx-auto gap-1 '>
          <li>
            <p className="text-center text-white ">Humans</p><img className="w-[200px]" src={human} alt="human crest"/></li>
          <li>  <p className="text-center text-white">Dwarves</p><img src={dwarf} alt="dwarf crest" className="w-[200px]"/></li>
          <li>  <p className="text-center text-white ">Night Elf</p><img src={nightelf} alt="night elf crest" className=" whitespace-nowrap w-[220px]"/></li>
          <li>  <p className="text-center text-white">Gnomes</p><img src={gnome} alt="gnome crest" className="w-[200px]"/></li>
          <li>  <p className="text-center text-white">Draenei</p><img src={draenei} alt="Draenei crest" className="w-[215px]"/></li>
          <li>  <p className="text-center text-white">Worgen</p><img src={worgen} alt="Worgen crest" className="w-[220px]"/></li>
          <li>  <p className="text-center text-white">Pandarian</p><img src={panda} alt="Panda crest" className="w-[100px]"/></li>
        </ul>
        
        <button className="ml-[120px] px-6 py-4 text-3xl text-white border-2 mt-[60px] ">For The Alliance</button>
      </div>
     
    </div>
    </div>
  )
}

export default Alliance