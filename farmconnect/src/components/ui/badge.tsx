import React from 'react';

export function Badge({ children, className = '', ...props }) {
  return (
    <span className={`fc-badge ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}

export default Badge;
