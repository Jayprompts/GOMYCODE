import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Navbar from "./components/Navbar"
import Jokes from './pages/Jokes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/jokes" element={<Jokes/>}/>

      </Routes>
    </div>
  )
}

export default App
