import React from 'react'
import dk from '../assets/DK-Icon.png'
import dh from '../assets/DH-Icon.png'
import hunter from '../assets/Hunter-Icon.png'
import druid from '../assets/Druid-Icon.png'
import mage from '../assets/Mage-Icon.png'
import monk from '../assets/Monk-Icon.png'
import priest from '../assets/Priest-Icon.png'
import pally from '../assets/Pally-Icon.png'
import warrior from '../assets/Warrior-Icon.png'
import warlock from '../assets/Warlock-Icon.png'
import rogue from '../assets/Rogue-Icon.png'
import shaman from '../assets/Shaman-Icon.png'

const Classes = () => {
  return (
    <div className="classes-bg w-full h-[100vh] bg-blend-overlay ">
      <div className="ml-[180px]">
        <h1 className="mx-auto text-center pt-[100px] text-4xl text-white"> Playable Classes</h1>
        <div className="top-grid mt-[40px] ml-[150px]  ">
        <button className="p-3 mx-2 fadeIn"><a className="hover:scale-100" href="/Classes/DK"><img src={dk} alt="DK" className=" w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Death Knight</p></a></button>
        <button className="p-3 mx-2 fadeIn-1"><a href="/Classes/DH"><img src={dh} alt="DH" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Demon Hunter</p></a></button>
        <button className="p-3 mx-2 fadeIn-2"><a href="/Classes/Druid"><img src={druid} alt="Druid" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Druid</p></a></button>
        <button className="p-3 mx-2 fadeIn-3"><a href="/Classes/Hunter"><img src={hunter} alt="hunter" className="w-[150px]"/><p className="text-lg text-white">Hunter</p></a></button>
        <button className="p-3 mx-2 fadeIn-4"><a href="/Classes/Mage"><img src={mage} alt="Mage" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Mage</p></a></button>
        <button className="p-3 mx-2 fadeIn-5"><a href="/Classes/Monk"><img src={monk} alt="Monk" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Monk</p></a></button>
        </div>
        <div className="btm-grid ml-[150px] mt-[20px]">
        <button className="p-3 mx-2 fadeIn-6"><a href="/Classes/Paladin"><img src={pally} alt="Paladin" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Paladin</p></a></button>
        <button className="p-3 mx-2 fadeIn-7"><a href="/Classes/Priest"><img src={priest} alt="Priest" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Priest</p></a></button>
        <button className="p-3 mx-2 fadeIn-8"><a href="/Classes/Rogue"><img src={rogue} alt="Rogue" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Rogue</p></a></button>
        <button className="p-3 mx-2 fadeIn-9"><a href="/Classes/Shaman"><img src={shaman} alt="Shaman" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Shaman</p></a></button>
        <button className="p-3 mx-2 fadeIn-10"><a href="/Classes/Warlock"><img src={warlock} alt="Warlock" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Warlock</p></a></button>
        <button className="p-3 mx-2 fadeIn-11"><a href="/Classes/Warrior"><img src={warrior} alt="Warrior" className="w-[150px]"/><p className="text-sm text-white md:text-lg lg:text-xl">Warrior</p></a></button>
        </div>
      </div>
    </div>
  )
}

export default Classes