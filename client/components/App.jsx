import React, { useEffect, useState } from 'react'
import { getPrice } from '../api'

import Form from './Form'
import Art from './Art'
import Result from './Result'

function App () {
  // const [art, setArt] = useState([])
  const [guessCheck, setGuessCheck] = useState({
    price: 0,
    guess: 0
  })
  const [toggle, setToggle] = useState(false)
  const [display, setDisplay] = useState(false)
  const [count, setCount] = useState(0)

  // Test to make sure getPrice works as intended
  useEffect(() => {
    getPrice()
      .then(priceAPI => {
        // console.log('This is the price', price)
        setGuessCheck({ ...guessCheck, price: Number(priceAPI) * 10 })
        return null
      })
      .catch(err => console.error('Oops! You fucked up', err.message))
  }, [toggle])

  return (

    <div className='wrapper'>
      <div className='header'>
        <img className="header-image" src="images/FernandexToni-DaisyDuck.jpg" />
        <h1 className='title'>da Vinci Duckies</h1>
      </div>

      <div className="body">
        <h3>How much do you think the art is worth?</h3>
        <Art toggle={toggle} setToggle={setToggle} display={display} setDisplay={setDisplay}/>
        {!display && <Form guessCheck={guessCheck} setGuessCheck={setGuessCheck} display={display} setDisplay={setDisplay}/>}
        {display && <Result guessCheck={guessCheck} setGuessCheck={setGuessCheck} count={count} setCount={setCount} />}
      </div>
    </div>

  )
}

export default App
