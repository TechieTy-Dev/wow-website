import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="gif-bg w-full h-[100vh] absolute bg-blend-overlay">
      <Sidebar />
      <div className="max-w-5xl ml-[400px] text-center text-white text-[1vw] slide-in">
        <div className="w-[800px] mt-[100px] h-[600px] ring-bg bg-[rgba(20,20,20,0.5)]">
          <h1 className='text-[1.5vw] text-white opacity-100'>World Of Warcraft</h1>
          <p className='ml-[12px] mt-8 text-slate-200 w-96'>Set in the fictional world of Azeroth, WoW allows players to create avatar-style characters with powerful classes and explore a sprawling universe while interacting with real players and nonreal players</p>
          <p className="mx-auto mt-16 text-white w-96">World of Warcraft was released in 2004, becoming one of the biggest games in the world. On top of 15 Million subscribers worldwide, It Gained popularity with celebrities such as Mila Kunis, Paul Walker, Vin Diesel </p>
          <p className="ml-[400px] mt-24 text-white w-96">Wow has something for all types of gamers to do. Leveling to Max Level, Questing different areas, Defeat Bosses in Dungeons and Raids, Dueling other players (PVP)</p>
        </div>
      </div>
    </div>
  )
}

export default Home