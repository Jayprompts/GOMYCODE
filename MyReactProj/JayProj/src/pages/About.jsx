import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const About = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getAnime()
  })

  const getAnime = async() => {
    await axios.get ('https://dattebayo-api.onrender.com/characters').then(res => {
      const character = res.data.characters
      console.log(character)

        const info = character.map((val, index) => (
     <div className="card" style={{width: "18rem"}}>
        <img src={val.images[0]} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{val.name}</h5>
            <p className="card-text">{val.personal.birthdate}</p>
            <p className="card-text">{val.personal.sex}</p>
            <p className="card-text">{val.personal.clan}</p>
            <Link href="#" className="btn btn-primary">Go somewhere</Link>
        </div>
    </div>
  ) )
  setData(info)
  }).catch(err => {
    console.log(err)
  })
  }



 

  return (
    <div>{data}</div>
  )
}

export default About