import React from 'react'

function FilterOptionsList({name, options}) {
  return (
    <div className='py-2 w-full h-auto'>
        <h3 className='text-xl font-medium text-[#00879E]'>{name}</h3>
        <select className='w-full text-lg rounded-sm border p-1'>
            {options.map((item)=>(
                <option key={item} >
                    {item}
                </option>
            ))}
        </select>
    </div>
  )
}

export default FilterOptionsList