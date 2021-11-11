import React, { useEffect, useState } from 'react'
import Home from './Home'

import { getPrice } from '../api'

function App () {
  // const [art, setArt] = useState([])

  // Test to make sure getPrice works as intended
  useEffect(() => {
    getPrice()
      .then(price => {
        console.log('This is the price', price)
        return null
      })
      .catch(err => console.error('Oops! You fucked up', err.message))
  }, [])

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
