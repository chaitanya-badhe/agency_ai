import React from 'react'

const Title = ({title,desc}) => {
  return (
    <>
        <h2 className ='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{title}</h2>
        <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">{desc}</p>
    </>
  )
}

export default Title
