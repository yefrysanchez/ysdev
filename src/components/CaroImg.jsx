import React from 'react'

const CaroImg = ({img}) => {
  return (
    <div className='relative'>
        <img className='w-full h-[700px] object-cover' src={img} alt="banner img" />
        <div>
            <h1>Text</h1>
        </div>
    </div>
  )
}

export default CaroImg