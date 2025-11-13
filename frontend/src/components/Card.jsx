// components/Card.jsx
import React from 'react';
import Button from './Button';
import './Card.css';

function Card({ title, description, buttonText, onButtonClick }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">{description}</p>
      {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
    </div>
  );
}

export default Card;
