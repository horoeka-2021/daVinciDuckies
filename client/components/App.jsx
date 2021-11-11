import React, { useEffect, useState } from 'react'
import Home from './Home'

import { getPrice } from '../api'



function App () {
  // const [art, setArt] = useState([])
  const [price, setPrice] = useState(0)

  // Test to make sure getPrice works as intended
  useEffect(() => {
    getPrice()
      .then(p => {
        // console.log('This is the price', price)
        setPrice(p)
        return null
      })
      .catch(err => console.error('Oops! You fucked up', err.message))
  }, [])

  return (
    <div>
      <Home price={price} setPrice={setPrice}/>
    </div>
  )
}

export default App
