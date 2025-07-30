import React from 'react'

const TimerControls = ({toggleTimer, isRunning, resetTimer, timer, startRef}) => {
  return (
    <div className="space-x-2">
        <button 
            ref={startRef}
            onClick={toggleTimer}
            className="cursor-pointer bg-blue-600 py-2 px-4 rounded-md text-white hover:bg-blue-500 text-md focus:outline-yellow-400"
        >
            {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
            disabled={timer > 0 ? false : true}
            className="bg-orange-600 cursor-pointer disabled:bg-gray-300 py-2 px-4 rounded-md text-white  hover:bg-orange-500 text-md"
            onClick={resetTimer}
        >
            Reset
        </button>
    </div>
  )
}

export default TimerControls