import React, { useState, useEffect } from 'react'
import { getDuck } from '../api'

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

  return (
    <>
      <div className="art-container">
        <img className="duck-Image" src={duck} />
        { /* <h1>{props.data.title}</h1>
        <img className="duck-Image" src={props.data.image} />
        <p>{props.data.description}</p> */ }
      </div>
    </>
  )
}

export default Art