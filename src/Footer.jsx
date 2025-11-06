import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white font-Poppins flex flex-row lg:justify-evenly justify-around items-center w-screen'>
        <div className='lg:m-10 m-6'>
            <p>© 2025 Muzzamil Naqvi</p>
        </div>


        <div className='flex flex-row space-x-2'>
            <a className='underline' href='https://github.com/MuzzammilN'>Github</a>
            <a className='underline' href="https://linkedin.com/in/naqvimuzzammil">Linkedin</a>
            <a className='underline' href="mailto:naqvimuzzammil@gmail.com">Gmail</a>
        </div>
    </div>
  )
}

export default Footer