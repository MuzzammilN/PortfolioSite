import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ReactLenis, useLenis } from 'lenis/react'

gsap.registerPlugin(useGSAP, ScrollTrigger);


const Experience = () => {
    const lenis = useLenis((lenis) => {
    console.log(lenis)
    
    

  })
  return (
<div className='relative w-screen h-screen bg-black mix-blend-multiply-soft-light text-black flex flex-col text-center'>



</div>
  )
}

export default Experience