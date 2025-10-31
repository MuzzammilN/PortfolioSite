import React from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis } from 'lenis/react';
import gt3rs from "./images/gt3rs.avif";
import scene from "./images/scene.jpg";
import coding from "./images/coding.jpeg";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Experience = () => {
    const lenis = useLenis((lenis) => {
    console.log(lenis)
    
    

  })
  return (
    <>
<div className="bg-black h-screen w-screen font-Islas font-bold text-white flex flex-col items-center">
  <h1 className="lg:text-5xl text-3xl mt-10 font-Shrikhand">ABOUT ME</h1>

 
  <div className="flex lg:flex-row flex-col justify-center mt-20">
<div className="group relative w-[300px] h-[500px] mx-5 rounded-lg shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] overflow-hidden grayscale hover:grayscale-0 transition ease-in-out duration-300 shadow-white">
  <img
    src={gt3rs}
    alt="GT3 RS"
    className="absolute inset-0 w-full h-full object-cover transition ease-in-out"
  />

  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t 
  from-black/40 to-transparent opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
    <h1 className="text-white text-2xl font-semibold mb-5">I Love Cars</h1>

  </div>
</div>



    <div className="group relative w-[300px] h-[500px] mx-5 rounded-lg shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] shadow-white mt-10 grayscale-70 hover:grayscale-0 transition ease-in-out duration-300 overflow-hidden">
      <img
      src={scene}
      alt="scene"
      className='absolute inset-0 w-full h-full object-cover group-hover:ease-in-out'/>
      <div className='absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 to-transparent opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
        <h1 className="text-white text-2xl font-semibold mb-5">Enjoy Nature</h1>
      </div>
    </div>


    <div className="group relative w-[300px] h-[500px] mx-5 shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] shadow-white rounded-lg mt-20  overflow-hidden grayscale-90 hover:grayscale-0 transition ease-in-out duration-300">
      <img 
      src={coding}
      alt="coding"
      className="absolute inset-0 w-full h-full  object-cover"/>
           <div className='absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/40 to-transparent opacity-0 translate-y-5 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-500'>
        <h1 className="text-white text-2xl font-semibold mb-5">Enjoy Nature</h1>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Experience