import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {
    const [username,setUsername] =  useState('')
    const [email,setEmail] =  useState('')
    const [phone,setPhone] =  useState('')
    const [address,setAddress] =  useState('')
    const nav =  useNavigate()
    const [loading,setLoading] = useState(false)
    const handleSubmit  = async(e)=>{
        e.preventDefault()
        const formData  = new FormData()
        if(username){
          console.log('exists')
        }else{
          consoel.lgo('Not ')
        }
        
        try {
          const {data} = await  axios.post("/api/create-user",{
            username,
            email,
            phone,
            address,
            
          })
          console.log('data from the server',data)
          nav('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='mt-32 border-2 max-w-lg m-auto border-gray-200 shadow-lg p-5 rounded-lg'>
        <form onSubmit={handleSubmit} className=' m-auto'>
            <div className='flex flex-col gap-5'>
                <input onChange = {(e)=>setUsername(e.target.value)} className='h-[50px] rounded-lg pl-3 w-full border-2 p-5'   type = 'text' placeholder='username'/>
                <input onChange = {(e)=>setEmail(e.target.value)}  className='h-[50px] rounded-lg pl-3 w-full border-2'  type = 'email' placeholder='email'/>
                <input onChange = {(e)=>setPhone(e.target.value)}  className='h-[50px] rounded-lg pl-3 w-full border-2 p-5'  type = 'number' placeholder='phone'/>
                <input onChange = {(e)=>setAddress(e.target.value)}  className='h-[50px] rounded-lg pl-3 w-full border-2 p-5'  type = 'text' placeholder='address'/>
                <button type='submit' className='px-3 py-2 text-white bg-black '>Submit</button>
            </div>
        </form>
    </div>
  )
}
