import Link from 'next/link'
import React from 'react'

const ProductCard = ({productName,price,marketplace,link,image,key}) => {
  return (
    <div className={`${key === 0?'border-2 border-green-700':''}bg-white w-[95%] h-[15%] rounded-xl m-3 text-black shadow-xl`}>
      <container className="w-full h-full inset-1">

        <div className='flex flex-row items-center pl-5 justify-between h-full'>
            <div className='h-[100px] w-[20%]'><img src = {image} className='h-full w-full'/></div>
            <div className=' w-[200px] h-full text-2xl font-bold  flex justify-start items-center'><p>{marketplace}</p></div>
            <div className='text-3xl font-bold'>{price}</div>
            <button><Link href={link}>&rarr;</Link></button>
           
        </div>

      </container>
    </div>
  )
}

export default ProductCard
