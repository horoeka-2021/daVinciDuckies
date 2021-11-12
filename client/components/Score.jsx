import React, { useEffect } from 'react'

function Score ({ count }) {
  useEffect(() => {

  }, [count])
  return (
    <h1>Score: {count}</h1>
  )
}

export default Score
