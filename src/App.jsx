import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'
import { Outlet, useLoaderData } from 'react-router-dom'

function App() {
    
  return (
    <div className="App">
       <Header/>
       <Outlet></Outlet>
        
    </div>
  )
}

export default App
