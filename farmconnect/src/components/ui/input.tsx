import React from 'react';

export function Input(props) {
  return <input className={`fc-input ${props.className || ''}`.trim()} {...props} />;
}

export default Input;
