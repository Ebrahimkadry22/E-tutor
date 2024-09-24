import {React,  useState } from 'react'
import { MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'

const NavbarBanner = () => {
  const [isOpen,SetIsOpen] = useState(true)
  return (
    
      isOpen && (
      <motion.div 
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.7 }}

      className='bg-primary font-semibold text-sm text-center p-1 hidden md:block relative'>
      <p className='flex justify-center items-center'>
      Are you a university or school student for an online tutoring partnership?
      <a href="#" className='ml-1 text-secondary font-bold'>Talk to us</a>
      <span className='ml-5 cursor-pointer absolute right-28' onClick={()=> SetIsOpen(!isOpen)}>
        <MdClose />
      </span>
      </p>
    </motion.div>
      )
  )
}

export default NavbarBanner