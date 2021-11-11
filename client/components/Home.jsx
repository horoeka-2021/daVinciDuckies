import React, { useState, useEffect } from 'react'
import Form from './Form'
import Art from './Art'
import { getPrice } from '../api'

function Home () {
  // const [art, setArt] = useState([])
  const [guessCheck, setGuessCheck] = useState({
    price: 0,
    guess: 0
  })
  const [toggle, setToggle] = useState(false)

  // Test to make sure getPrice works as intended
  useEffect(() => {
    getPrice()
      .then(newPrice => {
        console.log(guessCheck)
        return setGuessCheck({ ...guessCheck, price: Number(newPrice) })
      })
      .catch(err => console.error('Oops! You fucked up', err.message))
  }, [toggle])

  // const [test, setTest] = useState([])
  return (
    <div className='wrapper'>

      <div className='header'>
        <img className="header-image" src="images/FernandexToni-DaisyDuck.jpg" />
        <h1 className='title'>da Vinci Duckies</h1>
      </div>

      <div className="body">
        <h3>How much do you think the art is worth?</h3>
        <Art />
        <Form guessCheck={guessCheck} setGuessCheck={setGuessCheck} toggle={toggle} setToggle={setToggle}/>
      </div>
    </div>
  )
}

export default Home
