import React, { useEffect, useState } from 'react'

import Form from './Form'
import Art from './Art'
import Result from './Result'

import { getPrice } from '../api'

function App () {
  // const [art, setArt] = useState([])
  const [price, setPrice] = useState(0)

  // Test to make sure getPrice works as intended
  useEffect(() => {
    getPrice()
      .then(priceAPI => {
        // console.log('This is the price', price)
        setPrice(priceAPI)
        return null
      })
      .catch(err => console.error('Oops! You fucked up', err.message))
  }, [])

  return (

    <div className='wrapper'>
      <div className='header'>
        <img className="header-image" src="images/FernandexToni-DaisyDuck.jpg" />
        <h1 className='title'>da Vinci Duckies</h1>
      </div>

      <div className="body">
        <h3>How much do you think the art is worth?</h3>
        <Art />
        <Form />
        <Result price={price} setPrice={setPrice}/>
      </div>
    </div>

  )
}

export default App
