import { useState } from 'react'

import User from './Components/User'
import {Route,Routes} from 'react-router-dom'
import AddUser from './Components/AddUser'
import UpdateUser from './Components/UpdateUser'
import Header from './Components/Header'

// route v6 or v5 

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element= {<User/>}/>
      <Route path='/add' element= {<AddUser/>}/>
      <Route path='/edit/:id' element= {<UpdateUser/>}/>
    </Routes>
    </>
 
  )
}

export default App
