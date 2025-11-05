import React from 'react'
import { motion } from 'framer-motion';
import ctf from "./assets/CTF.png";

const Achievements = () => {
  return (
    <div className='min-h-screen w-screen bg-black flex flex-col items-center'>
        <motion.h1 
        initial = {{opacity: 0, y: 30}}
        whileInView= {{ opacity: 1, y: 0}}
        transition={{duration: 1.0, ease:"easeOut"}}
        viewport={{once: true}}
        className='font-MonoSig text-white text-4xl pt-20 mb-20'>
        Achievements
        </motion.h1>

        <div className='flex flex-row flex-wrap w-3/4 justify-around mt-20 mx-4'>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700">
                <img src={ctf}></img>
                <h3 className='text-white font-Poppins mt-5 mx-2'>MSFT - Capture The Flag </h3>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-2">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

            </div>
            <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700'></div>
            <div className='bg-white px-10 py-10'></div>
        </div>

    </div>
  )
}

export default Achievements