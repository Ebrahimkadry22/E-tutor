import React from 'react'
import { MdArrowRight} from 'react-icons/md'
import HeroImage from '../../assets/image/hero-Dv8sjFKx.png'
import { motion } from 'framer-motion'
import {SlideRight} from '../../Utility/animation'
const Hero = () => {
  return (
    <main>
<div className='container md:py-14 grid grid-cols-1 md:grid-cols-2 ' >
{/* left div */}
<div className='flex justify-center flex-col py-10 md:pr-16 xl:pr-40 md:py-14 font-playfair gap-2'>
  <motion.p 

   variants={SlideRight(0.4)}
   initial="hidden"
   animate="visible"
   
  className='text-orange-600 uppercase font-semibold'>100% Satisfaction Guarantee</motion.p>
  <motion.h1
  variants={SlideRight(0.6)}
  initial="hidden"
  animate="visible"
  className='text-5xl lg:text-6xl font-semibold !leading-tight'>Find Your Perfect <span className='text-primary'>Tutor</span></motion.h1>
  <motion.p 
  variants={SlideRight(0.8)}
  initial="hidden"
  animate="visible"
  className='text-gray-600 xl:max-w[500px]'>We help you find perfect tutor for 1-on-1 lessons. It is completely free and private</motion.p>
  <motion.div
  variants={SlideRight(1.0)}
  initial="hidden"
  animate="visible"
  className='flex items-center gap-2 mt-5'>
    <button className='primary-btn text-xl'>Get Started</button>

    <button className='flex items-center font-semibold gap-2'> <span className='w-10 h-10 bg-secondary/15 flex items-center justify-center text-5xl rounded-full text-secondary '>
    <MdArrowRight  />
      </span> See how it works</button>
  </motion.div>

</div>
{/* right div */}
<div className='flex justify-center items-center'>
  <motion.img 
  initial={{ opacity: 0, x: 200 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
  className='w-[350px] md:w-[500px] lg:w-[700px]' src={HeroImage} alt="" />
</div>

</div>

    </main>
  )
}

export default Hero