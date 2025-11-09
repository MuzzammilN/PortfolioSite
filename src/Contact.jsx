import React, { useState } from 'react'
import { motion } from 'framer-motion';

import emailjs  from '@emailjs/browser';

const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const Contact = () => {

  const [Form, setFormValues] = useState({Name: "", Email: "", Company: "", Description: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(service,template,Form, {
      publicKey: publicKey,
    }).then(() => {
      console.log("Success");
      setFormValues({Name: "", Email: "", Company: "", Description: ""});
    }).catch((error) => {
      console.log(error)
    });
  }
    
  return (
<div className='bg-black'>
    <div className='flex justify-center'>
    <motion.h1 
        initial = {{opacity: 0, y: 30}}
        whileInView= {{ opacity: 1, y: 0}}
        transition={{duration: 1.0, ease:"easeOut"}}
        viewport={{once: true}}
        className='font-MonoSig text-white text-4xl pt-20 mb-15'>
        Contact Me
    </motion.h1>
    </div>

<form class="max-w-md mx-auto font-Poppins" onSubmit={handleSubmit} >
<motion.div 
        initial = {{opacity: 0, y: 30}}
        whileInView= {{ opacity: 1, y: 0}}
        transition={{duration: 1.0, ease:"easeOut"}}
        viewport={{once: true}}
        class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input onChange={(e) => setFormValues({...Form, Name: e.target.value})} value={Form.Name}
    type="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='John Doe'required />
</motion.div>

  <motion.div class="mb-5"
          initial = {{opacity: 0, y: 30}}
        whileInView= {{ opacity: 1, y: 0}}
        transition={{duration: 1.0, ease:"easeOut"}}
        viewport={{once: true}}
        >
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
    <input onChange={(e) => setFormValues({...Form, Email: e.target.value})} value={Form.Email}
    type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
  </motion.div>

    <motion.div 
        initial = {{opacity: 0, y: 30}}
        whileInView= {{ opacity: 1, y: 0}}
        transition={{duration: 1.0, ease:"easeOut"}}
        viewport={{once: true}}
    class="mb-5">
    <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Company</label>
    <input onChange={(e) => setFormValues({...Form, Company: e.target.value})} value={Form.Company}
    type="company" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Company X" />
  </motion.div>


  <motion.div 
          initial = {{opacity: 0, y: 30}}
        whileInView= {{ opacity: 1, y: 0}}
        transition={{duration: 1.0, ease:"easeOut"}}
        viewport={{once: true}}
        class="mb-5">
  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
  <textarea onChange={(e) => setFormValues({...Form, Description: e.target.value})} value={Form.Description}
  id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hi Muzzammil, I’m a recruiter and came across your profile — it looks impressive! I’d love to schedule a chat to discuss potential opportunities."></textarea>
  </motion.div>

    <motion.div 
        initial = {{opacity: 0, y: 30}}
        whileInView= {{ opacity: 1, y: 0}}
        transition={{duration: 1.0, ease:"easeOut"}}
        viewport={{once: true}}
    className='flex justify-center'>
        <button type="submit" class="text-black px-auto bg-white hover:opacity-40 font-bold  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-white dark:hover:bg-white-700 dark:focus:ring-white-800 transition ease-in-out duration-300 mb-4">Submit</button>
    </motion.div>
  
</form>
</div>

  )
}

export default Contact