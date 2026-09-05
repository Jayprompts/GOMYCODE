import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'

const Contact = () => {

  const [countries, setCountries] = useState('List of Countries')

  useEffect(() => {
    getCountries()
  },[])

  const getCountries = async () => {
    await axios.get('https://countries.dev/countries').then(res => {
      const allData = res.data
      console.log(allData)

      const info = allData.map((val, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{val.name}</td>
          <td>{val.capital}</td>
          <td>{val.region}</td>
          <td><img src={val.flags?.png} alt = "" height = {40} width = {40}/></td>
        </tr>
      ))
      setCountries(info)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <table className = 'table'>
        <tr>
          <th>S/N</th>
          <th>NAME</th>
          <th>CAPITAL</th>
          <th>REGION</th>
          <th>FLAGS</th>
        </tr>
        {countries}
      </table>
    </div>
  )
}

export default Contact