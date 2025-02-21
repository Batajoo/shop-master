import React from 'react'
import {FilterOptionsList} from '..'
import { filterBarContent } from '../../constants'

function FilterBar() {
  return (
    <div className='bg-white px-7 py-5 text-black rounded-lg fixed w-64 left-2 h-screen'>
        <h2 className='text-2xl font-bold text-[#00879E]'>Filter</h2>
        {filterBarContent.map((item) => (
            <FilterOptionsList {...item} />
        ))}
        <button className='bg-orange-400 p-2 w-full my-2 rounded-md text-amber-50 text-lg font-bold'>Apply Filter</button>
    </div>
  )
}

export default FilterBar