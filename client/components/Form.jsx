import React, { useState } from 'react'
import { postGuess } from '../api'

function guessingForm (props) {
  const [input, setInput] = useState(0)

  function handleChange (event) {
    setInput(event.target.value)
  }
  
  function handleAdd (event) {
    event.preventDefault()
    
    if (isNaN(input)) {
      setInput(0)
      console.log('write a number dork')
      return
    }
    postGuess(Number(input))
      .then(response => {
        console.log(response)
        setInput(0)
        return null
      })
    .catch(err => console.error('You can\'t even submit a form! ', err.message))
  }

  return (
    <>

      <form action="POST">
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
