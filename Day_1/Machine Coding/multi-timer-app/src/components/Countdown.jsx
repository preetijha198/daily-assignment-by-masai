// src/components/Countdown.jsx
import React, { useState, useEffect, useRef } from 'react';

function Countdown({ initialSeconds }) {
  const [time, setTime] = useState(initialSeconds);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current); // Cleanup
  }, [running, time]);

  const reset = () => {
    setRunning(false);
    setTime(initialSeconds);
  };

  return (
    <div className="timer-box">
  <h2>Stopwatch</h2>
  <p>{time}s</p>
  
      <button onClick={() => setRunning(true)} disabled={time === 0}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Countdown;
