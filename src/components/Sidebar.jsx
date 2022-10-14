import React from 'react'
import logo from '../assets/Logo.png'

const Sidebar = () => {
  return (
    <div className="h-full max-w-[300px] bg-black sidebar slide-in-left">
      <nav className=" sidebar-nav">
        <div>
        <a href="/">
        <img src={logo} alt="Logo" className='mb-8 logo max-w-[200px]' />
        </a>
        </div>
        <ul className="flex flex-col text-center ">
          <li className="mb-12 text-sm md:text-lg lg:text-xl "><a href="/">Home</a></li>
          <li className="mb-12 text-sm md:text-lg lg:text-xl "><a href="/Alliance">Alliance</a></li>
          <li className="mb-12 text-sm md:text-lg lg:text-xl "><a href="/Horde">Horde</a></li>
          <li className="mb-12 text-sm md:text-lg lg:text-xl expansions-parent"><a href="/Expansions">Expansions</a>

            <ul className="py-3 expansions-menu">
              <li className='py-1'><a className='hover:border-solid hover:border-b-2 hover:border-[#B4D54D]' href="/Expansions/TBC">TBC</a></li>
              <li className='py-1'><a className='hover:border-solid hover:border-b-2 hover:border-[#0AC2D4]' href="/Expansions/WoTLK">WoTLK</a></li>
              <li className='py-1'><a className='hover:border-solid hover:border-b-2 hover:border-[#AA2512]' href="/Expansions/Cata">CATA</a></li>
              <li className='py-1'><a className='hover:border-solid hover:border-b-2 hover:border-[#73541D]' href="/Expansions/MoP">MoP</a></li>
              <li className='py-1'><a className='hover:border-solid hover:border-b-2 hover:border-[#CF6050]' href="/Expansions/WoD">WoD</a></li>
              <li className='py-1'><a className='hover:border-solid hover:border-b-2 hover:border-[#49FE4D]' href="/Expansions/Legion">Legion</a></li>
              <li className='py-1'><a className='hover:border-solid hover:border-b-2 hover:border-[#AAA9AD]' href="/Expansions/BoA">BoA</a></li>
              <li className='py-1'><a className='hover:border-solid hover:border-b-2 hover:border-[#3B3A3A]' href="/Expansions/Shadowlands">Shadowlands</a></li>
              
            </ul>
          </li>
          <li className="mb-12 text-sm md:text-lg lg:text-xl classes-parent"><a href="/Classes">Classes</a>
            <ul className="py-3 classes-menu">
              <li className='py-1'><a href="/Classes/DK" className='hover:border-solid hover:border-b-2 hover:border-[#C41E3A]'>Death Knight</a></li>
              <li className='py-1'><a  href="/Classes/DH" className='hover:border-solid hover:border-b-2 hover:border-[#A330C9]'>Demon Hunter</a></li>
              <li className='py-1'><a href="/Classes/Druid" className='hover:border-solid hover:border-b-2 hover:border-[#FF7C0A]'>Druid</a></li>
              <li className='py-1'><a href="/Classes/Hunter" className='hover:border-solid hover:border-b-2 hover:border-[#AAD372]'>Hunter</a></li>
              <li className='py-1'><a href="/Classes/Mage" className='hover:border-solid hover:border-b-2 hover:border-[#3FC7EB]' >Mage</a></li>
              <li className='py-1'><a href="/Classes/Monk" className='hover:border-solid hover:border-b-2 hover:border-[#00FF98]'>Monk</a></li>
              <li className='py-1'><a href="/Classes/Paladin" className='hover:border-solid hover:border-b-2 hover:border-[#F48CBA]'>Paladin</a></li>
              <li className='py-1'><a href="/Classes/Priest" className='hover:border-solid hover:border-b-2 hover:border-[#FFFFFF]'>Priest</a></li>
              <li className='py-1'><a href="/Classes/Rogue" className='hover:border-solid hover:border-b-2 hover:border-[#FFF468]'>Rogue</a></li>
              <li className='py-1'><a href="/Classes/Shaman" className='hover:border-solid hover:border-b-2 hover:border-[#0070DD]'>Shaman</a></li>
              <li className='py-1'><a href="/Classes/Warlock" className='hover:border-solid hover:border-b-2 hover:border-[#8788EE]'>Warlock</a></li>
              <li className='py-1'><a href="/Classes/Warrior" className='hover:border-solid hover:border-b-2 hover:border-[#C69B6D]'>Warrior</a></li>
            
            
            
            
            </ul>   
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar