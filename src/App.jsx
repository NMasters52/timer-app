import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

const App = () => {

  const [timer, setTimer] = useState(() => {
     return Number(localStorage.getItem('timer') || 0)
  });
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null);

  useEffect(() => {
    localStorage.setItem('timer', timer)
  }, [timer])


  const toggleTimer = () => {
    if (isRunning) {
      //pause the timer
      clearInterval(intervalId.current);
      intervalId.current = null;
    } else {
      //start the timer
      intervalId.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    setIsRunning(!isRunning)
  }

  return (
    <div>
      <h2>timer app</h2>
      <p>{timer}</p>
      <button 
        onClick={toggleTimer}
        className="cursor-pointer"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  )
}

export default App