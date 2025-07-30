import { useEffect } from 'react'
import { useState, useRef } from 'react'
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';

const Timer = () => {

  const [timer, setTimer] = useState(() => {
     return Number(localStorage.getItem('timer') || 0)
  });
  const [isRunning, setIsRunning] = useState(false);
  const intervalId = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('timer', timer)
  }, [timer])

  useEffect(() => {
    startRef.current.focus();
  }, [])


  const toggleTimer = () => {
    if (isRunning) {
      //pause the timer
      clearInterval(intervalId.current)
      intervalId.current = null
    } else {
      //start the timer
      intervalId.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)
    }
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    clearInterval(intervalId.current)
    intervalId.current = null
    setTimer(0)
    setIsRunning(false)
  }

  return (
    <div className="flex justify-center items-center flex-col space-y-2 bg-gray-300 rounded-lg p-10">
        <TimerDisplay
            timer={timer}
        />
        <TimerControls 
            isRunning={isRunning}
            toggleTimer={toggleTimer}
            resetTimer={resetTimer}
            timer={timer}
            startRef={startRef}
        />
    </div>
  )
}

export default Timer