import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
        <div className='parent_container'>
          <div  className='first_child'>
            
          </div>
          <div  className='second_child'>
            <Outlet/>
          </div>

        </div>
    </>
  )
}

export default App
