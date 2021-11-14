import React from 'react';
import './Button.css';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className='button'
      >
      {children}
    </button>
  );
};

export default Button;