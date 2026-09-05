import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import viteLogo from '../assets/vite.svg'

const Hero = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div>
      <Card img={viteLogo} title='Working Man' desc='A movie'/>
      <Card img={viteLogo} title='Encanto' desc='A Movie'/>
      <Card img={viteLogo} title='The Odyssey' desc='A Trojan Movie'/>
</div>
    </div>
  )
}

export default Hero