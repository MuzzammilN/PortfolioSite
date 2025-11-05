import React from 'react'
import { motion } from 'framer-motion';
import ctf from "./assets/CTF.png";
import msfth from "./assets/intern Hackathon.jpg";
import stan from "./assets/Stand.png";

const Achievements = () => {
  return (
    <div className='min-h-screen w-screen bg-black flex flex-col items-center'>
        <motion.h1 
        initial = {{opacity: 0, y: 30}}
        whileInView= {{ opacity: 1, y: 0}}
        transition={{duration: 1.0, ease:"easeOut"}}
        viewport={{once: true}}
        className='font-MonoSig text-white text-4xl pt-20 mb-15'>
        Achievements
        </motion.h1>

        <div className='flex flex-row flex-wrap w-3/4 justify-around lg:mt-5 xl:mt-5 mt-2 mx-4'>

            <motion.div 
            initial = {{opacity: 0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 1.0, ease:"easeIn"}}
            viewport={{once: true}}
            className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700 my-5 mx-2'>
                <img src={stan} className='border rounded-xl'></img>
                <h3 className='text-white font-Poppins mt-5 mx-2 mb-2'>Stanford University — Code in Place (Python Programming Certificate) </h3>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-2">Completed Stanford University's Code in Place (April–June 2023), an introductory Python programming course based on CS106A, covering control flow, data structures, and graphics.</p>
            </motion.div>

            <motion.div 
            initial = {{opacity: 0, y:20}}
            whileInView= {{opacity: 1, y: 0}}
            transition={{duration: 1.0, ease:"easeIn"}}
            viewport={{once: true}}

            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700 my-5 mx-2">
                <img src={ctf}></img>
                <div className='flex flex-col just'>
                <h3 className='text-white font-Poppins mt-5 mx-2 mb-2'>Microsoft Intern Capture The Flag </h3>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-2">Participated in Microsoft’s Capture the Flag competition, gaining hands-on experience using Linux and its security tools to identify and exploit real-world vulnerabilities such as exposed API endpoints, open networks, data dumps, and Azure Active Directory misconfigurations. Demonstrated strong problem-solving skills by navigating various offensive security challenges, leveraging reconnaissance, enumeration, and privilege escalation techniques to successfully capture targeted flags.</p>
                </div>
            </motion.div>

            <motion.div 
              initial = {{opacity: 0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration: 1.0, ease:"easeIn"}}
              viewport={{once: true}}
            className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700 my-5 mx-2'>
                <img src={msfth} className='border rounded-xl'></img>
                <h3 className='text-white font-Poppins mt-5 mx-2'>2nd Place @ Microsoft Intern hackathon </h3>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 mx-2">Microsoft Teams Extension which helps interns and new engineers connect with senior engineers and make new friends within the company, Integrated Large Language Models (LLMs )within teams to find individuals based on your interest.</p>
            </motion.div>

        </div>

    </div>
  )
}

export default Achievements