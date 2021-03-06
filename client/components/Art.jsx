import React, { useState, useEffect } from 'react'
import { getDuck } from '../api'

function Art ({ toggle, setToggle, display, setDisplay }) {
  const [duck, setDuck] = useState('')

  useEffect(() => {
    getDuck()
      .then(result => {
        const newResult = result.output
        setDuck(newResult)
        return null
      })
      .catch(err => console.error('Oops! There was an error: ', err))
  }, [])

  function handleClick () {
    setToggle(!toggle)
    if (display) setDisplay(!display)
    getDuck()
      .then(result => {
        const newResult = result.output
        setDuck(newResult)
        return null
      })
      .catch(err => console.error('Oops! There was an error: ', err))
  }

  return (
    <section className="art-section">
      <div className="art-container frame">
        <img className="duck-Image" src={duck} />
      </div>

      <button onClick={handleClick} >Get New Artwork</button>
    </section>
  )
}

export default Art
