import React, { useState } from 'react'
import  "./EvenOddCheck.css"

function EvenOddCheck() {
  const [click, setClick] = useState(0);

  const handleButton=() => {
    setClick(click + 1)
  };

  return (
    <div className='container'>
      <p className='textOne'>You've clicked <span style={{color:"#ea2d93"}}>{click}</span> times!</p>
      <hr color='black'/>
      <p className='textTwo' > The number of times you have clicked is
          <h2 style={{ color : click % 2 ===0 ? "#97e37a" :"#e56243",margin: "0px 0px" }}>{click % 2 === 0 ? "even!" : "odd!"}</h2>
      </p>

      <button className= "buttonSubmit" onClick={handleButton}> Click Me</button>
      {/* <button className= "buttonSubmit" onClick={() => setClick(click + 1)}> Click Me</button> */}
      <button className= 'buttonReset' onClick={()=> setClick(0)}>Reset </button>
    </div>
  )
}

export default EvenOddCheck;
