import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'

import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/user-login/UserLogin'
import CaptainLogin from './pages/CaptainLogin'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/user-signup' element={<UserSignup />}/>
        <Route path='/captain-signup' element={<CaptainSignup />}/>
        <Route path='/user-login' element={<UserLogin />}/>
        <Route path='/captain-login' element={<CaptainLogin />}/>
      </Routes>
    </div>

  
  
  )
}

export default App
