// src/components/Stopwatch.jsx
import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current); // Cleanup
  }, [running]);

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="timer-box">
  <h2>Stopwatch</h2>
  <p>{time}s</p>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
