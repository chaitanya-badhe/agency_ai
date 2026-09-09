import React from 'react'
import {easeOut, motion} from "motion/react"

const Title = ({ title, desc }) => {
  return (
    <>
      <motion.h1 
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1 ,y:0}}
      transition={{duration:0.6}}
      viewport={{once:true}}
      
      className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        {title}
      </motion.h1>
      <motion.p
      initial={{opacity:0,y:20}}
      whileInView={{opacity:1 ,y:0}}
      transition={{duration:0.5,delay:0.2}}
      viewport={{once:true}}
      
      className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">
        {desc}
      </motion.p>
    </>
  )
}

export default Title
