import React, { useEffect, useState } from 'react'

function Result ({ guessCheck, setCount, count }) {
  const { guess, price } = guessCheck
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (guess > price * 0.9 && guess < price * 1.1) {
      setMessage('Well done! You have an eye for fine ducks')
      setCount(count + 1)
    } else if (guess < price * 0.9) {
      setMessage('How dare you!')
    } else {
      setMessage('You want to pay how much!?!')
    }
  }, [])

  return (
    <>
      <div className="result-container">
        <h1>Result</h1>
        <h3>{message}</h3>
        <p>Your guess: ${guess}</p>
        <p>The actual price: ${price}</p>
      </div>
    </>
  )
}

export default Result
