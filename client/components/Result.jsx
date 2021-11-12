import React from 'react'

function Result({ guessCheck, setGuessCheck }) {

  function resultMessage() {

    
  }

  return (
    <>
      <div className="result-container">
        <h1>Result</h1>
        <h3></h3>
        <p>Your guess: {guessCheck.guess}</p>

        <p>The actual price: {guessCheck.price}</p>

      </div>
    </>
  )
}

export default Result
