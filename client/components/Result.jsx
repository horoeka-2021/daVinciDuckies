import React from 'react'



function Result(props){
    console.log(props)
    const messages = ['too high, try again']
    
return (
    <>
    <div className="result-container">
        <p>{messages}</p>
        {/* api price */}
        <p>{props.price}</p>
        
        {/* guess price */}
        <p>{props.price}</p>

    </div>
    </>  
)
   
}

export default Result