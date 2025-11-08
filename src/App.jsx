import { useState, useEffect, useRef } from 'react'
import { SiJavascript } from "react-icons/si";
import './index.css'
import bgVideo from "./images/bg.mp4"
import javaSVG from "./assets/java.svg"
import gsap from 'gsap';
import Copy from './components/Copy'
import { ReactLenis, useLenis } from 'lenis/react'

function App() {
     const lenis = useLenis((lenis) => {
     console.log(lenis)});
  const [buttonsVisible, setButtonsVisible] = useState([false, false]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setButtonsVisible([true, false]), 2000),
      setTimeout(() => setButtonsVisible([true, true]), 2000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <>
<div className='relative w-screen h-screen'>
  <video
    autoPlay
    loop
    muted
    playsInline
    className='absolute top-0 left-0 w-screen h-full object-cover'
  >
    <source src={bgVideo} type='video/mp4' />
  </video>

<div className='flex flex-col relative z-10 w-full h-full text-white'>
  <nav className='self-center p-4'>

  </nav>

  <div className='flex flex-col items-center justify-center flex-1'>
    <Copy animateOnScroll={false} delay={0.5}>
    <h1 className='text-4xl font-semibold font-Poppins lg:text-6xl hover:text-amber-300 ease-in-out duration-700'>Muzzammil Naqvi</h1>
    </Copy>
     <Copy animateOnScroll={false} delay={1.0}>
    <h2 className='mt-2 text-2xl font-Poppins font-light lg:text-2xl  hover:text-amber-300 ease-in-out duration-700'>Software Engineer</h2>
    </Copy>
    <Copy animateOnScroll={false} delay={1.5}>
    <h3 className='mt-6 text-md lg:text-md  hover:text-amber-300 ease-in-out duration-700 '>building dreams with passion fueled by oxygen : ) </h3>
    </Copy>


    <div className='flex flex-row mt-6 space-x-4'>
      <a
          href="https://www.linkedin.com/in/naqvimuzzammil/"
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin" 
        className={`w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full  bg-white shadow-md bg-opacity-0 shadow-gray-200 group transition-all duration-500
          ${buttonsVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} bg-white`}
      >
        <svg
          className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 72 72"
        >
          <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" />
        </svg>
        <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#006699] z-0 transition-all duration-500 group-hover:top-0"></div>
      </a>

      <a
        href="https://github.com/MuzzammilN"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Profile"
        className={`w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full  bg-white shadow-md bg-opacity-0 shadow-gray-200 group transition-all duration-500
          ${buttonsVisible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} bg-white`}
      >
        <svg
          className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path d="M12 .297a12 12 0 00-3.797 23.4c.6.111.82-.26.82-.578 0-.286-.01-1.044-.016-2.048-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.49.998.108-.775.42-1.305.762-1.605-2.665-.304-5.466-1.335-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.003 0c2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.624-5.476 5.92.431.372.815 1.103.815 2.222 0 1.604-.014 2.897-.014 3.293 0 .32.217.694.825.576A12 12 0 0012 .297z" />
        </svg>
        <div className="absolute top-full left-0 w-full h-full rounded-full bg-[#111827] z-0 transition-all duration-500 group-hover:top-0" />
      </a>

            <a
                    href="mailto:naqvimuzzammil@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GMAIL" 
            className={`w-10 h-10 flex items-center relative overflow-hidden justify-center rounded-full  bg-white shadow-md bg-opacity-0 shadow-gray-200 group transition-all duration-500
          ${buttonsVisible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} bg-white`}>
              <svg className="fill-gray-900 relative z-10 transition-all duration-300 group-hover:fill-white" 
              xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 54 41" fill="none">
              <path className=""
                d="M4.00654 40.1236H12.4893V19.5227L0.371094 10.4341V36.4881C0.371094 38.4997 2.00099 40.1236 4.00654 40.1236Z"
                fill="" />
              <path className=""
                d="M41.5732 40.1236H50.056C52.0676 40.1236 53.6914 38.4937 53.6914 36.4881V10.4341L41.5732 19.5227"
                fill="" />
              <path className=""
                d="M41.5732 3.7693V19.5229L53.6914 10.4343V5.58702C53.6914 1.09118 48.5594 -1.47181 44.9663 1.22448"
                fill="" />
              <path  className=""
              d="M12.4893 19.5227V3.76904L27.0311 14.6754L41.5729 3.76904V19.5227L27.0311 30.429"
                fill="" />
              <path className=""
                d="M0.371094 5.58702V10.4343L12.4893 19.5229V3.7693L9.09617 1.22448C5.49708 -1.47181 0.371094 1.09118 0.371094 5.58702Z"
                fill="" />
              </svg>
              <div className="absolute top-full left-0 w-full h-full rounded-full bg-red-500 z-0 transition-all duration-500 group-hover:top-0"></div>
            </a>
      
    </div>
  </div>


  <div className={`self-center mb-8 border-white border-[0.5px] px-3 py-1 rounded-2xl animate-bounce transition-all duration-500 ${buttonsVisible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} >
    Scroll Down
  </div>
    
  </div>
</div>



    </>
  )
}

export default App
