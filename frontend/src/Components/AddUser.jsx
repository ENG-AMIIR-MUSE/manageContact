import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Formik,Form ,Field,ErrorMessage} from 'formik'

import *  as Yup from 'yup'

export default function AddUser() {
  
    const nav =  useNavigate()
    const [loading,setLoading] = useState(false)
    const validationSchema  = Yup.object({
      // username:Yub.string().required('Username is required'),
      username:Yup.string().required('email is required'),
      email:Yup.string().required('email is required'),
      phone:Yup.number().required('phone is required'),
      address:Yup.string().required('address is required')
    })
    const initialValues  = {
      username:'',
      email:'',
      phone:'',
      address:''
    }
    const handleSubmit = (values)=>{
      register(values)
    }
    const register  = async(values)=>{
        
       
        
        try {
          const {data} = await  axios.post("/api/create-user",values)
          console.log('data from the server',data)
          nav('/')
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='mt-32 border-2 max-w-lg m-auto border-gray-200 shadow-lg p-5 rounded-lg'>
      <Formik
      initialValues={initialValues}
      validationSchema={ validationSchema}
    onSubmit={handleSubmit}
      >

        <Form  className=' m-auto'>
            <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-xl'>Add New User</h1>
                <Field  className='h-[50px] rounded-lg pl-3 w-full border-2 p-5'   type = 'text' name='username' placeholder= 'username'/>
                <ErrorMessage name='username'/>
                <Field   className='h-[50px] rounded-lg pl-3 w-full border-2'  type = 'email' name='email' placeholder = 'email'/>
                <ErrorMessage name='email'/>
               
                <Field   className='h-[50px] rounded-lg pl-3 w-full border-2 p-5'  type = 'number' name='phone' placeholder = 'Phone Number'/>
                <ErrorMessage name='phone'/>

                <Field   className='h-[50px] rounded-lg pl-3 w-full border-2 p-5'  type = 'text' name='address' placeholder='address'/>
                <ErrorMessage name='address'/>
               
                <button type='submit' className='px-3 py-2 text-white bg-black '>Submit</button>
            </div>
        </Form>
      </Formik>
    </div>
  )
}
