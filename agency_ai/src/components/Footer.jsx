import React from 'react'
import assets from '../assets/assets'
import {easeOut, motion} from "motion/react"

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40'
    >
      <div className='max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-0'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={assets.logo}
              className='w-32 sm:w-44'
              alt=''
            />

            <p className='max-w-md mt-7'>
              From strategy to execution, we craft digital solutions that move your business forward.
            </p>

            <ul className='flex gap-8 mt-7'>
              <li>
                <a className='hover:text-primary' href='#hero'>
                  Home
                </a>
              </li>

              <li>
                <a className='hover:text-primary' href='#Services'>
                  Services
                </a>
              </li>

              <li>
                <a className='hover:text-primary' href='#OurWork'>
                  Our Work
                </a>
              </li>

              <li>
                <a className='hover:text-primary' href='#Contact-Us'>
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-gray-600 dark:text-gray-400'
          >
            <h3 className='font-semibold'>
              Subscribe to our newsletter
            </h3>

            <p className='text-sm mt-2 mb-6'>
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>

            <div className='flex w-full'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 p-3 text-sm outline-none rounded-l border border-gray-300 dark:border-gray-500 dark:text-gray-200 bg-transparent'
              />

              <button className='bg-primary text-white rounded-r px-6'>
                Subscribe
              </button>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='border-t border-gray-300 dark:border-gray-700 mt-8 py-8 flex justify-between items-center'
        >
          <p className='text-gray-600 dark:text-gray-400'>
            Copyright 2025 © GreatStack - All Right Reserved.
          </p>

          <div className='flex items-center gap-5'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.instagram_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Footer
