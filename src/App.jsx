import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import MainArea from './Components/MainArea'



function App() {
 
  return (
    <div id = "container">
      <NavBar />
      <MainArea />
      
    </div>
  )
}

export default App