import React from 'react'

const IndustryImages = ({images}) => {
    console.log(images);
    
  return (
    <div className=" p-12 w-[85%]">

<div className='flex gap-3 flex-wrap justify-center'>
{images.map((image, index) => (
        <img
          key={index} 
          src={image}
          alt={`Industry ${index + 1}`}
          className="w-40 h-30 border-1 border-gray-200 object-cover p-4 "
          loading="lazy"
        />
      ))}
</div>

      
    </div>

  )
}

export default IndustryImages