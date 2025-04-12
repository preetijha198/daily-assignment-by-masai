import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('countup'); // 'countup' or 'countdown'

  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (mode === 'countdown') {
            return prevTime > 0 ? prevTime - 1 : 0;
          } else {
            return prevTime + 1;
          }
        });
      }, 1000);
    }

    // Cleanup on unmount or when isRunning/mode changes
    return () => clearInterval(intervalRef.current);
  }, [isRunning, mode]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(mode === 'countdown' ? 60 : 0); // 60 seconds default for countdown
  };

  const toggleMode = () => {
    setIsRunning(false);
    setMode((prev) => (prev === 'countup' ? 'countdown' : 'countup'));
    setTime((prev) => (mode === 'countup' ? 60 : 0));
  };

  return (
    <div>
      <h2>{mode === 'countdown' ? 'Countdown' : 'Count Up'} Mode</h2>
      <h1>{time}s</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={start} disabled={isRunning}>Start</button>
        <button onClick={pause} disabled={!isRunning}>Pause</button>
        <button onClick={reset}>Reset</button>
        <button onClick={toggleMode}>Switch Mode</button>
      </div>
    </div>
  );
}

export default Timer;
