// components/Input.jsx
import React from 'react';
import './Input.css';

function Input({ label, type = 'text', name, value, onChange, placeholder }) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        name={name}           // ✅ crucial for controlled inputs
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
}

export default Input;
