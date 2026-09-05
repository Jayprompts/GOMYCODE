import React from 'react'
import Hero from '../components/hero'
import { useState, useEffect, useRef } from 'react'

const Home = () => {
  // getter     setter      hook      IV
  const [name, setName] = useState('Mary')
  const [data, setData] = useState('Mary')

  const nameRef = useRef('Mary')
  // const handleChange = () => {
  //   setName('Janet')
  // }
  const handleChange = () => {
    setName(nameRef.current.value)
    }

  useEffect(() => {
    handleChange()
  },[])

  return (
    <div>
        <Hero/>
      <p>{data}</p>
      <input type = "text" ref = {nameRef} placeholder = 'Enter your favourite character name'/>
      <button onClick={handleChange}>Change Name</button>
    </div>
  )
}

export default Home