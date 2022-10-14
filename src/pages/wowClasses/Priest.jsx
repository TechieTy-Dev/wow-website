import React from 'react'
import Sidebar from '../../components/Sidebar'
import emblem from '../../assets/Priest-Icon.png'
import priest from '../../assets/Priest.png'

const Priest = () => {
  return (
    <div className="priest-bg w-full h-[100vh] absolute bg-blend-overlay	">
      <Sidebar />
      <div className="flex flex-row mx-auto">
      <div className="w-[1000px] ml-[400px] mt-20 fadeIn">
      <h1 className='text-3xl text-white'>Priests - Invokers of Light and Darkness</h1>
        <img  className="h-[700px] w-[500px] mt-[30px] " alt="Priest" src={priest} />
      </div>
      <div className="pl-6 bg-black ml-[165px] w-[1000px] slide-in-right">
        <img src={emblem} alt="rogue emblem" className=" mx-auto w-[150px]" />
        <h3 className="text-4xl text-center text-white">Class Info</h3>
        
        <p className="mt-8 leading-6 text-center text-white w-92 "><b className="text-[#fff] text-xl">Priests</b>  are devoted to the spiritual, and express their unwavering faith by serving the people. They also wield powerful offensive spells from a distance, but can be overwhelmed by enemies due to their physical frailty and minimal armor.</p>
        <hr className="my-2 "/>
        <p className='absolute text-white top-[190px] right-[130px] '><b className="text-[#FFF] text-xl" >Combat Role: </b> Healing, Damage Dealing</p>
        <h3 className="text-2xl text-center text-white">Features</h3>
       
        <p className='my-4 text-white'><b className="text-[#FFF] text-xl" >Healing: </b>Priests utilize their holy powers to restore their health and that of their comrades.</p>
        <p className='my-4 text-white'><b className="text-[#FFF] text-xl" >Ranged Damage: </b>Priestly Shadow magic can deliver great amounts of immediate damage, or wracking pains that punish foes over longer periods of time. </p>
        <p className='my-4 text-white'><b className="text-[#FFF] text-xl" >Power Words: </b> By calling on mystic shielding and holy empowerment, priests can prevent incoming damage and improve their defenses and those of their allies. </p>
       
        <p className='my-4 text-white'><b className="text-[#FFF] text-xl" >Resources: </b> Insanity, Health, Mana </p>
      </div>
     
    </div>
    </div>
  )
}

export default Priest