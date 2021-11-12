import React, { useState } from 'react'
import { postGuess } from '../api'

function guessingForm ({ guessCheck, setGuessCheck, setDisplay, display }) {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState(false)

  function handleChange (event) {
    setInput(event.target.value)
  }

  function handleAdd (event) {
    event.preventDefault()

    if (isNaN(input)) {
      setInput(0)
      displayMessage()
      return
    }
    postGuess(Number(input))
      .then(response => {
        setInput(0)
        setGuessCheck({ ...guessCheck, guess: response.input })
        setDisplay(!display)
        return null
      })
      .catch(err => console.error('You can\'t even submit a form! ', err.message))
  }

  function displayMessage() {
    setMessage(true)
    setTimeout(hideMessage, 2000)
  }

  function hideMessage() {
    setMessage(false)
  }

  return (
    <>
      {message && <p>Try adding a number dingus</p>}

      <form>
        <fieldset>
          <legend>Make A guess</legend>
          <label>
            <span>Price</span>
            <input name="price" value={input} onChange={handleChange}/>
          </label> <br />

          <button onClick={handleAdd}>Guess</button>

        </fieldset>
      </form>
    </>
  )
}

export default guessingForm
