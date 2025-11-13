// components/Button.jsx
import React from 'react';
import './Button.css';

function Button({ children, onClick, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
