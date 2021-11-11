import React, { useState, useEffect } from 'react'
import { getDuck, refreshPrice } from '../api'

function Art () {
  const [duck, setDuck] = useState('')

  useEffect(() => {
    getDuck()
      .then(result => {
        const newResult = result.output
        setDuck(newResult)
        console.log(newResult)
        console.log(duck)
        return null
      })
      .catch(err => console.error('Oops! There was an error: ', err))
  }, [])

  function handleClick () {
    refreshPrice()
    console.log()
    getDuck()
      .then(result => {
        const newResult = result.output
        setDuck(newResult)
        console.log(newResult)
        console.log(duck)
        return null
      })
      .catch(err => console.error('Oops! There was an error: ', err))
  }

  return (
    <>
      <div className="art-container">
        <img className="duck-Image" src={duck} />
        <div className='directions' >Directions: Look at the quacky artwork to the left - how much do you think it is worth?
Type your answer below the duck, if you are within 10% of the real price, you get a point! You can see your points at the top of the page. When you get to 1 point, you win!</div>
      </div>
      <button onClick={handleClick} >Get New Artwork</button>
    </>
  )
}

export default Art
