import React, { useState } from 'react'
import Form from './Form'
import Art from './Art'

function Home () {


  // const [test, setTest] = useState([])

  return (
    <div className='wrapper'>
        
        <div className='header'>
                <img className="header-image" src="images/FernandexToni-DaisyDuck.jpg" />
                <h1 className='title'>da Vinci Duckies</h1>
        </div>

        <div className="body">
            <h3>How much do you think the art is worth?</h3>
            <Art />
            <Form />
        </div>
    </div>
  )
}

export default Home
