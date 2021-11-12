import React, { useEffect, useState } from 'react'
import { getPrice } from '../api'

import Form from './Form'
import Art from './Art'
import Result from './Result'
import Score from './Score'

function App () {
  const [guessCheck, setGuessCheck] = useState({
    price: 0,
    guess: 0
  })
  const [toggle, setToggle] = useState(false)
  const [display, setDisplay] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    getPrice()
      .then(priceAPI => {
        console.log('Hacker strats, ', Number(priceAPI) * 10)
        setGuessCheck({ ...guessCheck, price: Number(priceAPI) * 10 })
        return null
      })
      .catch(err => console.error('Oops! You fucked up', err.message))
  }, [toggle])

  return (

    <section className="app-section">
      <div className='wrapper'>
        <div className='header'>
          {/* <img className="header-image" src="images/FernandexToni-DaisyDuck.jpg" /> */}
          <h1 className='title'>da Vinci Duckies</h1>
        </div>

        <div className="main-container">
          <div className='directions' >
            <h2>How much do you think the art is worth?</h2>
            <p>
          Directions: Look at the quacky artwork to the left - how much do you think it is worth?
          Type your answer below the duck, if you are within 10% of the real price, you get a point! You can see your points at the top of the page. When you get to 1 point, you win!
            </p>
            <div className="score">
              <Score count={count} />
            </div>
          </div>

          <Art toggle={toggle} setToggle={setToggle} display={display} setDisplay={setDisplay}/>
          {!display && <Form guessCheck={guessCheck} setGuessCheck={setGuessCheck} display={display} setDisplay={setDisplay}/>}
          {display && <Result guessCheck={guessCheck} count={count} setCount={setCount} />}
        </div>
      </div>
    </section>
  )
}

export default App
