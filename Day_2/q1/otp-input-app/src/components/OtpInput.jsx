import React, { useState, useRef, useEffect } from 'react';

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [counter, setCounter] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [counter]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, '');
    if (!value) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (index < 5) inputRefs.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) inputRefs.current[index - 1].focus();
      } else {
        const updatedOtp = [...otp];
        updatedOtp[index] = '';
        setOtp(updatedOtp);
      }
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1].focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('text').slice(0, 6).split('');
    if (/^\d{6}$/.test(pasteData.join(''))) {
      setOtp(pasteData);
      inputRefs.current[5].focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 6 || otp.includes('')) {
      alert('❌ Invalid OTP');
    } else {
      alert(`✅ OTP Verified: ${otpValue}`);
    }
  };

  const handleResend = () => {
    setOtp(new Array(6).fill(''));
    setCounter(30);
    setCanResend(false);
    alert("📩 OTP Resent!");
  };

  const handleCopy = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      navigator.clipboard.writeText(otpValue);
      alert("📋 OTP Copied to Clipboard!");
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Enter 6-Digit OTP</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => inputRefs.current[index] = el}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            style={{
              width: '40px',
              height: '50px',
              fontSize: '20px',
              textAlign: 'center',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />
        ))}
      </div>

      <button onClick={handleSubmit} style={{ padding: '10px 20px', margin: '5px' }}>
        Submit OTP
      </button>

      <button
        onClick={handleResend}
        disabled={!canResend}
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: canResend ? '#007bff' : '#ccc',
          color: '#fff',
          cursor: canResend ? 'pointer' : 'not-allowed',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        {canResend ? 'Resend OTP' : `Resend in ${counter}s`}
      </button>

      <button
        onClick={handleCopy}
        style={{ padding: '10px 20px', margin: '5px' }}
      >
        Copy OTP
      </button>
    </div>
  );
};

export default OtpInput;
