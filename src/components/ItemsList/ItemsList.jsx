import React from 'react'
import {ItemCard } from '../'
import { productListData } from '../../constants'

function ItemsList() {
  return (
    <div className='ml-64 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-3 w-full'>
     {productListData.map((item)=> (
      <ItemCard {...item}/>
     ))}
    </div>
  )
}

export default ItemsList