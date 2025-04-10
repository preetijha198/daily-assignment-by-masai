// src/App.jsx
import React from 'react';
import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Multi-Timer App</h1>
      <div className="timer-container">
  <Stopwatch />
  <Countdown initialSeconds={60} />
</div>

    </div>
  );
}

export default App;
