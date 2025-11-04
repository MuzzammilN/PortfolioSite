import React from 'react';

import { ReactLenis, useLenis } from 'lenis/react';
import { motion } from "framer-motion";




const Experience = () => {
    const lenis = useLenis((lenis) => {
    console.log(lenis)

  })
  return (
    <>
<div className="bg-black h-screen w-screen font-Poppins font-bold text-white flex flex-col items-center">
  <motion.h1
   className='text-3xl mt-10 font-MonoSig lg:text-5xl xl:text-5xl '
     initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} >Experience</motion.h1>


<ol  className="relative border-s border-gray-200 dark:border-gray-700 mt-10 mx-5 lg:mx-40">                  
    <li class="mb-10 ms-4">
        <div 
        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" ></div>
        <motion.time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"      
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} >May 2025 - August 2025</motion.time>
        <motion.h3 className="text-lg font-semibold text-gray-900 dark:text-white"
             initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
  >Software Engineer Intern - Microsoft</motion.h3>
<motion.p
  className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
>
  Built a prototype integrating telemetry data pipelines with large language models (LLMs) using C#/.NET, React, and JavaScript, enabling automated diagnostics and impact analysis.<br />
  Designed and consumed REST APIs in .NET, implementing authentication mechanisms to ensure secure and reliable data exchange between telemetry services and diagnostic modules.<br />
  Implemented data ingestion and visualization workflows with Grafana and internal monitoring systems to track model health and system performance.<br />
  Applied the Model Context Protocol (MCP) to extend LLM context awareness for telemetry-driven insights.<br />
  Collaborated with the telemetry platform team with the goal of productionizing the prototype.
</motion.p>
<motion.div
  className="flex flex-row flex-wrap space-x-6 space-y-2"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <img
    src="https://img.shields.io/badge/C%23-181717?style=for-the-badge&logo=c-sharp&logoColor=white"
    alt="C#"
    className="w-12 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/JavaScript-181717?style=for-the-badge&logo=javascript&logoColor=white"
    alt="JavaScript"
    className="w-32 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/TypeScript-181717?style=for-the-badge&logo=typescript&logoColor=white"
    alt="TypeScript"
    className="w-32 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/MySQL-181717?style=for-the-badge&logo=mysql&logoColor=white"
    alt="SQL"
    className="w-25 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/React-181717?style=for-the-badge&logo=react&logoColor=white"
    alt="React"
    className="w-25 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/TailwindCSS-181717?style=for-the-badge&logo=tailwind-css&logoColor=white"
    alt="TailwindCSS"
    className="w-32 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
<img
  src="https://img.shields.io/badge/Azure-181717?style=for-the-badge&logo=microsoftazure&logoColor=white"
  alt="Microsoft Azure"
  className="w-18 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
/>

<img
  src="https://img.shields.io/badge/Grafana-181717?style=for-the-badge&logo=grafana&logoColor=white"
  alt="Grafana"
  className="w-25 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
/>
</motion.div>


    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <motion.time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"      
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} >September 2024 - May 2025</motion.time>
                <motion.h3 className="text-lg font-semibold text-gray-900 dark:text-white"
             initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
  >System Design Intern</motion.h3>
      <motion.p
  className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
>Aided the migration of IBM Relational Database “DOORS” to Seimen Polarions Database for Projects including Modules and the Objects. <br />
Collaborated with Senior Engineers in converting customer requirements into IT Architecture designs<br />
Actively engaged in code reviews and design discussions, learning industry best practices for system design and
coding standards.<br />
Automated repetitive tasks utilizing Python, reducing manual effort by 70% and increasing efficiency<br /></motion.p>
<motion.div
  className="flex flex-row flex-wrap space-x-6 space-y-2"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <img
    src="https://img.shields.io/badge/IBM-181717?style=for-the-badge&logo=ibm&logoColor=white"
    alt="IBM"
    className="w-15 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/IBM_DOORS-181717?style=for-the-badge&logo=ibm&logoColor=white"
    alt="IBM DOORS"
    className="w-25 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Siemens-181717?style=for-the-badge&logo=siemens&logoColor=white"
    alt="Siemens"
    className="w-25 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Polarion-181717?style=for-the-badge&logo=siemens&logoColor=white"
    alt="Polarion"
    className="w-25 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Python-181717?style=for-the-badge&logo=python&logoColor=white"
    alt="Python"
    className="w-25 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/System_Design-181717?style=for-the-badge&logo=microsoft&logoColor=white"
    alt="System Design"
    className="w-32 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Architecture-181717?style=for-the-badge&logo=azure-architecture-center&logoColor=white"
    alt="Architecture"
    className="w-32 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Code_Review-181717?style=for-the-badge&logo=github&logoColor=white"
    alt="Code Review"
    className="w-36 h-8 rounded-lg opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
</motion.div>


    </li>
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <motion.time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"      
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} >May 2024 - August 2024</motion.time>
                <motion.h3 className="text-lg font-semibold text-gray-900 dark:text-white"
             initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
  >Research AR & VR Development</motion.h3>
        <motion.p
  className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
