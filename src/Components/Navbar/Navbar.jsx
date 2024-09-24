import React, { useState } from 'react'
import {NavbarLinks} from '../../Data/data'
import { motion } from 'framer-motion'
import { MdClose, MdComputer, MdMenu } from 'react-icons/md'
import ResponesiveNavbar from './ResponesiveNavbar'
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    
    <motion.div 
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.5, delay: 0.5 }}
    >

      <div className='container flex justify-between py-6'>

        {/* {logo section } */}
        <div className='text-2xl flex items-center gap-2 font-bold'>
          <MdComputer className='text-3xl text-secondary' />
          <p >E-Tutor</p>
        </div>
        {/* {meun section } */}
        <div className='hidden lg:block'>

          <ul className='flex items-center gap-6'>

            {
              NavbarLinks.map((link)=> {
                return (
                  <li key={link.id}>
                    <a className='inline-block text-gray-600 text-sm
                    xl:text-base py-1 px-2 xl:px-3  
                    hover:text-secondary duration-300 transition-all font-semibold
                    '
                     href={link.link}>{link.title}</a>
                  </li>
                )
              })
            }

          </ul>

        </div>
        {/* {CTA Button section } */}
        <div className=' hidden lg:block space-x-3'> 
          <button className='
          font-semibold px-6 py-2 border border-secondary rounded-full
          hover:text-secondary transition-all duration-300
          ' > Sign in</button>
          <button className='text-white bg-secondary 
          font-semibold rounded-full px-6 py-2
          '> Register</button>
        </div>
        {/* {Mobile Hamburger section } */}
        <div className='lg:hidden' onClick={()=> setIsOpen(!isOpen)}>
          {
            isOpen ? <MdClose className='text-4xl cursor-pointer' /> : <MdMenu className='text-4xl cursor-pointer' />
          }
        </div>

      </div>



    </motion.div>

    <ResponesiveNavbar isOpen={isOpen}/>
    
    
    </>
  )
}

export default Navbar