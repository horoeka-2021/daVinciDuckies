import React, { useEffect, useState } from 'react'

function Result ({ guessCheck, setGuessCheck, setCount, count }) {
  const { guess, price } = guessCheck
  console.log(guessCheck)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (guess > price * 0.9 && guess < price * 1.1) {
      setMessage('You win!')
      setCount(count + 1)
    } else {
      setMessage('You suck!')
    }
  }, [])

  return (
    <>
      <div className="result-container">
        <h1>Result</h1>
        <h3>{message}</h3>
        <p>Your guess: {guess}</p>

        <p>The actual price: {price}</p>
        <p>Your wins: {count}</p>
      </div>
    </>
  )
}

export default Result
