import React from 'react'
import { useState, useRef } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const intervalId = useRef(null);
  const startTimer = () => {
    intervalId.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000)
  }

  return (
    <div>
      <h2>timer app</h2>
      <p>{count}</p>
      <button 
        onClick={() => startTimer()}
        className="cursor-pointer"
      >
        Start
      </button>
    </div>
  )
}

export default App