import React from 'react'

function ItemCard({
    name,
    imgSrc,
    price,
    stock
}) {
  return (
    <div className='min-w-40 shadow-lg rounded-lg bg-white'>
        <img className='w-full h-60 rounded-t-lg object-cover' 
            src={imgSrc}

        />
        <p className='text-xl font-medium p-2'>{name}</p>
        <p className='flex justify-between px-2'>
            <span className='text-orange-400 text-lg font-bold'>${price}</span>
            <span className='text-gray-500'>In Stock: {stock}</span>
        </p>
        <p className='px-2 py-2'>
            <button className='bg-orange-400 text-md py-2 px-4 font-bold text-[#FFF2DB] rounded-md mr-2'>Add to Cart</button>
            <button className='text-md bg-gray-200 py-2 px-4 font-bold'>Edit</button>
        </p>
    </div>
  )
}

export default ItemCard