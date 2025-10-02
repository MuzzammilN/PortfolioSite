import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import bgVideo from "./images/bg.mp4"

function App() {
  // Items Center (Vertically)
  // Justify Center (Horizontally)
  // bg-cover ensure the bg covers the whole div
  // bg cover ensure the bg is centered
 
  return (
    <>
<div className='relative w-screen h-screen'>
  <video
    autoPlay
    loop
    muted
    playsInline
    className='absolute top-0 left-0 w-full h-full object-cover'
  >
    <source src={bgVideo} type='video/mp4' />
  </video>

<div className='flex flex-col relative z-10 w-full h-full text-white'>
  {/* Top nav */}
  <nav className='self-center p-4'>
    {/* Nav content here */}
  </nav>

  {/* Center content */}
  <div className='flex flex-col items-center justify-center flex-1'>
    <h1 className='text-4xl font-semibold font-Poppins lg:text-6xl'>Muzzammil Naqvi</h1>
    <h2>Software Engineer</h2>
    <h3>Quote of the day</h3>
  </div>

  {/* Bottom button */}
  <div className='self-center mb-8 border-white border-[0.5px] px-3 py-1 rounded-2xl animate-bounce' >
    Scroll Down
  </div>
</div>
</div>

    </>
  )
}

export default App
