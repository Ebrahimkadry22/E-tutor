import React from 'react'
import { NavbarLinks } from '../../Data/data'
import { motion,AnimatePresence } from 'framer-motion'
const ResponesiveNavbar = ({isOpen}) => {
  return (
  <AnimatePresence mode='wait'>

  {
    isOpen && (
      <motion.div
      
      initial={{opacity:0,y: -100}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-100}}
      transition={{duration:0.3}}
      className='absolute top-20 left-0 w-full  z-20 '
      
      >

      <div className='bg-primary py-4 m-8 text-center font-semibold text-xl text-white rounded-3xl uppercase '>
        <ul className='flex flex-col justify-center items-center '>
          {
            NavbarLinks.map((links)=> {
              return (
                <li className='hover:bg-white w-full h-full hover:text-primary cursor-pointer py-3 transition-all duration-300' key={links.id}>{links.title}</li>
              )
            })
          }
        </ul>
      </div>
  
     </motion.div>
    )
  }

  </AnimatePresence>
  )
}

export default ResponesiveNavbar