import React from 'react'
import tbc from '../assets/theBC.png'
import wotlk from '../assets/thewotlk.png'
import cata from '../assets/thecata.png'
import mop from '../assets/themop.png'
import wod from '../assets/thewod.png'
import legion from '../assets/thelegion.png'
import boa from '../assets/theboa.png'
import shadowlands from '../assets/thesl.png'

const Expansions = () => {
  return (
    <div className="expansions-bg w-full h-[100vh] bg-blend-overlay ">
            <div className="ml-[180px]">
        <h1 className="mx-auto text-center pt-[100px] text-4xl text-white"> Expansions</h1>
        <div className="top-grid mt-[20px] ml-[250px]  ">
        <button className="p-3 mx-2 fadeIn"><a className="hover:scale-100" href="/Expansions/TBC"><img src={tbc} alt="The Burning Crusade" className=" w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">The Burning Crusade</p></a></button>
        <button className="p-3 mx-2 fadeIn-1"><a href="/Expansions/WoTLK"><img src={wotlk} alt="Wrath of the Lich King" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Wrath of the Lich King</p></a></button>
        <button className="p-3 mx-2 fadeIn-2"><a href="/Expansions/Cata"><img src={cata} alt="Cataclysm" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Cataclysm</p></a></button>
        <button className="p-3 mx-2  fadeIn-3"><a href="/Expansions/MoP"><img src={mop} alt="Mist of Pandaria" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Mist of Pandaria</p></a></button>
       
        </div>
        <div className="btm-grid ml-[250px] mt-[10px]">
        <button className="p-3 mx-2 fadeIn-4"><a href="/Expansions/WoD"><img src={wod} alt="Warlords of Dreanor" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Warlords of Dreanor</p></a></button>
        <button className="p-3 mx-2  fadeIn-5"><a href="/Expansions/Legion"><img src={legion} alt="Legion" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Legion</p></a></button>
        <button className="p-3 mx-2  fadeIn-6"><a href="/Expansions/BoA"><img src={boa} alt="Battle of Azeroth" className="w-[150px] ml-7"/><p className="text-sm text-white md:text-lg lg:text-xl">Battle of Azeroth</p></a></button>
        <button className="p-3 ml-2  fadeIn-7"><a href="/Expansions/Shadowlands"><img src={shadowlands} alt="Shadowlands" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Shadowlands</p></a></button>
       
        </div>
      </div>
    </div>
  )
}

export default Expansions