import React from 'react'
import HeadingSection from '../HeadingSection/HeadingSection'
import { motion } from 'framer-motion';
import {SlideLeft} from '../../Utility/animation'
import { GrYoga } from 'react-icons/gr';
import { FaDumbbell } from 'react-icons/fa6';
import { GiGymBag } from 'react-icons/gi';

const WhyChooseData = [
  {
    id: 1,
    title: "One-on-one Teaching",
    desc: "All of our special education experts have a degree in special education.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: "Our tutors are always available to respond as quick as possible for you",
    link: "/",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard equipped with audio and video chat fetures.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Choose an expert tutor based on your budget and per hour.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];
const Chooseus = () => {
  return (
    <div className='bg-[#f9fafc]'>

    <div className='container py-24'>
      <HeadingSection heading={'Why Choose us'} describetion={'Benefits of online tutoring services with us'}/>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

    {
      WhyChooseData.map((item , index) => {
        return (
          <motion.div

          variants={SlideLeft(item.delay)}
          initial="hidden"
          whileInView={"visible"}

          key={index} className='space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]'>
        <div className='w-10  h-10 rounded-md flex items-center justify-center text-white' style={{backgroundColor : item.bgColor}} >
          <div className='text-2xl'>{item.icon}</div>
        </div>
          <p className='font-semibold'>{item.title}</p>
          <p className='text-sm text-gray-500'>{item.desc}</p>

      </motion.div>
        )
      } )
    }

      



    </div>
    </div>
    
    </div>
  )
}

export default Chooseus