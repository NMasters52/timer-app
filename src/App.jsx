import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

const App = () => {

  const [timer, setTimer] = useState(() => {
     return Number(localStorage.getItem('timer') || 0)
  });
  const [isRunning, setIsRunning] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const intervalId = useRef(null);

  useEffect(() => {
    localStorage.setItem('timer', timer)
  }, [timer])

  const resetTimer = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setTimer(0);
    setIsDisabled(true);
    setIsRunning(false)
    
  }

  const toggleTimer = () => {
    if (isRunning) {
      //pause the timer
      clearInterval(intervalId.current);
      intervalId.current = null;
      setIsDisabled(false)
    } else {
      //start the timer
      intervalId.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIsDisabled(false)
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
      <button
        disabled={isDisabled}
        className="bg-blue-600 cursor-pointer disabled:bg-gray-300"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  )
}

export default App