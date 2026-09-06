import React from 'react'

const Title = ({ title, desc }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
        {title}
      </h1>
      <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-6">
        {desc}
      </p>
    </>
  )
}

export default Title
