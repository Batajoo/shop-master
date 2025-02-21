import React from 'react'
import { headerList } from '../../constants'

function Header() {
  return (
    <header className='flex justify-between h-20 items-center px-10 bg-blue-950 fixed w-full top-0'>
        <h1 className='text-4xl font-medium text-[#FFF2DB] '>Shop Master</h1>
        <ul className='flex gap-5 text-2xl text-white items-center'>
            <li className='bg-[#00879E] p-2 rounded-md'>Products</li>
            <li >Cart</li>
            <li>Logout</li>
        </ul>
    </header>
  )
}

export default Header