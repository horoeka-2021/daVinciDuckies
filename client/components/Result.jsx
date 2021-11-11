import React from 'react'

function Result (props) {
  const messages = ['too high, try again']

  return (
    <>
      <div className="result-container">
        <h1>Result</h1>
        <h3>{messages}</h3>
        {/* api price */}
        <p>{props.price}</p>

        {/* guess price */}
        <p>{props.price}</p>

      </div>
    </>
  )
}

export default Result
