import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Shop = () => {

    const [products, setProducts] = useState('List of products')

    useEffect(() => {
        getProducts()
      },[])

      const getProducts = async () => {
      await axios.get('https://fakestoreapi.com/products').then(res => {
        const allData = res.data
        console.log(allData)
        setProducts(allData)

           const info = allData.map((val, index) => (
     <div className="card" key={index} style={{width: "18rem"}}>
        <img src={val.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{val.title}</h5>
            <p className="card-text">{val.description}</p>
            <p className="card-text">{val.category}</p>
            <p className="card-text">{val.price}</p>
            <Link href="#" className="btn btn-primary">Go somewhere</Link>
        </div>
    </div>
           ))
           setProducts(info)
      }).catch(err => {
        console.log(err)
      })
    }
    return (
      <div>{products}</div>
    )
  }

export default Shop