import React, { useEffect } from 'react'
import { getPrice } from '../api'

function App() {
  
// Test to make sure getPrice works as intended
  
  // useEffect(() => {
  //   getPrice()
  //     .then(price => {
  //       console.log('This is the price', price)
  //       return null
  //     })
  //     .catch(err => console.error('Oops! You fucked up', err.message))
  // }, [])


  return (
    <div>
      <h1>da Vinci Duckies</h1>
    </div>
  )
}

export default App
