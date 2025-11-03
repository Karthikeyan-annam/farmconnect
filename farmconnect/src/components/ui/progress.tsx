import React from 'react';

export function Progress({ value = 0, className = '', ...props }) {
  return (
    <progress value={value} max="100" className={`fc-progress ${className}`.trim()} {...props}>
      {value}%
    </progress>
  );
}

export default Progress;
