import React, { useState } from 'react'

function guessingForm (props) {
  const [input, setInput] = useState(0)

  function handleChange (event) {
    setInput(event.target.value)
  }

  function handleAdd (event) {
    event.preventDefault()
  }

  return (
    <>

      <form action="">
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
