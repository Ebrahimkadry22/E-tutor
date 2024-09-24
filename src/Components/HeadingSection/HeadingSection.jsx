import React from 'react'

const HeadingSection = ({heading , describetion}) => {
  return (
    <div className='space-y-4 p-6 text-center mb-8 max-w-[600px] mx-auto'>
      <h1 className='uppercase font-semibold text-orange-600'> {heading}</h1>
      <p className='text-3xl font-semibold'>{describetion}</p>
    </div>
  )
}

export default HeadingSection