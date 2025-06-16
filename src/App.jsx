import React from 'react'
import Home from './pages/Homes/Home'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id'element={<player/>}/>
      </Routes>
      
    </div>
  )
}

export default App