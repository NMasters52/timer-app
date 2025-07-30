import React from 'react'

const TimerDisplay = ({ timer }) => {
  return (
    <div className="flex flex-row space-x-2">
        <h2 className="font-semibold text-lg">⏱️ Timer :</h2>
        <p className="text-xl">{timer}</p>
    </div>
  )
}

export default TimerDisplay