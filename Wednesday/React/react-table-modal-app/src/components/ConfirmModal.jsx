// src/components/ConfirmModal.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ConfirmModal.css';

export default function ConfirmModal({ title, message, onConfirm, onCancel }) {
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', escHandler);
    return () => document.removeEventListener('keydown', escHandler);
  }, [onCancel]);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
