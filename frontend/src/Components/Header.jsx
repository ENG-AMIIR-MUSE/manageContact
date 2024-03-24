import React from 'react'
import {Link} from 'react-router-dom'
import {FaPlus} from 'react-icons/fa'
export default function Header() {
  return (
    <div className='flex items-center justify-between px-32 h-[50px]  py-2 bg-black '>

        <div>
            <h1 className='text-white font-bold text-xl'>Manage Contact</h1>
        </div>
        <ul className='flex items-center gap-5 text-xl py-2 '>
            <Link to={'/'} className='text-white '>Home</Link>
            <Link to={'/add'} className='text-white flex flex-col  items-center justify-center '>
                <FaPlus/>
               
            
            </Link>
            
        </ul>
    </div>
  )
}
