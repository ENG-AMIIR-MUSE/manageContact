import React, { useState } from 'react'
import {FaSearch,FaTrash,FaEdit} from 'react-icons/fa'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function User() {
    const [data,setData ]  = useState([])
console.log('data',data)
    useEffect(()=>{
            const getData  = async()=>{
                const {data}  =  await axios.get('/api/users')
                // console.log('data from',data)
                setData(data)
            }
            getData()

    },[])
  return (
    <div className='h-screen flex flex-col justify-center items-center '>
       

        {/* search  */}
         <div className='mb-[30px]'>
        <input type= 'text' className='h-[50px] pl-4 rounded-lg border border-gray-200 mb-2 w-[300px]' placeholder='Search user'/>
        <button className='py-2 px-3 ml-2'><FaSearch size={20} /></button>
         </div>
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {data?.map((user)=>{
                return (
                    <div className='bg-white rounded-lg shadow-lg p-5 border-2 border-gray-200' >
                    <div className='flex items-center gap-5'>
                    <span className='font-bold text-xl '>Username:</span>
                    <span>{user.username}</span>
                    </div>
                    <div className='flex items-center gap-5'>
                    <span className='font-bold text-xl'>Email:</span>
                    <span>{user.email}</span>
                    </div>
                    <div className='flex items-center gap-5'>
                    <span className='font-bold text-xl'>PHone:</span>
                    <span>{user.phone}</span>
                    </div>
                    <div className='flex items-center gap-5'>
                    <span className='font-bold text-xl'>Addres:</span>
                    <span>{user.address}</span>
                    </div>
                    <span className='flex  items-center flex-end  justify-end gap-5 text-red-500 mt-2'>
                        <Link to={`/edit/${user._id}`}> 
                        <FaEdit/>
                        
                        </Link>
                        <Link to={`/delete/${user._id}`}>
                        <FaTrash/>
                        </Link>
                    </span>
                   
                </div>
                )
            })}
           
          
        </div>

    </div>
  )
}