>Developed an AR/VR teaching application using Unity and C# to support first-year students in learning Python, transforming theoretical concepts into an immersive, interactive environment.<br />
Built web forms using Node.js and Express.js, allowing students to input data, which is then processed and communicated to the AR/VR application to create an engaging learning experience. <br />
Enhanced user interaction with Tailwind CSS for intuitive web interfaces, streamlining the transition between website inputs and AR/VR visualizations <br /></motion.p>
<motion.div
  className="flex flex-row flex-wrap space-x-6 space-y-2"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <img
    src="https://img.shields.io/badge/Unity-181717?style=for-the-badge&logo=unity&logoColor=white"
    alt="Unity"
    className="rounded-lg w-20 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/C%23-181717?style=for-the-badge&logo=c-sharp&logoColor=white"
    alt="C#"
    className="rounded-lg w-12 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Python-181717?style=for-the-badge&logo=python&logoColor=white"
    alt="Python"
    className="rounded-lg w-26 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Node.js-181717?style=for-the-badge&logo=node.js&logoColor=white"
    alt="Node.js"
    className="rounded-lg w-26 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Express.js-181717?style=for-the-badge&logo=express&logoColor=white"
    alt="Express.js"
    className="rounded-lg w-26 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/TailwindCSS-181717?style=for-the-badge&logo=tailwind-css&logoColor=white"
    alt="TailwindCSS"
    className="rounded-lg w-32 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
</motion.div>


    </li>
        <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <motion.time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"      
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} >September 2023 - December 2023</motion.time>
                <motion.h3 className="text-lg font-semibold text-gray-900 dark:text-white"
             initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
  >Network Engineer Intern</motion.h3>
        <motion.p
  className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
> Created and modified scripts to manage certain alerts which increased customer utilization by more than 90% <br />
Developed, configured and deployed through network designs in order to successfully<br />
 Managed VMware vSphere environments, including server virtualization and resource allocation for optimal performance.<br />
Worked on technical/engineering activities to establish feasible system designs and subsystem requirements, utilizing extensive analysis and simulations.<br />
 </motion.p>
<motion.div
  className="flex flex-row flex-wrap gap-4"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: 'easeOut' }}
  viewport={{ once: true }}
>
  <img src="https://img.shields.io/badge/VMware-181717?style=for-the-badge&logo=vmware&logoColor=white" alt="VMware" className="rounded-lg w-26 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200" />
  <img src="https://img.shields.io/badge/vSphere-181717?style=for-the-badge&logo=vmware&logoColor=white" alt="vSphere" className="rounded-lg w-26 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200" />
  <img src="https://img.shields.io/badge/Python-181717?style=for-the-badge&logo=python&logoColor=white" alt="Python" className="rounded-lg w-26 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200" />
  <img src="https://img.shields.io/badge/Bash-181717?style=for-the-badge&logo=gnubash&logoColor=white" alt="Bash" className="rounded-lg w-20 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200" />
  <img src="https://img.shields.io/badge/Networking-181717?style=for-the-badge&logo=cisco&logoColor=white" alt="Networking" className="rounded-lg w-32 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200" />
  <img src="https://img.shields.io/badge/System_Design-181717?style=for-the-badge&logo=microsoft&logoColor=white" alt="System Design" className="rounded-lg w-32 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200" />
</motion.div>


    </li>
      <li className="ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <motion.time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"      
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} >May 2023 - Aug 2023</motion.time>
              <motion.h3 className="text-lg font-semibold text-gray-900 dark:text-white"
             initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
  >IT Analyst Intern</motion.h3>
      <motion.p
  className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }} 
>Created and modified scripts to manage certain alerts which increased customer utilization by more than 90% <br />
Developed, configured and deployed through network designs in order to successfully<br />
 Managed VMware vSphere environments, including server virtualization and resource allocation for optimal performance.<br />
Worked on technical/engineering activities to establish feasible system designs and subsystem requirements, utilizing extensive analysis and simulations.<br />
 </motion.p>

<motion.div
  className="flex flex-row flex-wrap space-x-6 space-y-2 "
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <img
    src="https://img.shields.io/badge/Scripting-181717?style=for-the-badge&logo=gnubash&logoColor=white"
    alt="Scripting"
    className="rounded-lg w-32 h- opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Automation-181717?style=for-the-badge&logo=python&logoColor=white"
    alt="Automation"
    className="rounded-lg w-32 h-8  opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Network_Design-181717?style=for-the-badge&logo=cisco&logoColor=white"
    alt="Network Design"
    className="rounded-lg w-32 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200" 
  />
  <img
    src="https://img.shields.io/badge/VMware_vSphere-181717?style=for-the-badge&logo=vmware&logoColor=white"
    alt="VMware vSphere"
    className="rounded-lg w-32 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/Virtualization-181717?style=for-the-badge&logo=virtualbox&logoColor=white"
    alt="Virtualization"
    className="rounded-lg w-32 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
  <img
    src="https://img.shields.io/badge/System_Design-181717?style=for-the-badge&logo=microsoft&logoColor=white"
    alt="System Design"
    className="rounded-lg w-32 h-8 opacity-75 hover:opacity-100 transition ease-in-out duration-200"
  />
</motion.div>

</li>  
</ol>
</div>

    </>
  )
}

export default Experience