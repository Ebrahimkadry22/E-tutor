import React from 'react'
import { FaBook, FaComputer } from 'react-icons/fa6';
import HeadingSection from '../HeadingSection/HeadingSection';
import { motion } from 'framer-motion';
const subjectList = [
  {
    id: 1,
    name: "Engineering",
    icon: <FaComputer />,
    color: "#0063ff",
    delay: 0.2,
  },
  {
    id: 2,
    name: "English",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.3,
  },
  {
    id: 3,
    name: "Programming",
    icon: <FaComputer />,
    color: "#922aee",
    delay: 0.4,
  },
  {
    id: 4,
    name: "Science",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.5,
  },
  {
    id: 5,
    name: "History",
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6,
  },
  {
    id: 6,
    name: "Psychology",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7,
  },
  {
    id: 7,
    name: "Web design",
    icon: <FaBook />,
    color: "#b93838",
    delay: 0.8,
  },
  {
    id: 8,
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9,
  },
];
const Subject = () => {
  return (
    <div className='container py-14'>
      <HeadingSection heading={'Our tutor subjects'} describetion={'Find Online Tutor in Any Subject'} />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>



        {
          subjectList.map((item ,index)=> {
            return (
              <motion.div 
              
              initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: item.delay,
                }}

              key={index} className='border rounded-lg border-seconder/20 p-4 flex justify-start items-center gap-4 cursor-pointer
              hover:scale-105 hover:shadow-xl duration-200
              '>
        
        <div 
        style={{
          backgroundColor : item.color + '20',
          color : item.color
        }}
        
        className={`w-10 h-10 rounded-md flex justify-center items-center`}>
          {item.icon}
        </div>
        <p>{item.name}</p>
      

        </motion.div>
            )
          })
        }
        
      

      </div>
    </div>
  )
}

export default Subject